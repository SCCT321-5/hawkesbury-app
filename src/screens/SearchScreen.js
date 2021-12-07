import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Logo from "../assets/icon/TheHawkesburyApp.png";

export default function SearchScreen({ navigation }) {
  //const onHomeScreenClick=()=>{
    // let emailExpression = '\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b';
    // if(emailAddress == '' || password == ''){
    //   alert('Email cannot be empty');
    // }
    // else if (emailExpression.test(emailAddress) === false) {
    //   alert('Please enter a valid Email');
    // }
   // navigation.navigate('Tab')
    
  //}
  return (
    <View style={styles.container}>
      {/* <Text>HomeScreen</Text>
      <Image source={Logo} />

      <StatusBar style="auto" /> */}
      <View
        style={{
          width: "95%",
          alignSelf: "center",
          padding: 10,
          borderWidth: 1,
          borderColor: "#000",
          borderRadius: 10,
          flexDirection:'row',
        }}
      ><Ionicons name="search-outline" size={32} />
        <TextInput 
          style={{
            backgroundColor: "#fff",
            width: "95%",
            alignSelf: "center",
           
            paddingHorizontal: 10,
          }}
          placeholder="Search"
        //   onChangeText={(text)=>{
        //     setEmailAddress(text);
        //   }}
         // value={emailAddress}
        />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //justifyContent: "center",
    alignItems:'center',
  },
});
