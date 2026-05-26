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
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import ChevronLeftIcon from '../../../assets/chevron-left.svg';
import { colors, typography } from '@/theme';

type AuthFormScreenProps = {
  title: string;
  children?: ReactNode;
  footer?: ReactNode;
  onBack?: () => void;
  contentStyle?: StyleProp<ViewStyle>;
};

export function AuthFormScreen({
  title,
  children,
  footer,
  onBack,
  contentStyle,
}: AuthFormScreenProps) {
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
          <View style={styles.header}>
            <Pressable
              accessibilityLabel="Go back"
              accessibilityRole="button"
              hitSlop={8}
              onPress={handleBack}
              style={styles.backButton}
            >
              <ChevronLeftIcon width={24} height={24} />
            </Pressable>

            <Text style={styles.title}>{title}</Text>

            <View style={styles.headerSpacer} />
          </View>

          {children}

          {footer ? <View style={styles.footer}>{footer}</View> : null}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export const authFormScreenStyles = StyleSheet.create({
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  backButton: {
    width: 24,
  },
  title: {
    flex: 1,
    fontFamily: typography.title.h5.fontFamily,
    fontSize: typography.title.h5.fontSize,
    fontWeight: typography.title.h5.fontWeight,
    lineHeight: typography.title.h5.lineHeight,
    color: typography.title.h5.color,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 24,
  },
  footer: {
    marginTop: 'auto',
    paddingTop: 32,
  },
});
