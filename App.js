import React from 'react';
import {Provider, provider} from 'react-redux'
import store from './store';
import { getCategories } from './store/actions/categories.actions';
import { MainNavigator } from './navigation/MainNavigator';
import { getComments } from './store/actions/comments.action';


export default function App() {

  store.dispatch(getCategories)
  store.dispatch(getComments)

  
  return (
    <Provider store={store}>
      <MainNavigator/>
        </Provider>
  );
}




