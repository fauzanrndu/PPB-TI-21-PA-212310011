import { SafeAreaView, StyleSheet, View } from "react-native";
import { ItemImage } from "./Components/ItemImage";
import { ItemTyphograp } from "./Components/ItemTyphograp";
import { SplashScreen } from "./Components/SplashScreen";
import ProfileRfc from "./Components/ProfileRfc";
import ProfileRcc from "./Components/ProfileRcc";



export default function App(){
  return(
    // <ProfileRfc />
    <ProfileRcc />
    // <SplashScreen />
    // <SafeAreaView style={{ flex:1 }}>
    //   <View style={styles.container}>
    //     <ItemTyphograp />
    //     <ItemImage />
    //   </View>
    // </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container:{
//     padding:10,
//     flex:1,
//     alignItems:"center",
//     justifyContent:"center"
//   },
// });