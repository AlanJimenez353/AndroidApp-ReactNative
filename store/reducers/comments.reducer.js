import React from "react";
import { filterComments, FILTER_COMMENTS, GET_COMMENTS,FILTER_COMMENTS_USER } from "../actions/comments.action";

const initialState={
    comments:[],
    filterComments:[],
    filterCommentsUser:[],
    selectedComment:null,
}



const CommentsReducer= (state= initialState,action) =>{

    switch(action.type){
        case GET_COMMENTS:
            return{
                ...state,
                comments:action.payload
            }
        case FILTER_COMMENTS:
            const commentsFiltrados=state.comments.filter(comment => comment.category === action.payload.Name)
            console.log(commentsFiltrados)

            return {
                 ...state,
                filterComments:commentsFiltrados
            }
            case FILTER_COMMENTS_USER:
                const commentsFiltradosUser=state.comments.filter(comment => comment.user === action.payload.user.email)
                console.log(commentsFiltradosUser)
    
                return {
                     ...state,
                    filterCommentsUser:commentsFiltradosUser
                }        
        default:
            return{
                ...state
            }
            break;
    }

}

export default CommentsReducer;