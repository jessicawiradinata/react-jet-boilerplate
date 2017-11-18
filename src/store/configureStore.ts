import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'
import { History } from 'history'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { autoRehydrate } from 'redux-persist'

export default function configureStore(initialState = {}, history: History) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(
      thunk,
      routerMiddleware(history),
    ),
    autoRehydrate(),
  ))
}
