import react from "react";
import { Text, View, StyleSheet, SafeAreaView, Image} from "react-native";


const SplashScreen = () =>{
    return(
        <SafeAreaView style={{ flex:1 }}>
            <View style={{ flex:1, backgroundColor:"purple",justifyContent:"flex-end", alignItems:"center"}}>
                <Image source={require("../assets/LOGO_IBIK.png")} style={styles.logo}></Image>
            </View>
            <View style={{ flex:1, backgroundColor:"purple",    alignItems:"center"}}>
                <Text style={{ marginTop:350,color:"white" }}>Loading...</Text>
            </View>
        </SafeAreaView>
    );
};

export {SplashScreen};

const styles = StyleSheet.create({

    logo:{
        width:100,
        height:100,
    }
});