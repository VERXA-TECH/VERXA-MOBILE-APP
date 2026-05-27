import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import ChatIcon from '../../../assets/home/chat-smile-line.svg';
import NotificationIcon from '../../../assets/home/notification-line.svg';
import { home } from '@/theme';

type HomeHeaderProps = {
  name: string;
  onChatPress?: () => void;
  onNotificationPress?: () => void;
};

export function HomeHeader({
  name,
  onChatPress,
  onNotificationPress,
}: HomeHeaderProps) {
  const config = home.header;

  return (
    <View style={styles.container}>
      <View style={styles.identity}>
        <View style={styles.avatarRing}>
          <Image
            source={require('../../../assets/home/avatar.png')}
            style={styles.avatar}
            contentFit="cover"
          />
        </View>

        <View style={styles.textStack}>
          <Text style={styles.name}>Hello, {name}</Text>
          <Text style={styles.welcome}>Welcome Back!</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <Pressable
          accessibilityLabel="Open chat"
          accessibilityRole="button"
          hitSlop={8}
          onPress={onChatPress}
          style={styles.iconButton}
        >
          <ChatIcon width={24} height={24} color={config.iconColor} />
        </Pressable>

        <Pressable
          accessibilityLabel="Open notifications"
          accessibilityRole="button"
          hitSlop={8}
          onPress={onNotificationPress}
          style={styles.iconButton}
        >
          <View>
            <NotificationIcon width={24} height={24} color={config.iconColor} />
            <View style={styles.notificationDot} />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const config = home.header;

const styles = StyleSheet.create({
  container: {
    paddingTop: config.paddingTop,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  identity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: config.identityGap,
    flexShrink: 1,
  },
  avatarRing: {
    width: config.avatarSize,
    height: config.avatarSize,
    borderRadius: config.avatarBorderRadius,
    borderWidth: config.avatarBorderWidth,
    borderColor: config.avatarBorderColor,
    backgroundColor: config.avatarBackground,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  textStack: {
    gap: config.textGap,
    flexShrink: 1,
  },
  name: config.name,
  welcome: config.welcome,
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: config.actionsGap,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 9999,
    backgroundColor: config.notificationDotColor,
  },
});
