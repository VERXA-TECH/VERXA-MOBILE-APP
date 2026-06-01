import { StyleSheet, Text, View } from 'react-native';

import { wallets } from '@/theme';

export function WalletsHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Wallets</Text>
    </View>
  );
}

const config = wallets.header;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  title: config.title,
});
