import React from "react";
import { View, Text } from "react-native";

export default function InformationScreen() {
  return (
    <View>
      <Text
        style={{
          marginTop: 100,
          fontSize: 30,
          textAlign: "center",
          fontWeight: "bold",
          textDecorationLine: "underline",
        }}
      >
        About the Hawkesbury
      </Text>
      <Text
        style={{
          marginTop: 100,
        }}
      >
        {'\n'}The Hawkesbury is a piece of the country right on the doorstep of
        Sydney, Australia.{'\n'} Just over an hours drive from the Sydney CBD, the
        area boasts natural wonders including the Blue Mountains National Park,
        boutique hospitality and farm gate locations along with charming
        historic townships.{'\n'} You can take a long drive through the country side,
        find hidden vistas on a bush walk or spend a lazy afternoon cruising the
        Hawkesbury River.{'\n'} Along the way you can buy some delicious apple pie,
        pick some fruit, find an antique bargain or buy a hand crafted piece
        directly from the artist.{'\n'} Stay the night in one of our highly awarded
        bed and breakfasts, hotels or cottages and soak up the beauty and
        delights over multiple days.{'\n'} Plan ahead to participate in one of our
        many music and cultural festivals or other events throughout the year.{'\n'}
        There is always something new to discover in the Hawkesbury.
      </Text>
    </View>
  );
}
