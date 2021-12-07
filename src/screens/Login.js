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
import Logo from "../assets/icon/TheHawkesburyApp.png";

export default function Login({ navigation }) {
  const [emailAddress,setEmailAddress] = React.useState('')
  const [password,setPassword] = React.useState('');
  const onLoginClick=()=>{
    // let emailExpression = '\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b';
    // if(emailAddress == '' || password == ''){
    //   alert('Email cannot be empty');
    // }
    // else if (emailExpression.test(emailAddress) === false) {
    //   alert('Please enter a valid Email');
    // }
    navigation.navigate('Tab')
    
  }
  return (
    <View style={styles.container}>
      {/* <Text>Login</Text>
      <Image source={Logo} />

      <StatusBar style="auto" /> */}
      <View
        style={{
          width: "95%",
          alignSelf: "center",
          padding: 20,
        }}
      >
        <TextInput
          style={{
            backgroundColor: "#fff",
            height: 50,
            width: "95%",
            alignSelf: "center",
            borderWidth: 1,
            borderColor: "#000",
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
          placeholder="Email Address"
          onChangeText={(text)=>{
            setEmailAddress(text);
          }}
          value={emailAddress}
        />
        <TextInput
          style={{
            backgroundColor: "#fff",
            height: 50,
            width: "95%",
            alignSelf: "center",
            marginVertical: 15,
            borderWidth: 1,
            borderColor: "#000",
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
          placeholder="Password"
          onChangeText={(text)=>{
            setPassword(text);
          }}
          value={password}
          secureTextEntry={false}
        />
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontWeight: "bold",
            }}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#bbb",
            height: 50,
            width: "95%",
            alignSelf: "center",
            borderWidth: 1,
            borderColor: "#000",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={()=> onLoginClick()}
          
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#bbb",
            height: 50,
            width: "95%",
            alignSelf: "center",
            borderWidth: 1,
            borderColor: "#000",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
          onPress={()=> navigation.navigate('Register')}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
