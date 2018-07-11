import { createStore, applyMiddleware, compose, combineReducers, Reducer } from 'redux';
import { connectRoutes } from 'redux-first-router';
import routesMap from './routesMap';
import * as reducers from './reducers';
import { RootState } from './rootState';

declare var window: any;
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export default (history: any, preLoadedState: any = {}) => {
  const { reducer, middleware, enhancer, thunk } = connectRoutes(history, routesMap);
  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middlewares = applyMiddleware(middleware);
  const enhancers = composeEnhancers(enhancer, middlewares);
  const store = createStore(rootReducer, preLoadedState, enhancers);

  // if (module.hot && process.env.NODE_ENV === 'development') {
  //   module.hot.accept('./reducers/index', () => {
  //     console.log('HMR: Loading next reducers...');
  //     const nextReducers = require('./reducers/index') as Reducer<RootState>;
  //     const nextRootReducer = combineReducers({ ...nextReducers, location: reducer });
  //     store.replaceReducer(nextRootReducer);
  //   })
  // }

  return { store, thunk }
}

