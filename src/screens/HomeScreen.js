
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Platform,
  StatusBar,
  Dimensions,
  Touchable, 
} from "react-native"; 
import BackgroundImage from "../assets/images/Hawkesbury-River.jpg";
import {Ionicons} from  '@expo/vector-icons';
import Card from "../components/Card";
import dummydata from "../constants/dummydata";
import dummyeventdata from "../constants/dummyeventdata";
import categoryarray from "../constants/categoryarray";
const categories = [
  {
    id: 1,
    name: "Cafes, Restaurants and Catering",
    image: require('../assets/images/Cafes, Restaurants and Catering.jpg'),
  },
  {
    id: 2,
    name: "General Retail",
    image: "https://static.thenounproject.com/png/1568366-200.png",
  },
  {
    id: 3,
    name: "Health and Disability Services",
    image:
      "https://static.thenounproject.com/png/156901-200.png",
  },
  {
    id: 4,
    name: "Accommodation",
    image: "https://static.thenounproject.com/png/4398-200.png",
  },
  {
    id: 5,
    name: "Education, Training and Early Childhood",
    image: "https://static.thenounproject.com/png/1853606-200.png",
  },
  {
    id: 6,
    name: "Other Trades and Construction",
    image: "https://static.thenounproject.com/png/686718-200.png",
  },
  {
    id: 8,
    name: "Business Services",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
  {
    id: 9,
    name: "Electronics, IT and Media",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
  {
    id: 10,
    name: "Agriculture and Animals",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
   {
    id: 11,
    name: "Builders, Carpenters and Brick Layers",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
   {
    id: 12,
    name: "Electrical and Air Conditioning",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
  {
    id: 13,
    name: "Entertainment and the Arts",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
   {
    id: 14,
    name: "Finance and Banking",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
   {
    id: 15,
    name: "Fitness and Sport",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
  {
    id: 16,
    name: "Food and Groceries Retail",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
   {
    id: 17,
    name: "Government and Not For Profit",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
  {
    id: 18,
    name: "Hair and Beauty",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
   {
    id: 19,
    name: "Manufacturing and Wholesale",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
    {
    id: 20,
    name: "Plumbers and Gas Fitters",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
   {
    id: 21,
    name: "Professionals and Scientific Services",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
  {
    id: 22,
    name: "Real Estate",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
   {
    id: 23,
    name: "Tourism and Events",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
   {
    id: 24,
    name: "Vehicles, Transport and Warehousing",
    image: "https://static.thenounproject.com/png/589380-200.png",
  },
];
const attractions = [
  {
    id: 1,
    name: "Museums and History",
    image: "https://static.thenounproject.com/png/3129-200.png",
  },
  {
    id: 2,
    name: "Monuments",
    image: "https://static.thenounproject.com/png/95211-200.png",
  },
  {
    id: 3,
    name: "Parks",
    image: "https://cdn-icons-png.flaticon.com/128/2069/2069441.png",
  },
  {
    id: 4,
    name: "Adventure and Sports",
    image: "https://cdn-icons-png.flaticon.com/128/2069/2069441.png",
  },
  {
    id: 5,
    name: "Artistic, Galleries and Gardens",
    image: "https://cdn-icons-png.flaticon.com/128/2069/2069441.png",
  },
  {
    id: 6,
    name: "Farm Gate and Tastings",
    image: "https://cdn-icons-png.flaticon.com/128/2069/2069441.png",
  },
  {
    id: 7,
    name: "The Big Things",
    image: "https://cdn-icons-png.flaticon.com/128/2069/2069441.png",
  },
  {
    id: 8,
    name: "The River",
    image: "https://cdn-icons-png.flaticon.com/128/2069/2069441.png",
  },
  {
    id: 9,
    name: "Trails and Towns",
    image: "https://cdn-icons-png.flaticon.com/128/2069/2069441.png",
  },
  {
    id: 10,
    name: "Trails and Towns",
    image: "https://cdn-icons-png.flaticon.com/128/2069/2069441.png",
  },
  
];
const businesses =[
    {
        name:'Hawkesbury Valley Electrics',
        address:'9/62 Argyle Street, South Windsor NSW 2756',
        openinghours:'24 hours',
        image:'http://www.hve.com.au/wp-content/uploads/2020/02/HVE-300x150.jpg'
    },
    {
        name:'Hawkesbury Regional Museum',
        address:'8 Baker Street, Windsor NSW 2756',
        openinghours:'9am - 5pm',
        image:'http://www.hve.com.au/wp-content/uploads/2020/02/HVE-300x150.jpg'
    },
    {
        name:'Richmond Vale Railway Museum',
        address:'262 Leggetts Drive, Richmond Vale NSW 2323',
        openinghours:'NA',
        image:'https://www.richmondvalerailwaymuseum.org/wp-content/uploads/2018/11/richmond-vale-railway-museum.png'
    },
    {
        name:'North West Plumbing and Drainage Pty LTD',
        address:'24 Jamison Crescent, North Richmond NSW 2754',
        openinghours:'24 hours',
        image:'https://www.nwplumbinganddrainage.com.au/wp-content/uploads/2018/10/logo.png'
    },
];
const information =[
  {
      name:'Information',
      image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Minimalist_info_Icon.png"
  },
]
export default function HomeScreen({ navigation }) {
  const onclick = item => {
    navigation.navigate({
      name: 'Details',
      params: {data: item},
    });
  };
  const onCategoryPress = item => {
    navigation.navigate({
      name: 'BusinessListing',
      params: {data: item},
    });
  };
  const oneventPress = item => {
    navigation.navigate({
      name: 'CalendarOfEvents',
      params: {data: item},
    });
  };
  const onAttractionPress = item => {
    navigation.navigate({
      name: 'PointsOfInterest',
      params: {data: item},
    });
  };
  const onInfoPress = item => {
    navigation.navigate({
      name: 'Information',
      params: {data: item},
    });
  };
  

  return (
   

    
    <View style={styles.container}>
      <StatusBar
      backgroundColor={"#fff"}
      translucent={true}
      barStyle={"light-content"}
      />
      <View
        style={{
          
          width:'100%'
        }}
      >
        <Image
        source={BackgroundImage}  
        style={{
          width: "100%",
          height:200,
          alignSelf: "center",
          paddingHorizontal: 15,
        }}/>
        <View
        style={{
          width: "90%",
          alignSelf: "center",
          padding: 10,
          paddingVertical: 5,
          borderWidth: 1,
          borderColor: "#000",
          borderRadius: 10,
          flexDirection:'row',
          marginTop: -30,
          backgroundColor: "#fff",
        }}
      ><Ionicons name="search-outline" size={32} />
        <TextInput 
          style={{
            backgroundColor: "#fff",
            width: "90%",
            height: "80%",
            alignSelf: "center",
           
            paddingHorizontal: 10,
          }}
          placeholder="Search"
        />
        
      </View>
      </View>
      <View
        style={{
          width: "95%",
          alignSelf: "center",
          paddingHorizontal: 15,
        }}
      >
        <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginVertical: 5,
          marginTop: 30,
        }}
        >
        Business Directory
        </Text>
        <FlatList
          data={categories}
          contentContainerStyle = {{paddingVertical: 10}}
          horizontal={true}
          showsHorizontalScrollIndicator = {false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
              onPress = {()=>onCategoryPress(item)}
                style={{
                  marginTop: -5,
                  marginBottom: 10,
                  marginLeft: index == 0 ?0:10,
                  backgroundColor:'#FFFFFF',
                  alignItems:'center',
                  justifyContent: 'center',
                  paddingVertical: 5,
                  borderWidth: 1,
                  borderColor: '#000',
                  height: Dimensions.get('window').height * 0.1,
                  width: Dimensions.get('window').width * 0.2,
                  borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2)
                }}
              >
                <Image source={{ uri: item.image }} style={{height:30,width:30}} resizeMode='contain'/>
                <Text style={{
            fontSize: 10,
            fontWeight: "bold",
            textAlign: 'center',
            marginTop: 5
          }}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
        
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginVertical: 5,
            marginTop: 1.5
          }}
        >
         Calendar of Events
        </Text>
        
        {}
        
        {}
         <FlatList
          data={categoryarray}
          contentContainerStyle = {{paddingVertical: 10}}
          horizontal={true}
          showsHorizontalScrollIndicator = {false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
              onPress = {()=>oneventPress(item)}
                style={{
                  marginLeft: index == 0?0:10,
                  backgroundColor:'#FFFFFF',
                  alignItems:'center',
                  overflow: 'hidden',
                  borderRadius: 5,
                  borderColor: '#000',
                  borderWidth: 1,
                  width: Dimensions.get('window').height * 0.14,
                }}
              >
                <Image source={{ uri: item.image }} style={{height:80,width:"100%"}} resizeMode='cover'/>
                <Text style={{
            fontSize: 15,
            fontWeight: "bold",
            width:'90%',
            textAlign: 'center',
            marginVertical: 5
          }}>{item.category}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginVertical: 5,
            marginTop: 1.5,
          }}
        >
          Hawkesbury Attractions
        </Text>
        <FlatList
          data={attractions}
          contentContainerStyle = {{padding: 10}}
          horizontal={true}
          showsHorizontalScrollIndicator = {false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
              onPress = {()=>onAttractionPress(item)}
                style={{
                  marginLeft: index == 0?0:10,
                  backgroundColor:'#FFFFFF',
                  alignItems:'center',
                  width: 100,
                  justifyContent: 'center',
                  paddingVertical: 5,
                  borderRadius: 15,
                  shadowColor: '#000000',
                  shadowOffset: {width: 2, height: 2},
                  shadowOpacity: 0.9,
                  shadowRadius: 3,
                  elevation: 3,
                }}
              >
                <Image source={{ uri: item.image }} style={{height:30,width:30}} resizeMode='contain'/>
                <Text style={{
            fontSize: 12,
            fontWeight: "bold",
            width:'90%',
            textAlign: 'center',
            marginTop: 5
          }}>{item.name}</Text> 
              </TouchableOpacity>
            );
          }}
        />
         <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginVertical: 5,
            marginTop: 1.5,
          }}
        >
         About the Hawkesbury Region
        </Text>
        <FlatList
          data={information}
          contentContainerStyle = {{padding: 10}}
          horizontal={true}
          showsHorizontalScrollIndicator = {false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
              onPress = {()=>onInfoPress(item)}
                style={{
                  marginLeft: index == 0?0:10,
                  backgroundColor:'#FFFFFF',
                  alignItems:'center',
                  width: 100,
                  justifyContent: 'center',
                  paddingVertical: 5,
                  borderRadius: 15,
                  shadowColor: '#000000',
                  shadowOffset: {width: 2, height: 2},
                  shadowOpacity: 0.9,
                  shadowRadius: 3,
                  elevation: 3,
                }}
              >
                <Image source={{ uri: item.image }} style={{height:30,width:30}} resizeMode='contain'/>
                <Text style={{
            fontSize: 12,
            fontWeight: "bold",
            width:'90%',
            textAlign: 'center',
            marginTop: 5
          }}>{item.name}</Text> 
              </TouchableOpacity>
            );
          }}
        />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
