import type { ImageSource } from 'expo-image';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { Button } from '@/components/ui/Button';
import { colors, typography } from '@/theme';

type EmptyStateCardProps = {
  image: ImageSource;
  imageSize?: number;
  title: string;
  description: string;
  actionLabel: string;
  onActionPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  descriptionMaxWidth?: number;
};

export function EmptyStateCard({
  image,
  imageSize = 88,
  title,
  description,
  actionLabel,
  onActionPress,
  containerStyle,
  descriptionMaxWidth,
}: EmptyStateCardProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        source={image}
        style={{ width: imageSize, height: imageSize }}
        contentFit="contain"
      />

      <Text style={styles.title}>{title}</Text>

      <Text
        style={[
          styles.description,
          descriptionMaxWidth ? { maxWidth: descriptionMaxWidth } : null,
        ]}
      >
        {description}
      </Text>

      <Button
        title={actionLabel}
        variant="primary"
        size="sm"
        fullWidth
        onPress={onActionPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    gap: 20,
  },
  title: {
    fontFamily: typography.label.large.fontFamily,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.27,
    color: colors.text.strong,
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  description: {
    fontFamily: typography.label.xSmall.fontFamily,
    fontSize: 12,
    lineHeight: 16,
    color: colors.text.soft400,
    textAlign: 'center',
  },
});
