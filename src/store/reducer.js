import { combineReducers } from 'redux'
import HomeReducer from '../containers/Home/store/reducer'

const reducer = combineReducers({
  home: HomeReducer
})

export default reducer