import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';


export default function NotFoundScreen() {
  return (
    <View>
      <Text>not found</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
