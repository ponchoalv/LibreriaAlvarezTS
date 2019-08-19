import { applyMiddleware, compose, createStore } from 'redux';
import { install, StoreCreator } from 'redux-loop';
import createRootReducer from './reducers';

const enhancedCreateStore = createStore as StoreCreator;

export default function configureStore(preloadedState?: any) {
  const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = enhancedCreateStore(
    createRootReducer(),
    preloadedState,
    composeEnhancer(
      install(), 
      applyMiddleware(
        
      ),
    ),
  )
  return store
}