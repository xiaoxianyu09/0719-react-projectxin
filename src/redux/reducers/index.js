import {combineReducers} from 'redux'
import loginReducer from './login_recuder'

export default combineReducers({
  userInfo:loginReducer
})