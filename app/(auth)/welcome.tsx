import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OnboardingBackground } from '@/components/onboarding/OnboardingBackground';
import { HighlightedHeadline } from '@/components/onboarding/HighlightedHeadline';
import { Button } from '@/components/ui/Button';
import { WELCOME_BACKGROUND } from '@/constants/onboarding';
import { useOnboardingBottomInset } from '@/hooks/useOnboardingBottomInset';
import { typography } from '@/theme';

export default function WelcomeScreen() {
  const router = useRouter();
  const bottomInset = useOnboardingBottomInset();

  return (
    <OnboardingBackground source={WELCOME_BACKGROUND}>
      <SafeAreaView className="flex-1 px-5" edges={['top']}>
        <View className="flex-1 justify-between py-4">
          <View className="gap-3 pt-4">
            <HighlightedHeadline
              parts={[
                'Borderless finance for ',
                { highlight: 'limitless possibilities' },
              ]}
            />
            <Text
              style={{
                fontFamily: typography.subheadline.fontFamily,
                fontSize: typography.subheadline.fontSize,
                fontWeight: typography.subheadline.fontWeight,
                lineHeight: typography.subheadline.lineHeight,
                letterSpacing: typography.subheadline.letterSpacing,
                color: typography.subheadline.color,
              }}
            >
              Verxa empowers you to move, manage and grow your money globally. Your journey
              starts now.
            </Text>
          </View>

          {/* Background PNG includes the Verxa logo — keep this area clear */}
          <View className="flex-1" />

          <View className="gap-4" style={{ paddingBottom: bottomInset }}>
            <Button
              title="Get Started"
              variant="primary"
              size="lg"
              fullWidth
              onPress={() => router.push('/(auth)/register')}
            />

            <Button
              title="I already have an account"
              variant="link"
              size="md"
              fullWidth
              onPress={() => router.push('/(auth)/login')}
            />
          </View>
        </View>
      </SafeAreaView>
    </OnboardingBackground>
  );
}
