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

export default function Register({ navigation }) {
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
          secureTextEntry={false}
        />
       
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
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
          onPress={()=> navigation.navigate('Login')}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textDecorationLine:'underline',
            }}
          >
            Already have an account? Sign In
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
