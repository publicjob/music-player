import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { routerMiddleware } from 'connected-react-router'
import { history } from './history'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const persistreducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistreducer, composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))) 
const persistor = persistStore(store)

export {
  store,
  persistor
}