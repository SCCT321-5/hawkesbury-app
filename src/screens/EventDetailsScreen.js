import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import MapView from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../assets/icon/TheHawkesburyApp.png";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default function EventDetailsScreen({ navigation, route }) {
  console.log(route.params?.data);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text  style={{fontSize:20,fontWeight:'bold',marginTop:20 }}>{route.params?.data.name}</Text>
      
        <Text style={{ marginTop: 5,marginBottom:10 }}>{route.params?.data.category}</Text>
      <Image
        source={{ uri: route.params?.data.image }}
        style={{ height: 150, width: "100%",alignSelf:'center' }}
        resizeMode="cover"
      />
      <View style={{ flexDirection: "row",alignItems: 'center', paddingTop: 10 }}>
        <Text style={{ fontWeight:'bold' }}>Time :</Text>
        
        <Text style={{ marginLeft: 5 }}>{route.params?.data.eventtime}</Text>
      </View>
      <View style={{ flexDirection: "row",alignItems: 'center', paddingTop: 10 }}>
        <Text style={{ fontWeight:'bold' }}>Date :</Text>
        
        <Text style={{ marginLeft: 5 }}>{route.params?.data.eventdate}</Text>
      </View>
      
     
     <View style={{ paddingTop: 10 }}>
        <Text style={{ fontWeight:'bold' }}>Description :</Text>
        <Text >{route.params?.data.description}</Text>
      </View>
      <View style={{ flexDirection: "row",alignItems: 'center', paddingTop: 10 }}>
        <Text style={{ fontWeight:'bold' }}>Phone no :</Text>
        <Text style={{ marginLeft: 5 }}>{route.params?.data.contactno}</Text>
      </View>
      <View style={{width:'100%',height:200,}}>
       <Text style={{ fontWeight:'bold',marginVertical:10 }}>Location :</Text>
      <MapView
        style={{width:'100%',height:300, backgroundColor: "#ff0", height:"100%"}}
        loadingEnabled={true}
        initialRegion={{
          latitude:route.params?.data.coordinate.latitude,
          longitude:route.params?.data.coordinate.longitude,
          latitudeDelta:0.015,
          longitudeDelta:0.0121,
        }}>
          <MapView.Marker
          coordinate={{
            latitude:route.params?.data.coordinate.latitude,
          longitude:route.params?.data.coordinate.longitude,
          }}/>
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "#fff",
  },
  textstyle: {
    fontSize: height * 0.04,
    textAlign: "center",
    fontWeight: "bold",
  },
});
