import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import HomeReducer from '../containers/Home/store/reducer'
import { history } from './history'
const reducer = combineReducers({
  router: connectRouter(history),
  home: HomeReducer
})


export default reducer