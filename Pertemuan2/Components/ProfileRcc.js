import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ProfileRcc extends Component {

    constructor(props){
        super(props);
        this.Edu=this.Edu.bind(this);
        this.state ={
            identity: {npm: 212310011, firstname:"fauzan", lastname:"rindu", mobilephone:"082113099486", email:"212310011@student.ibik.ad.id", gender:"m", tallbody:170, weightbody:60},
        };
    }

    Edu = (educations) => {
        return(
            <View>
                <Text>Educations</Text>
                {educations.map((v,index)=>(
                    <View key={index}>
                        <Text>Id: {v.id} School: {v.school} </Text>
                    </View>
                ))}
            </View>
        )
    };

    render() {
        return (
          <View>
            <Text>Menggunakan Rcc</Text>
            <Text>ini adalah identity</Text>
            <Text>Npm: {this.state.identity.npm} </Text>
            <Text>FirstName: {this.state.identity.firstname} </Text>
            <Text>LastName: {this.state.identity.lastname} </Text>
            <Text>MobilePhone: {this.state.identity.mobilephone} </Text>
            <Text>FirstName: {this.state.identity.firstname} </Text>
            <Text>Email: {this.state.identity.email} </Text>
            <Text>Gender: {this.state.identity.gender} </Text>
            <Text>tallbody: {this.state.identity.tallbody} </Text>
            <Text>weightbody: {this.state.identity.weightbody} </Text>
            {this.Edu([{id:1,school:"sdn 1 kota bogor"},{id:2,school:"smpn 1 kota bogor"},{id:3,school:"sman 1 kota bogor"},])}
          </View>
        );
    }
}

export default ProfileRcc;