import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function WalletDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Wallet: {id}</Text>
    </View>
  );
}
