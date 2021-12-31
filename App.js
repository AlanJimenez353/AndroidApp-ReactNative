import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './screens/Home';
import { Random } from './screens/Random';
import { Register } from './screens/Register';

export default function App() {

  const Tab=createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
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
            }
          },
          tabBarInactiveTintColor: 'black',
          tabBarActiveTintColor: 'black',
          headerTitleAlign:'center'
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
        />
        <Tab.Screen name="Profile" component={Register} 
        options={{ tabBarBadge: 1 }}
                  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




