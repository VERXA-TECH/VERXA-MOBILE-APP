import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import CloseIcon from '../../../assets/home/close-line.svg';
import { Button } from '@/components/ui/Button';
import { home } from '@/theme';

type ReferralBannerProps = {
  title?: string;
  description?: string;
  onDismiss?: () => void;
  onReferPress?: () => void;
};

export function ReferralBanner({
  title = 'Refer and get $30 USD',
  description = 'Invite Friends and get rewarded when they trade.',
  onDismiss,
  onReferPress,
}: ReferralBannerProps) {
  const config = home.referralBanner;

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/home/refer-banner-glow.png')}
        style={StyleSheet.absoluteFill}
        contentFit="cover"
      />

      <LinearGradient
        colors={config.gradient.colors}
        start={config.gradient.start}
        end={config.gradient.end}
        style={StyleSheet.absoluteFill}
      />

      <Pressable
        accessibilityLabel="Dismiss banner"
        accessibilityRole="button"
        hitSlop={8}
        onPress={onDismiss}
        style={styles.closeButton}
      >
        <CloseIcon width={20} height={20} color={config.closeColor} />
      </Pressable>

      <View style={styles.contentRow} pointerEvents="box-none">
        <View style={styles.textColumn}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>

          <Button
            title="Refer Now"
            variant="primary"
            size="sm"
            onPress={onReferPress}
          />
        </View>

        <Image
          source={require('../../../assets/home/refer-banner-gift.png')}
          style={styles.gift}
          contentFit="contain"
        />
      </View>
    </View>
  );
}

const config = home.referralBanner;

const styles = StyleSheet.create({
  container: {
    height: config.height,
    borderRadius: config.borderRadius,
    overflow: 'hidden',
    padding: config.padding,
  },
  closeButton: {
    position: 'absolute',
    top: config.closeInset,
    right: config.closeInset,
    zIndex: 2,
  },
  contentRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: config.contentGap,
  },
  textColumn: {
    flex: 1,
    gap: config.textGap,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    ...config.title,
    alignSelf: 'stretch',
  },
  description: {
    ...config.description,
    alignSelf: 'stretch',
  },
  gift: {
    width: config.gift.width,
    height: config.gift.height,
  },
});
