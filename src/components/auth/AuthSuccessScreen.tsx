import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import type { ImageSource } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/ui/Button';
import { colors, typography } from '@/theme';

type AuthSuccessScreenProps = {
  image: ImageSource;
  imageSize?: { width: number; height: number };
  title: string;
  buttonTitle: string;
  onButtonPress: () => void;
  buttonLoading?: boolean;
  footer?: ReactNode;
};

export function AuthSuccessScreen({
  image,
  imageSize = { width: 200, height: 200 },
  title,
  buttonTitle,
  onButtonPress,
  buttonLoading = false,
  footer,
}: AuthSuccessScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={image}
            style={imageSize}
            contentFit="contain"
          />

          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.footer}>
          <Button
            title={buttonTitle}
            variant="primary"
            size="lg"
            fullWidth
            loading={buttonLoading}
            onPress={onButtonPress}
          />
          {footer}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background.app,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    alignSelf: 'stretch',
  },
  title: {
    alignSelf: 'stretch',
    fontFamily: typography.title.landingH5.fontFamily,
    fontSize: typography.title.landingH5.fontSize,
    fontWeight: typography.title.landingH5.fontWeight,
    lineHeight: typography.title.landingH5.lineHeight,
    letterSpacing: typography.title.landingH5.letterSpacing,
    color: typography.title.landingH5.color,
    textAlign: 'center',
  },
  footer: {
    gap: 16,
  },
});
