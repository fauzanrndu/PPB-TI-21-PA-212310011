import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../Pertemuan2/assets/man-avatar.png")}
        style={{ width:50, height:50 }}
        />
      </View>
      <Text>My Profile</Text>
      <Text>Nama: Muhamad Fauzan Rindu Maulana</Text>
      <Text>Kelas: TI-21-PA</Text>
      <StatusBar style="auto" />
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
