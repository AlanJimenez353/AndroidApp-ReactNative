import React from "react";
import { filterComments, FILTER_COMMENTS, GET_COMMENTS } from "../actions/comments.action";

const initialState={
    comments:[],
    filterComments:[],
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
        default:
            return{
                ...state
            }
            break;
    }

}

export default CommentsReducer;