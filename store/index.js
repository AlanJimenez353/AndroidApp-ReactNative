import {createStore,applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import  thunkMiddleware  from 'redux-thunk'
//  Reducers
import CategoriesReducer from './reducers/categorie.reducer'
import CommentsReducer from './reducers/comments.reducer'

const composedEnhancer=composeWithDevTools(applyMiddleware(thunkMiddleware))


const RootReducer =combineReducers({
    categories:CategoriesReducer,
    comments: CommentsReducer,
    //notifications: NotificationReducer,
})

export default createStore(RootReducer,composedEnhancer)