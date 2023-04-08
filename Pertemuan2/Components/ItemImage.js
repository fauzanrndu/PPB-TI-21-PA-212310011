import { View,Image, StyleSheet, SafeAreaView } from "react-native";
import React from "react";


const ItemImage = () =>{
    return(
        <View> 
            <Image 
            source={require("../assets/man-avatar.png")}
            style={{width:150, height:150,backgroundColor:"skyblue",marginVertical:100}}
            />
        </View>
    );
};

export {ItemImage};