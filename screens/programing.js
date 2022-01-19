import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import {bootstrap } from "react-bootstrap";
import {View,Image,Text,StyleSheet,TextInput,Button, FlatList, ActivityIndicator} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { CategoryButton } from '../components/CategoryButton';
import { HomeStack } from '../navigation/HomeStack';
import { getCategories, selectCategory } from '../store/actions/categories.actions';
import { filterComments } from '../store/actions/comments.action';
import { addDoc, collection } from 'firebase/firestore/lite';
import { auth, db } from '../firebase/config';




export const Programing=()=>{



    //Recibo los comentarios filtrados del CommentAcction
    const dispatch = useDispatch();
    const navigation=useNavigation()
    const comments=useSelector(state => state.comments.filterComments)
    
    const [textImput,setTextInput]= useState("")
    const [list,setList]=useState(comments)
   
   
    const onAdd= async() =>{
        console.log("Programing Comments-->",list)
    
        const user=auth.currentUser
        const newComment={
            comment: textImput,
            user:user.email,
            category:"Programing"
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

    
   return(
    <>
    {comments 
    ? 
    <View style={styles.screen}>

            <View style={styles.container}>
            <View style={[styles.box, { backgroundColor: "#3c3938" }]}>
        <Image  source={require('./imgs/coding.jpg')}  style={{ width: 80, height: 80,borderRadius:20,borderColor: '3px solid rgb(0, 221, 221)',borderWidth:3 }}/>   
        </View>
        </View>
        <View style={styles.flatli}>
       <FlatList 
       data={list}
       keyExtractor={Comment => Comment.toString()}
       renderItem={({item}) => {
        return <CategoryButton title={item.comment}></CategoryButton>
    }}
       ></FlatList>
       </View>
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
    commentText:{
        color:'#d64161',
        fontWeight:'bold',
    },input:{paddingRight:6},
    flatli:{
        paddingTop:20,
        height:200,
    },
    box: {
        paddingTop:20,
      width: "45%",
      height: "100%",
      borderColor:'3px solid rgb(0, 221, 221)',
      borderWidth:2,
      alignContent:'center',
        alignItems:'center'
    },
    containerInput:{
        flexDirection:"row",
        height: 40,
        marginTop:"3%",
        marginLeft:"40%",
        borderEndWidth:5,
        borderColor:'black',
        alignItems:"center",
        marginBottom:10,
        selectionColor: "#428AF8",
        underlineColorAndroid: "#428AF8"
    },
    button:{
        padding:10,
        borderRadius:5,
        borderColor:"#06C280",
        borderWidth:5,
        marginVertical:10,
        
    },
    container: {
        flex: 1,
        flexDirection:'row',
        marginTop: 8,
        backgroundColor: "aliceblue",
        justifyContent:"space-around",
        backgroundColor:'black',
        marginBottom:10,
        
      },
      screen:{
        height:200,
        flex:1,
    },
    

})
export default Programing