import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { auth } from '../firebase/config';
import Home from '../screens/Home';
import { Register } from '../screens/Register';
import Random from '../screens/Random';
import { HomeStack } from './HomeStack';
import { getAuth, onAuthStateChanged,signOut } from 'firebase/auth';
import {useState,useEffect} from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Login } from '../screens/LogIn';

export const MainNavigator= () => {
const Tab=createBottomTabNavigator();
const [user,setUser]=useState();

const handleSignOut = () =>{
  signOut(auth).then(()=>{
    //SignOut exitoso
  }).catch((error)=>{

  });

}

useEffect(() => {
  const auth=getAuth();
  onAuthStateChanged(auth,(user)=>{
    if(user){
      const uid=user.uid;
      setUser(user)
    }else{
      setUser(null)

    }
  })  
  
}, []);


return(
<NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'HomeStack') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'home'
                      : 'home-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Profile') {
              return (
                <FontAwesome
                  name={focused ? 'user-circle-o' : 'user-circle'}
                  size={size}
                  color={color}
                />
              );
            }else if(route.name==='Login'){
              return(
                <SimpleLineIcons
                name={'login'}
                size={30}
                color={color}
              />
            );
            }else if(route.name==='Register'){
              return(
                <Ionicons
                name={focused ? 'list-circle' : 'list-circle-outline'}
                size={30}
                color={color}
              />
            );
            }
          },
          tabBarInactiveTintColor: 'black',
          tabBarActiveTintColor: 'black',
          headerTitleAlign:'center',
          headerRight: ()=>(
            user && 
            <TouchableOpacity style={StyleSheet.logOut} onPress={()=>handleSignOut()}>
              <SimpleLineIcons name='logout' size={30} color={"black"}></SimpleLineIcons>
            </TouchableOpacity>
          )
        })}
      >
        {
          user ?
          <>
          <Tab.Screen
          name="HomeStack"
          component={HomeStack}
        />
        </>
        :
        <>
        <Tab.Screen
        name="Register"
        component={Register}
      />
      <Tab.Screen name="Login" component={Login} 
      options={{ tabBarBadge: 1 }}
      />
      </>
        }

    </Tab.Navigator>
  </NavigationContainer>
        )}