import { redirect, NOT_FOUND } from 'redux-first-router'
import axios from 'axios';
import { IItem } from './item.interface';

export default {
  LIST: {
    path: '/',
    thunk: async (dispatch: Function, getState: Function) => {
      try {
        const response = await axios('https://jsonplaceholder.typicode.com/posts');
        const items = response.data as IItem[];
        dispatch({ type: 'ITEMS_FETCHED', payload: { items }});
      } catch (error) {
        dispatch({ type: 'ERROR', payload: { error: error.message } });
      }
    }
  },
  ITEM: {
    path: '/item/:id',
    thunk: async (dispatch: Function, getState: Function) => {
      const { location: { payload: { id } } } = getState();
      try {
        const response = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const item = response.data as IItem;
        if (!item || !item.id) {
          dispatch({ type: NOT_FOUND });
        } else {
          dispatch({ type: 'ITEM_FETCHED', payload: { item }});
        }
      } catch (error) {
        dispatch({ type: 'ERROR', payload: { error: error.message } });
      }
    }
  }
}