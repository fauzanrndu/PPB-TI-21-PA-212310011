import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ItemTyphograp = () =>{
    return(
        <View>
        <Text 
        style={{
            fontSize: 20,
            fontWeight:"bold",
            backgroundColor:"brown",
            color:"#fff",
            textAlign:"center",
            textDecorationLine:"underline",
            padding:10,
            marginBottom:10
        }}
        >
            History of Bicycle
        </Text>
          <Text style={styles.paragrapf}>
            A bicyle, also called A
            <Text style={{...styles.paragrapf, color:"red"}}> pedal cycle</Text>,
            <Text style={{...styles.paragrapf, fontWeight:"bold"}}>bike</Text>,
            <Text style={{...styles.paragrapf, fontStyle:"italic"}}>push-bike or cycle</Text>,
            is human-powered or motor-powered assisted, pedal-driven, single-track vehicle, 
            having two wheels attached to a frame, one behind the other, A bicycle rider is
            called a cyclist, or bicyclist.
          </Text>
        </View>
    );
};

export {ItemTyphograp};

const styles= StyleSheet.create({
    paragrapf:{
      fontSize: 18, textAlign:"justify", width:200, height:200
    }
  })

