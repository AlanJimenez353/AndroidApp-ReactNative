import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import finances from "../screens/finances";
import Home from "../screens/Home";
import { ItemDetail } from "../screens/ItemDetail";
import { Login } from "../screens/LogIn";
import Movies from "../screens/Movies";
import Music from "../screens/Music";
import politics from "../screens/politics";
import { Profile } from "../screens/Profile";
import Programing from "../screens/programing";
import Random from "../screens/Random";


export const HomeStack= ()=>{

    const Stack=createNativeStackNavigator();

    return(
            <Stack.Navigator initialRouteName='Categories'>
                <Stack.Screen name="Categories" component={Home}/>
                <Stack.Screen name="Profile" component={Profile}/>

                <Stack.Screen name="Random" component={Random} />
                <Stack.Screen name="Music" component={Music} />
                <Stack.Screen name="Movies" component={Movies} />
                <Stack.Screen name="Programing" component={Programing} />
                <Stack.Screen name="Politics" component={politics} />
                <Stack.Screen name="Finances" component={finances} />
                <Stack.Screen name="login" component={Login} />


            </Stack.Navigator>
        )


}