import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function TransactionDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Transaction: {id}</Text>
    </View>
  );
}
