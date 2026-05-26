import type { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { Image } from 'expo-image';
import type { ImageSource } from 'expo-image';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import ChevronLeftIcon from '../../../assets/chevron-left.svg';
import { colors, typography } from '@/theme';

type AuthScreenShellProps = {
  heroImage: ImageSource;
  heroImageSize?: { width: number; height: number };
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  onBack?: () => void;
  contentStyle?: StyleProp<ViewStyle>;
};

export function AuthScreenShell({
  heroImage,
  heroImageSize = { width: 160, height: 160 },
  title,
  description,
  children,
  footer,
  onBack,
  contentStyle,
}: AuthScreenShellProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }

    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <ScrollView
          contentContainerStyle={[styles.scrollContent, contentStyle]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Pressable
            accessibilityLabel="Go back"
            accessibilityRole="button"
            hitSlop={8}
            onPress={handleBack}
            style={styles.backButton}
          >
            <ChevronLeftIcon width={24} height={24} />
          </Pressable>

          <View style={styles.header}>
            <Image
              source={heroImage}
              style={heroImageSize}
              contentFit="contain"
            />

            <Text style={styles.title}>{title}</Text>

            {description ? (
              typeof description === 'string' ? (
                <Text style={styles.subtitle}>{description}</Text>
              ) : (
                description
              )
            ) : null}
          </View>

          {children}

          {footer ? <View style={styles.footer}>{footer}</View> : null}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export const authScreenStyles = StyleSheet.create({
  subtitle: {
    fontFamily: typography.label.medium.fontFamily,
    fontSize: typography.label.medium.fontSize,
    fontWeight: typography.label.medium.fontWeight,
    lineHeight: typography.label.medium.lineHeight,
    letterSpacing: typography.label.medium.letterSpacing,
    color: colors.text.soft400,
    textAlign: 'center',
  },
  highlightedEmail: {
    fontFamily: typography.label.medium.fontFamily,
    fontSize: typography.label.medium.fontSize,
    fontWeight: typography.label.medium.fontWeight,
    lineHeight: typography.label.medium.lineHeight,
    letterSpacing: typography.label.medium.letterSpacing,
    color: colors.primary.base,
    textAlign: 'center',
  },
  form: {
    gap: 16,
  },
});

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background.app,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  header: {
    alignItems: 'center',
    gap: 8,
    marginBottom: 32,
  },
  title: {
    fontFamily: typography.title.h5.fontFamily,
    fontSize: typography.title.h5.fontSize,
    fontWeight: typography.title.h5.fontWeight,
    lineHeight: typography.title.h5.lineHeight,
    color: typography.title.h5.color,
    textAlign: 'center',
  },
  subtitle: authScreenStyles.subtitle,
  footer: {
    marginTop: 'auto',
    paddingTop: 32,
  },
});
