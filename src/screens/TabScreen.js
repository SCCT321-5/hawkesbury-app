
import * as React from "react";
import { View,Text, ImagePropTypes} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import {Ionicons} from  '@expo/vector-icons';
// import ProfileScreen from "./ProfileScreen";
import SearchScreen from "./SearchScreen";
import BusinessListingScreen from "./BusinessListingScreen";
import CalendarOfEventsScreen from "./CalendarOfEventsScreen";
import PointsOfInterestScreen from "./PointsOfInterestScreen";
import InformationScreen from "./InformationScreen";
import MapsScreen from "./MapsScreen";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      // tabBarActiveTintColor: Colors[colorScheme].tint,
         tabBarShowLabel:false,
         tabBarHideOnKeyboard:false,
         tabBarStyle: {
             position: 'absolute',
             elevation: 0,
             backgroundColor: '#fff',
             height: 80,
         },
      
     }}>
     <Tab.Screen
       name="Home"
       component={HomeScreen}
       options={({ navigation }) => ({
         tabBarIcon: ({focused }) => <View style={{
           height:'90%',
           justifyContent:'space-around',alignItems:'center'}}>
             <Ionicons name="home" color={focused ? '#2A5C99' :'#bbb'} size={25}  />
             <Text style={{color:focused ? '#2A5C99' :'#bbb'}}>Home</Text>
             
           </View>,
         headerShown: false
       })}
     />
     
     {/* <Tab.Screen
       name="Search"
       component={SearchScreen}
       options={({ navigation }) => ({
         tabBarIcon: ({focused }) => <View style={{
           height:'90%',
           justifyContent:'space-around',alignItems:'center'}}>
             <Ionicons name="search" color={focused ? '#2A5C99' :'#bbb'} size={25}  />
             <Text style={{color:focused ? '#2A5C99' :'#bbb'}}>Search</Text>
           </View>,
         headerShown: false
       })}
     /> */}
     {/* <Tab.Screen
       name="Profile"
       component={ProfileScreen}
       options={({ navigation }) => ({
         tabBarIcon: ({focused }) => <View style={{
           height:'90%',
           justifyContent:'space-around',alignItems:'center'}}>
             <Ionicons name="person-circle-outline" color={focused ? '#2A5C99' :'#bbb'} size={25}  />
             <Text style={{color:focused ? '#2A5C99' :'#bbb'}}>Profile</Text>
           </View>,
         headerShown: false
       })}
     /> */}
     <Tab.Screen
       name="BusinessListing"
       component={BusinessListingScreen}
       options={({ navigation }) => ({
         tabBarIcon: ({focused }) => <View style={{
           height:'90%',
           justifyContent:'space-around',alignItems:'center'}}>
             <Ionicons name="list-outline" color={focused ? '#2A5C99' :'#bbb'} size={25}  />
             <Text style={{color:focused ? '#2A5C99' :'#bbb'}}>Business Listing</Text>
           </View>,
         headerShown: false
       })}
     />
     <Tab.Screen
       name="CalendarOfEvents"
       component={CalendarOfEventsScreen}
       options={({ navigation }) => ({
         tabBarIcon: ({focused }) => <View style={{
           height:'90%',
           justifyContent:'space-around',alignItems:'center'}}>
             <Ionicons name="calendar-outline" color={focused ? '#2A5C99' :'#bbb'} size={25}  />
             <Text style={{color:focused ? '#2A5C99' :'#bbb'}}>Events</Text>
           </View>,
         headerShown: false
       })}
     />
     <Tab.Screen
       name="PointsOfInterest"
       component={PointsOfInterestScreen}
       options={({ navigation }) => ({
         tabBarIcon: ({focused }) => <View style={{
           height:'90%',
           justifyContent:'space-around',alignItems:'center'}}>
             <Ionicons name="pin-outline" color={focused ? '#2A5C99' :'#bbb'} size={25}  />
             <Text style={{color:focused ? '#2A5C99' :'#bbb'}}>Attractions</Text>
           </View>,
         headerShown: false
       })}
     />
     <Tab.Screen
       name="Maps"
       component={MapsScreen}
       options={({ navigation }) => ({
         tabBarIcon: ({focused }) => <View style={{
           height:'90%',
           justifyContent:'space-around',alignItems:'center'}}>
             <Ionicons name="map-outline" color={focused ? '#2A5C99' :'#bbb'} size={25}  />
             <Text style={{color:focused ? '#2A5C99' :'#bbb'}}>Maps</Text>
           </View>,
         headerShown: false
       })}
     />
     <Tab.Screen
       name="Information"
       component={InformationScreen}
       options={({ navigation }) => ({
         tabBarIcon: ({focused }) => <View style={{
           height:'90%',
           justifyContent:'space-around',alignItems:'center'}}>
             <Ionicons name="information-circle-outline" color={focused ? '#2A5C99' :'#bbb'} size={25}  />
             <Text style={{color:focused ? '#2A5C99' :'#bbb'}}>Info</Text>
           </View>,
         headerShown: false
       })}
     />
     
     

    </Tab.Navigator>
  );
}
