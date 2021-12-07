import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import * as Location from "expo-location";
import businesslistingarray from "../constants/businesslistingarray";
import markericon from "../assets/icon/marker.png";

export default function MapsScreen() {
  const [latitude, setLatitude] = React.useState(-33.604830165420864);
  const [longitude, setLongitude] = React.useState(150.7444978975839);
  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let data = await Location.getCurrentPositionAsync({});

      setLocation(data);
      updateState(data);
    })();
  }, []);
  const updateState = (data) => {
    setLatitude(data.coords.latitude);
    setLongitude(data.coords.longitude);
    // console.log(location.coords.latitude);
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        showsUserLocation={true}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
          
        }}
      >
        {businesslistingarray &&
          businesslistingarray.map((marker, index) => (
            <MapView.Marker
              key={index}
              coordinate={{
                latitude: marker.coordinate.latitude,
                longitude: marker.coordinate.longitude,
              }}
              //image={marker.category == 'business' || marker.category == 'event' ?require ('../assets/icon/marker.png'):require ('../assets/icon/mountain.png')}
              title={marker.name}
            >
              <>
                <Image
                  source={
                    marker.category == "business" || marker.category == "event"
                      ? require("../assets/icon/marker.png")
                      : require("../assets/icon/mountain.png")
                  }
                  style={{
                    tintColor:marker.category == "business"
                    ? 'blue' :(marker.category == "event")? 'red':null,
                    height:30,
                    width:30
                  }}
                />
              </>
            </MapView.Marker>
          ))}
      </MapView>
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
