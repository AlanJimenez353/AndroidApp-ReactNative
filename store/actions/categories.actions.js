export const GET_CATEGORIES= 'GET_CATEGORIES';
export const GET_CATEGORIES_ERROR='GET_CATEGORIES_ERROR'
export const SELECT_CATEGORY= 'SELECT_CATEGORY'
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../firebase/config";



export const selectCategory=(catId) => ({
    type:SELECT_CATEGORY,
    categoryId: catId
})

//Utilizamos dispatch para despacharlo al reducer y que el reducer actualice el store
export const getCategories= async(dispatch)=>{
    try{
        //referencia a coleccion de mi database en firebase
        const toppicsRef= collection(db,'Toppics')

        getDocs(toppicsRef)
        .then((resp) =>{
            const toppics= resp.docs.map((doc) =>({
                id:doc.id,
                ...doc.data(),
            }))
            dispatch({
                type: GET_CATEGORIES,
                payload:toppics
            })
            console.log(toppics)
        })
        
    }catch(error){
        dispatch({
            type:GET_CATEGORIES_ERROR,
            payload:error.message
        })

    }
}