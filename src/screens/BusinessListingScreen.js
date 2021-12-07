import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View , Image , Dimensions, FlatList, TouchableOpacity } from 'react-native';
import Card from "../components/Card";
import Logo  from '../assets/icon/TheHawkesburyApp.png';
import {Ionicons} from  '@expo/vector-icons';
import businesslistingarray from '../constants/businesslistingarray';
import dummydata from '../constants/dummydata';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function BusinessListingScreen({navigation,route}) {
  //const [rData, setRData] = React.useState(businesslistingarray); 
   const [rData, setRData] = React.useState([]);
    const [searchtext, setSearch] = React.useState(''); 
    const onclick = item => {
        navigation.navigate({
          name: 'Details',
          params: {data: item},
        });
      };
  const handleSearch = (data) => {
    var text = data ;
       const newData = dummydata.filter(function(item) {
         const leavetypeData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return (leavetypeData.indexOf(textData) > -1);
    });
    setRData(newData);
    setSearch(text)
  };
React.useEffect(() => {
  //alert(route.params?.data.name)
   if(route.params?.data.name !== undefined){

var results = dummydata.filter(
      data => data.category === route.params?.data.name,
    );
    setRData(results);
    console.log(results)
   }
   else{
     setRData(dummydata);
   }
    //alert(results);
  }, [dummydata]);
  return (
    <View style={styles.container}>
        <StatusBar
      backgroundColor={"#fff"}
      translucent={true}
      barStyle={"light-content"}
      /><Text style={{ fontSize:20,fontWeight:'bold',marginTop: 50,textAlign:'center' }}>Business Directory</Text>
        
        
         
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
          marginTop: 10,
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
          value={searchtext}
          placeholder={'Search'}
          onChange={(text) => handleSearch(text)}
        />
        
      </View>
      <FlatList
          data={rData}
         contentContainerStyle = {{paddingBottom: 100, width: '100%', paddingTop: 10}}
          showsHorizontalScrollIndicator = {false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
              onPress = {()=>onclick(item)}
                style={{
                 alignSelf: 'center',
                  justifyContent: 'center',
                  // width: "25%",
                   marginTop: index == 0?0:15,
                  width: '90%',
                  borderRadius: 5,
                  borderWidth: 1,
                }}
              >  
          <Card data = {item}/>
          </TouchableOpacity>
            );
          }}
        />
       <Text  style={{fontSize:20,fontWeight:'bold' }}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textstyle:{
      fontSize:height * 0.04,
      textAlign:'center',
      fontWeight:'bold'
  }
});