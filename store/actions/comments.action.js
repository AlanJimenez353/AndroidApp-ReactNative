export const GET_COMMENTS='GET_COMMENTS'
export const GET_COMMENTS_ERROR='GET_COMMENTS_ERROR'
export const FILTER_COMMENTS ='FILTER_COMMENTS'
export const FILTER_COMMENTS_USER='FILTER_COMMENTS_USER'
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../firebase/config";


export const filterComments = (catId)=>({
    type:FILTER_COMMENTS,
    payload:catId,

})
export const filterCommentsUser=(user)=>({
    type:FILTER_COMMENTS_USER,
    payload:user
})


export const getComments= async(dispatch)=>{

    try{
        //referencia a coleccion de mi database en firebase
        const commentsRef= collection(db,'Comments')

        getDocs(commentsRef)
        .then((resp) =>{
            const comments= resp.docs.map((doc) =>({
                id:doc.id,
                ...doc.data(),
            }))
            dispatch({
                type: GET_COMMENTS,
                payload:comments
            })
        })
        
    }catch(error){
        dispatch({
            type:GET_COMMENTS_ERROR,
            payload:error.message
        })

    }
}
