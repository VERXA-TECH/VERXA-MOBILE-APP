import { Text } from 'react-native';

import type { HeadlinePart } from '@/constants/onboarding';
import { typography } from '@/theme';

type HighlightedHeadlineProps = {
  parts: HeadlinePart[];
};

export function HighlightedHeadline({ parts }: HighlightedHeadlineProps) {
  return (
    <Text
      style={{
        fontFamily: typography.headline.fontFamily,
        fontSize: typography.headline.fontSize,
        fontWeight: typography.headline.fontWeight,
        lineHeight: typography.headline.lineHeight,
        letterSpacing: typography.headline.letterSpacing,
      }}
    >
      {parts.map((part, index) => {
        if (typeof part === 'string') {
          return (
            <Text key={index} style={{ color: typography.headline.color }}>
              {part}
            </Text>
          );
        }

        return (
          <Text key={index} style={{ color: typography.headline.accentColor }}>
            {part.highlight}
          </Text>
        );
      })}
    </Text>
  );
}
