import { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { home } from '@/theme';

import { ReferralBanner } from './ReferralBanner';

type ReferralSlide = {
  id: string;
  title: string;
  description: string;
};

const REFERRAL_SLIDES: ReferralSlide[] = [
  {
    id: 'refer-1',
    title: 'Refer and get $30 USD',
    description: 'Invite Friends and get rewarded when they trade.',
  },
  {
    id: 'refer-2',
    title: 'Refer and get $30 USD',
    description: 'Invite Friends and get rewarded when they trade.',
  },
  {
    id: 'refer-3',
    title: 'Refer and get $30 USD',
    description: 'Invite Friends and get rewarded when they trade.',
  },
];

type HomeReferralCarouselProps = {
  onReferPress?: () => void;
};

function CarouselDots({ count, activeIndex }: { count: number; activeIndex: number }) {
  const config = home.referralBanner.pagination;

  return (
    <View style={styles.dotsRow}>
      {Array.from({ length: count }).map((_, index) => {
        const isActive = index === activeIndex;

        return (
          <View
            key={index}
            style={[
              styles.dot,
              isActive ? styles.dotActive : styles.dotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

export function HomeReferralCarousel({ onReferPress }: HomeReferralCarouselProps) {
  const pagerRef = useRef<PagerView>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <PagerView
        ref={pagerRef}
        style={styles.pager}
        initialPage={0}
        onPageSelected={(event) => setActiveIndex(event.nativeEvent.position)}
      >
        {REFERRAL_SLIDES.map((slide) => (
          <View key={slide.id} collapsable={false}>
            <ReferralBanner
              title={slide.title}
              description={slide.description}
              onDismiss={() => setIsVisible(false)}
              onReferPress={onReferPress}
            />
          </View>
        ))}
      </PagerView>

      <CarouselDots count={REFERRAL_SLIDES.length} activeIndex={activeIndex} />
    </View>
  );
}

const bannerConfig = home.referralBanner;
const paginationConfig = home.referralBanner.pagination;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: bannerConfig.marginTop,
    alignSelf: 'stretch',
  },
  pager: {
    height: bannerConfig.height,
  },
  dotsRow: {
    marginTop: paginationConfig.marginTop,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: paginationConfig.gap,
  },
  dot: {
    borderRadius: 9999,
  },
  dotActive: {
    width: paginationConfig.activeWidth,
    height: paginationConfig.activeHeight,
    backgroundColor: paginationConfig.activeColor,
  },
  dotInactive: {
    width: paginationConfig.inactiveSize,
    height: paginationConfig.inactiveSize,
    backgroundColor: paginationConfig.inactiveColor,
  },
});
