import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import {View,Text, FlatList, ActivityIndicator, Image} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { CategoryButton } from '../components/CategoryButton';
import { HomeStack } from '../navigation/HomeStack';
import { getCategories, selectCategory } from '../store/actions/categories.actions';
import { filterComments } from '../store/actions/comments.action';



export const Home=()=>{

    //Recibo las categorias del CategoriesAction
    const dispatch = useDispatch();
    const navigation=useNavigation()
    const categories=useSelector(state => state.categories.categories)
    console.log(categories)


   // useEffect(()=> {
   //     dispatch(getCategories())
   // },[])

    const handleSelectCategory=(category) =>{
        dispatch(selectCategory(category))
        dispatch(filterComments(category))
        console.log(category)
        navigation.navigate(category.Name)
    }
    return(
        <>
        {categories 
        ? 
           <View>

           <FlatList
           data={categories}
           keyExtractor={category => category.toString()}
           renderItem={({item}) => {
               return(
                   <>
               <View>
                 <CategoryButton title={item.Name} handlePress={() => handleSelectCategory(item)}>  </CategoryButton>
               </View>
               </>
               )}}
           ></FlatList>
           </View> 

        :
        <ActivityIndicator size="large" color='blue'/>
        
        }
        </>
    
    )


}
export default Home

/// <Image  source={{uri:('./imgs/music.png')}}  style={{ width: "100", height: "100",borderRadius:20,borderColor: '3px solid rgb(0, 221, 221)',borderWidth:3}}/>