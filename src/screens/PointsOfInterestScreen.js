import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";
import Logo from "../assets/icon/TheHawkesburyApp.png";
import { Ionicons } from "@expo/vector-icons";
import businesslistingarray from "../constants/businesslistingarray";
import attractiondata from "../constants/attractiondata";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function PointsOfInterestScreen({ navigation, route }) {
  //const [rData, setRData] = React.useState(businesslistingarray);
  const category=route.params?.data.name ==undefined?"undefined":route.params?.data.name;
  console.log(category);
  const [rData, setRData] = React.useState([]);
  const onclick = (item) => {
    navigation.navigate({
      name: "Details",
      params: { data: item },
    });
  };
  const handleSearch = (text: string) => {
    var newData = attractiondata;
    newData = attractiondata.filter((item: any) => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setRData(newData);
  };
  React.useEffect(() => {
    //alert(route.params?.data.name)
    if (route.params?.data.name !== undefined) {
      var results = attractiondata.filter(
        (data) => data.category === route.params?.data.name
      );
      setRData(results);
      // console.log(results);
    } else {
      setRData(attractiondata);
    }
    //alert(results);
  }, [category]);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={"#fff"}
        translucent={true}
        barStyle={"light-content"}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        Attraction
      </Text>

      <View
        style={{
          width: "90%",
          alignSelf: "center",
          padding: 10,
          paddingVertical: 5,
          borderWidth: 1,
          borderColor: "#000",
          borderRadius: 10,
          flexDirection: "row",
          marginTop: 10,
          backgroundColor: "#fff",
        }}
      >
        <Ionicons name="search-outline" size={32} />
        <TextInput
          style={{
            backgroundColor: "#fff",
            width: "90%",
            height: "80%",
            alignSelf: "center",

            paddingHorizontal: 10,
          }}
          placeholder={route.params?.data.name}
          onChange={(text) => handleSearch(text)}
        />
      </View>
      <FlatList
        data={rData}
        contentContainerStyle={{
          paddingBottom: 100,
          width: "100%",
          paddingTop: 10,
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => onclick(item)}
              style={{
                alignSelf: "center",
                justifyContent: "center",
                // width: "25%",
                marginTop: index == 0 ? 0 : 15,
                width: "90%",
                borderRadius: 5,
                borderWidth: 1,
              }}
            >
              <Card data={item} />
            </TouchableOpacity>
          );
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textstyle: {
    fontSize: height * 0.04,
    textAlign: "center",
    fontWeight: "bold",
  },
});
