import { StyleSheet, Text, View } from 'react-native';
import IndexPhoto from "./composents/camera/photo/indexPhoto";
import IndexSynchro from "./composents/synchro/indexSynchro";

export default function App() {
  return (
    <View style={styles.container}>
      <IndexSynchro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
