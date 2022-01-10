import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from "react-native";
import Logo from "../assets/icon/HBW_H.png";
import BackgroundImage from "../assets/images/The River.jpg";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default function SplashScreen({ navigation }) {
  setTimeout(function () {
    navigation.navigate("Tab");
  }, 5000);
  return (
    <View style={styles.container}>
      
      <Image source={Logo} />
      <ImageBackground source={BackgroundImage} style={styles}/>
      <Text style={styles.textstyle}>THE HAWKESBURY APP</Text>
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
