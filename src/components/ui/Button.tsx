import type { ReactNode } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { button as buttonTokens, colors, typography } from '@/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = Omit<PressableProps, 'children' | 'style'> & {
  /** Visible label — omit when using `children`. */
  title?: string;
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

type VariantStyle = {
  container: ViewStyle;
  textColor: string;
  indicatorColor: string;
};

type SizeStyle = {
  height: number;
  paddingHorizontal: number;
  paddingVertical: number;
  gap: number;
  textHorizontal: number;
  borderRadius: number;
  label: (typeof typography)['label']['medium'] | (typeof typography)['label']['xSmall'];
};

function getSizeStyle(size: ButtonSize): SizeStyle {
  const padding = buttonTokens.padding[size];
  const label = size === 'sm' ? typography.label.xSmall : typography.label.medium;

  return {
    height: buttonTokens.height[size],
    paddingHorizontal: padding.horizontal,
    paddingVertical: padding.vertical,
    gap: padding.gap,
    textHorizontal: padding.textHorizontal,
    borderRadius: size === 'sm' ? buttonTokens.radius.sm : buttonTokens.radius.md,
    label,
  };
}

function getVariantStyle(variant: ButtonVariant, disabled: boolean): VariantStyle {
  if (disabled) {
    if (variant === 'ghost' || variant === 'link') {
      return {
        container: { backgroundColor: 'transparent' },
        textColor: colors.button.disabledText,
        indicatorColor: colors.button.disabledText,
      };
    }

    return {
      container: { backgroundColor: colors.button.disabledBackground },
      textColor: colors.button.disabledText,
      indicatorColor: colors.button.disabledText,
    };
  }

  switch (variant) {
    case 'secondary':
      return {
        container: {
          backgroundColor: colors.holly[700],
          borderWidth: 1,
          borderColor: colors.holly[600],
        },
        textColor: colors.text.strong,
        indicatorColor: colors.text.strong,
      };
    case 'ghost':
      return {
        container: { backgroundColor: 'transparent' },
        textColor: colors.text.strong,
        indicatorColor: colors.text.strong,
      };
    case 'link':
      return {
        container: { backgroundColor: 'transparent' },
        textColor: colors.lemon[500],
        indicatorColor: colors.lemon[500],
      };
    case 'primary':
    default:
      return {
        container: { backgroundColor: colors.primary.base },
        textColor: colors.text.onPrimary,
        indicatorColor: colors.text.onPrimary,
      };
  }
}

export function Button({
  title,
  children,
  variant = 'primary',
  size = 'lg',
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  ...pressableProps
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const sizeStyle = getSizeStyle(size);
  const variantStyle = getVariantStyle(variant, isDisabled);
  const label = title ?? (typeof children === 'string' ? children : undefined);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      {...pressableProps}
      style={({ pressed }) => [
        fullWidth && styles.fullWidth,
        pressed && !isDisabled && styles.pressed,
      ]}
    >
      <View
        style={[
          styles.container,
          {
            height: sizeStyle.height,
            paddingHorizontal: sizeStyle.paddingHorizontal,
            paddingVertical: sizeStyle.paddingVertical,
            borderRadius: sizeStyle.borderRadius,
            gap: sizeStyle.gap,
          },
          variantStyle.container,
          fullWidth && styles.containerFullWidth,
          style,
        ]}
      >
        {loading ? (
          <ActivityIndicator color={variantStyle.indicatorColor} size="small" />
        ) : (
          <>
            {leftIcon ? <View style={styles.icon}>{leftIcon}</View> : null}

            {label ? (
              <View style={{ paddingHorizontal: sizeStyle.textHorizontal }}>
                <Text
                  style={[
                    styles.label,
                    {
                      fontFamily: sizeStyle.label.fontFamily,
                      fontSize: sizeStyle.label.fontSize,
                      fontWeight: sizeStyle.label.fontWeight,
                      lineHeight: sizeStyle.label.lineHeight,
                      letterSpacing: sizeStyle.label.letterSpacing,
                      color: variantStyle.textColor,
                    },
                  ]}
                >
                  {label}
                </Text>
              </View>
            ) : (
              children
            )}

            {rightIcon ? <View style={styles.icon}>{rightIcon}</View> : null}
          </>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fullWidth: {
    alignSelf: 'stretch',
  },
  pressed: {
    opacity: buttonTokens.pressedOpacity,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  containerFullWidth: {
    alignSelf: 'stretch',
  },
  label: {
    textAlign: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
