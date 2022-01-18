import { useNavigation } from '@react-navigation/native'
import React, { useReducer } from 'react'
import { Row } from 'react-bootstrap'
import { View,Text, FlatList,StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryButton } from '../components/CategoryButton'
import { auth } from '../firebase/config'

export const Profile=()=>{

    const dispatch = useDispatch();
    const navigation=useNavigation()
    const comments=useSelector(state => state.comments.comments)
    const user=auth.currentUser
    const commentsFiltradosUser=comments.filter(comment => comment.user === user.email)
    console.log(commentsFiltradosUser)

    return(

        <>
        <View style={styles.container}>
            <View>
            <Text style={styles.textt}>Email:{user.email}</Text>
            </View>
        </View>
          
          {comments 
          ? 
             <View style={styles.conteinerComments}>
                <Text style={styles.textt}>Tus commentarios </Text>
             <FlatList
             data={commentsFiltradosUser}
             keyExtractor={Comment => Comment.toString()}
             renderItem={({item}) => {
                 return <CategoryButton title={item.comment+"     En la categoria ---->   "+item.category}></CategoryButton>
             }}
             ></FlatList>
             </View> 
  
          : 
          <Text>Aun no tienes comentarios</Text>
          
          }
        </>
        
    )
}
const styles= StyleSheet.create({
    container:{

    flexDirection:"flex",
    alignContent:'center',
    alignItems:'center',
    height: 40,
    marginTop:"3%",
    marginLeft:"3%",
    borderColor:'black',
    borderBottomColor: '3px solid rgb(0, 221, 221)',
    borderBottomWidth: 2,
    
    
    },
    textt:{
        color:'black',
        fontSize:'40',
        fontWeight: 'bold'

        
    },
    conteinerComments:{

        marginTop:"3%",
        marginLeft:"3%",
        marginRight:"3%"
    }
})

export default Profile