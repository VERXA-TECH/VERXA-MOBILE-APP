import type { ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
} from 'react-native';

import { colors, input as inputTokens, typography } from '@/theme';

type TextFieldProps = Omit<TextInputProps, 'style'> & {
  label: string;
  error?: string;
  rightIcon?: ReactNode;
  onRightIconPress?: () => void;
};

export function TextField({
  label,
  error,
  rightIcon,
  onRightIconPress,
  ...textInputProps
}: TextFieldProps) {
  const hasError = Boolean(error);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>

      <View
        style={[
          styles.inputContainer,
          hasError && styles.inputContainerError,
        ]}
      >
        <TextInput
          {...textInputProps}
          style={styles.input}
          placeholderTextColor={colors.text.placeholder}
        />

        {rightIcon ? (
          onRightIconPress ? (
            <Pressable
              accessibilityRole="button"
              hitSlop={8}
              onPress={onRightIconPress}
              style={styles.rightIcon}
            >
              {rightIcon}
            </Pressable>
          ) : (
            <View style={styles.rightIcon}>{rightIcon}</View>
          )
        ) : null}
      </View>

      {hasError ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
    alignSelf: 'stretch',
  },
  label: {
    fontFamily: typography.label.small.fontFamily,
    fontSize: typography.label.small.fontSize,
    fontWeight: typography.label.small.fontWeight,
    lineHeight: typography.label.small.lineHeight,
    letterSpacing: typography.label.small.letterSpacing,
    color: typography.label.small.color,
  },
  inputContainer: {
    height: inputTokens.height,
    flexDirection: 'row',
    alignItems: 'center',
    gap: inputTokens.gap,
    alignSelf: 'stretch',
    borderRadius: inputTokens.borderRadius,
    borderWidth: 1,
    borderColor: inputTokens.borderColor,
    backgroundColor: inputTokens.backgroundColor,
    paddingTop: inputTokens.padding.top,
    paddingRight: inputTokens.padding.right,
    paddingBottom: inputTokens.padding.bottom,
    paddingLeft: inputTokens.padding.left,
    ...inputTokens.shadow,
  },
  inputContainerError: {
    borderColor: inputTokens.errorBorderColor,
  },
  input: {
    flex: 1,
    padding: 0,
    fontFamily: typography.paragraph.input.fontFamily,
    fontSize: typography.paragraph.input.fontSize,
    fontWeight: typography.paragraph.input.fontWeight,
    lineHeight: typography.paragraph.input.lineHeight,
    letterSpacing: typography.paragraph.input.letterSpacing,
    color: typography.paragraph.input.color,
  },
  rightIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    fontFamily: typography.paragraph.error.fontFamily,
    fontSize: typography.paragraph.error.fontSize,
    fontWeight: typography.paragraph.error.fontWeight,
    lineHeight: typography.paragraph.error.lineHeight,
    letterSpacing: typography.paragraph.error.letterSpacing,
    color: typography.paragraph.error.color,
  },
});
