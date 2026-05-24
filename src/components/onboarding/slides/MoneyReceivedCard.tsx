import { Text, View } from 'react-native';

import { GlassCard } from '@/components/onboarding/GlassCard';
import { onboarding, typography } from '@/theme';

import SendPlaneIcon from '../../../../assets/onboarding/send-plane-fill.svg';
import UkFlagIcon from '../../../../assets/onboarding/United Kingdom.svg';

const { moneyReceivedCard: card } = onboarding;
const { sendIcon } = card;

export function MoneyReceivedCard() {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: card.position.bottom,
        left: 0,
        right: 0,
        alignItems: 'center',
      }}
    >
      <GlassCard
        style={{
          width: card.width,
          padding: card.padding,
        }}
      >
      <View className="flex-row items-center justify-between">
        <View
          className="flex-row items-center"
          style={{ gap: card.contentGap }}
        >
          <View
            style={{
              backgroundColor: sendIcon.backgroundColor,
              borderRadius: sendIcon.borderRadius,
              paddingTop: sendIcon.paddingTop,
              paddingRight: sendIcon.paddingRight,
              paddingBottom: sendIcon.paddingBottom,
              paddingLeft: sendIcon.paddingLeft,
              alignItems: 'center',
            }}
          >
            <SendPlaneIcon width={sendIcon.iconSize} height={sendIcon.iconSize} />
          </View>

          <View className="items-center">
            <Text style={typography.paragraph.small}>Money Received</Text>

            <Text style={typography.label.large}>+ £1,250.00</Text>

            <Text style={typography.paragraph.small}>
              from{' '}
              <Text style={typography.label.small}>Michael O.</Text>
            </Text>
          </View>
        </View>

        <View
          className="overflow-hidden rounded-full"
          style={{ width: card.flagSize, height: card.flagSize }}
        >
          <UkFlagIcon width={card.flagSize} height={card.flagSize} />
        </View>
      </View>
      </GlassCard>
    </View>
  );
}
