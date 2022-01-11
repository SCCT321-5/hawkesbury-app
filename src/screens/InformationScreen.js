import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Hawkesbury from "../assets/images/hawkesbury.jpg";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default function InformationScreen() {
  return (
    <View>
      <Text
        style={{
          marginTop: 100,
          marginBottom: 20,
          fontSize: 30,
          textAlign: "center",
          fontWeight: "bold",
          textDecorationLine: "underline",
        }}
      >
        About the Hawkesbury
      </Text>
      <Image source={Hawkesbury}
        style={{ height: 150, width: "100%",alignSelf:'center' }}
        />
      <Text
        style={{
          margin: 24,
        }}
      >
        The Hawkesbury is a piece of the country right on the doorstep of
        Sydney, Australia.  Just over an hours drive from the Sydney CBD, the
        area boasts natural wonders including the Blue Mountains National Park,
        boutique hospitality and farm gate locations along with charming
        historic townships. {'\n'} {'\n'} You can take a long drive through the country side,
        find hidden vistas on a bush walk or spend a lazy afternoon cruising the
        Hawkesbury River. Along the way you can buy some delicious apple pie,
        pick some fruit, find an antique bargain or buy a hand crafted piece
        directly from the artist. {'\n'} {'\n'}Stay the night in one of our highly awarded
        bed and breakfasts, hotels or cottages and soak up the beauty and
        delights over multiple days. Plan ahead to participate in one of our
        many music and cultural festivals or other events throughout the year.
        There is always something new to discover in the Hawkesbury.
      </Text>
    </View>
  );
}
