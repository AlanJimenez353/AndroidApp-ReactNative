import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import {View,Text, FlatList, ActivityIndicator} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { CategoryButton } from '../components/CategoryButton';
import { HomeStack } from '../navigation/HomeStack';
import { getCategories, selectCategory } from '../store/actions/categories.actions';
import { filterComments } from '../store/actions/comments.action';



export const politics=()=>{

    const dispatch = useDispatch();
    const navigation=useNavigation()
    const comments=useSelector(state => state.comments)
    console.log(comments)
    return(
        <>
        {filterComments 
        ? 
           <View>
           <FlatList
           data={filterComments}
           keyExtractor={category => category.toString()}
           renderItem={({item}) => {
               return <CategoryButton title={item.comment}></CategoryButton>
           }}
           ></FlatList>
           </View> 

        :
        <ActivityIndicator size="large" color='blue'/>
        
        }
        </>
    
    )


}
export default politics