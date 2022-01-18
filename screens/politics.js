import { useNavigation } from '@react-navigation/native';
import { addDoc, collection } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react'
import {bootstrap, Modal } from "react-bootstrap";
import {View,Text,StyleSheet,TextInput,Button, FlatList, ActivityIndicator} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { CategoryButton } from '../components/CategoryButton';
import { auth, db } from '../firebase/config';
import { HomeStack } from '../navigation/HomeStack';
import { getCategories, selectCategory } from '../store/actions/categories.actions';
import { filterComments } from '../store/actions/comments.action';

export const politics=()=>{

    //Recibo los comentarios filtrados del CommentAcction
    const dispatch = useDispatch();
    const navigation=useNavigation()
    const comments=useSelector(state => state.comments.filterComments)
    const [textImput,setTextInput]= useState("")
    const [list,setList]=useState(comments)
    const [modalVisible,setModalVisible]=useState(false)
 
   const onAdd= async() =>{
    console.log("Politic Comments-->",list)

    const user=auth.currentUser
    const newComment={
        comment: textImput,
        user:user.email,
        category:"Politics"
    }
    
        console.log(newComment)
    try{
        const docRef= addDoc(collection(db,"Comments"),newComment)
        console.log("Document agregado a Firebase with ID: ", docRef.id);
        setList([...list, newComment])

    }catch (e) {
    console.error("Error adding document: ", e.message);
    }
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
           data={list}
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
export default politics