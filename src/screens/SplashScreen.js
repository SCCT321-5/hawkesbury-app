import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Logo from "../assets/icon/TheHawkesburyApp.png";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default function SplashScreen({ navigation }) {
  setTimeout(function () {
    navigation.navigate("Tab");
  }, 5000);
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>THE HAWKESBURY APP</Text>
      <Image source={Logo} />
      <StatusBar style="auto" />
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
  textstyle: {
    fontSize: height * 0.04,
    textAlign: "center",
    fontWeight: "bold",
  },
});
