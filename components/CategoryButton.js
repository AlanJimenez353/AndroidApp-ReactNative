import React from 'react'
import { Text,TouchableOpacity,StyleSheet} from 'react-native'


export const CategoryButton =({title,handlePress}) =>{
    return(
        <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    button:{
        padding:10,
        backgroundColor:"06D64D",
        borderRadius:5,
        borderColor:"#06C280",
        borderWidth:5,
        marginVertical:10,
        
    }
})