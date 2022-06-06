import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CameraScreen from "./composents/camera/video/indexVideo";
import IndexPhoto from "./composents/camera/photo/indexPhoto";
import IndexVideo from "./composents/camera/video/indexVideo";

export default function App() {
  return (
    <View style={styles.container}>
      <IndexVideo />
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
