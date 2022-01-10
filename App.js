// In App.js in a new project 

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
// import Login from './src/screens/Login';
// import Register from './src/screens/Register';
import MyTabs from './src/screens/TabScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import InformationScreen from './src/screens/InformationScreen';

import EventDetailsScreen from './src/screens/EventDetailsScreen'; 
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen}  
        options={{headerShown: false }}/>
        {/* <Stack.Screen name="Login" component={Login}  
        options={{headerShown: false }}/>
        <Stack.Screen name="Register" component={Register}  
        options={{headerShown: false }}/> */}
        <Stack.Screen name="Tab" component={MyTabs}  
        options={{headerShown: false }}/>
      <Stack.Screen name="Details" component={DetailsScreen}  
        options={{headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#621FF7',
        },
        headerTintColor: '#fff',
        headerTitleStyle :{
          fontWeight: 'bold',
        },
}}/><Stack.Screen name="EventDetails" component={EventDetailsScreen}  
        options={{headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#621FF7',
        },
        headerTintColor: '#fff',
        headerTitleStyle :{
          fontWeight: 'bold',
        },
}}/>
        </Stack.Navigator>
        
    </NavigationContainer>
  );
}

export default App;