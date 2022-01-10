import { initializeApp } from "firebase/app";
import { ActionCodeOperation } from "firebase/auth";
import { GET_CATEGORIES,SELECT_CATEGORY } from "../actions/categories.actions";

const initialState={
    categories:[],
    selected:null,
}

export const CategoriesReducer = (state = initialState,action)=>{
    //el type me defini el tipo de accion
    switch(action.type){
        case GET_CATEGORIES:
            //El spread de state trae el estado que existia en inicialState y le guarda propiedad payload de la action
            return{...state, categories: action.payload}
        case SELECT_CATEGORY:
            const categorySelected=state.categories.find(cat => cat === action.categoryId)
            return categorySelected ?
            {...state,selected: categorySelected}
            :
            {...state, selected:null}
            
            default:
            return{...state}
    }

}

export default CategoriesReducer; 