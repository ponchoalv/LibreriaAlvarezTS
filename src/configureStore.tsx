import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import { install, StoreCreator } from 'redux-loop'


export const history = createBrowserHistory()

const enhancedCreateStore = createStore as StoreCreator;

export default function configureStore(preloadedState?: any) {
  const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = enhancedCreateStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
      ),
      install(),
    ),
  )

  return store
}