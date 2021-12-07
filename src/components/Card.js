import React from "react";

import { View, TouchableOpacity, StyleSheet, Text, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";



export default function Card(props) {
  console.log(props);

  return (
    <View style={styles.container}>
     <Image
        source={{ uri: props.data.image }}
          style={{
            width: '100%',
            height:120,
           // tintColor: props.data.liked ? "#000" : "#fff",
          alignSelf:'center'
          }}
          resizeMode={"cover"}
        />
        <View style={{ paddingHorizontal: 10,}}>
        <Text  style={{ fontSize:20,fontWeight:'bold',paddingBottom:5 }}>{props.data.name}</Text>
        <View style={{ flexDirection: "row",alignItems: 'center', paddingBottom:5,justifyContent:'space-between' }}>
        <View><Text style={{  }}>{props.data.category}</Text>
        </View>
        {/* <View style={{ flexDirection: "row", paddingBottom:5,alignItems:'center' }}>
        <Ionicons name="star-outline" size={18} />
        <Text style={{ marginLeft: 5 }}>{props.data.rating}+ ratings</Text>
        </View> */}
      </View>
        </View>

        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  //  backgroundColor: "rgba(0, 117, 255, 0.69)",
  alignSelf: 'center',

    width: "100%",

    borderRadius: 10,

    overflow: "hidden",

    marginBottom: 15,
  },

  logo: {
    backgroundColor: "rgba(0, 117, 255, 0.69)",

    width: "100%",

    height: "100%",

    alignItems: "center",

    justifyContent: "flex-end",
  },

  container1: {
    backgroundColor: "rgba(0, 117, 25, 0.79)",

    width: "100%",

    borderBottomLeftRadius: 10,

    paddingHorizontal: 10,

    paddingVertical: 10,
  },

  containermiddle: {
    width: "100%",

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  container2: {
    flexDirection: "row",

    alignItems: "center",
  },

  text: {
    fontSize:20,

    width: "100%",

    backgroundColor: "rgba(0, 117, 25, 0.69)",
  },
});
