import { View,Text} from "react-native";
import react from "react";

function ProfileRfc(){
    const educations =[{id:1,school:"sdn 1 kota bogor"},{id:2,school:"smpn 1 kota bogor"},{id:3,school:"sman 1 kota bogor"},]
    const identity = [{npm: 212310011, firstname:"fauzan", lastname:"rindu", mobilephone:"082113099486", email:"212310011@student.ibik.ad.id", gender:"m", tallbody:170, weightbody:60},]
    return(
        <View>
            <Ide identity={identity} /> 
            <Edu educations={educations} />
        </View>
    );
}

export default ProfileRfc;

const Ide =({identity}) => {
    return(
        <View>
            <Text>Menggunakan Rfc</Text>
            <Text>Identity</Text>
            {identity.map((v,index)=>(
                <View key={index}>
                    <Text>NPM:{v.npm} </Text>
                    <Text>FirstName: {v.firstname} </Text>
                    <Text>LastName: {v.lastname} </Text>
                    <Text>MobilePhone: {v.mobilephone} </Text>
                    <Text>Email: {v.email} </Text>
                    <Text>Gender: {v.gender} </Text>
                    <Text>TallBody: {v.tallbody} </Text>
                    <Text>WeightBody: {v.weightbody} </Text>
                </View>
            ))}
        </View>
    )
};

const Edu = ({educations}) => {
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