import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import {View,Text,StyleSheet,TextInput,Button, FlatList, ActivityIndicator} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { CategoryButton } from '../components/CategoryButton';
import { HomeStack } from '../navigation/HomeStack';
import { getCategories, selectCategory } from '../store/actions/categories.actions';
import { filterComments } from '../store/actions/comments.action';


export const finances=()=>{


    //Recibo los comentarios filtrados del CommentAcction
    const [textImput,setTextInput]= useState("")

    const dispatch = useDispatch();
    const navigation=useNavigation()
    const comments=useSelector(state => state.comments.filterComments)
    console.log(comments)

    const onAdd= () =>{
        
    }

   // useEffect(()=> {
   //     dispatch(getCategories())
   // },[])

    
    return(
        <>
        {comments 
        ? 
           <View>
           <FlatList
           data={comments}
           keyExtractor={Comment => Comment.toString()}
           renderItem={({item}) => {
               return <CategoryButton title={item.comment}></CategoryButton>
           }}
           ></FlatList>
           </View> 

        :
        <ActivityIndicator size="large" color='blue'/>
        
        }
        
         <View style={styles.containerInput}>
         <TextInput placeholder="Añadir Comentario" onChangeText={(text)=> setTextInput(text)} style={styles.input}/>
         <Button title="Comentar" onPress={()=> onAdd()}/>
     </View>
     </>
    )

}

const styles= StyleSheet.create({

    containerInput:{
        flexDirection:"row",
        
        height: 40,
        marginTop:"3%",
        marginLeft:"3%",
        borderEndWidth:5,
        borderColor:'black',
        
        alignItems:"center",
        marginBottom:10,
        selectionColor: "#428AF8",
        underlineColorAndroid: "#428AF8"
    }

})
export default finances
