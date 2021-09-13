import {SAVE_USER_INFO,DELETE_USER_INFO} from '../action_types'

//尝试从localStorge中读取之前保存的信息
let user = JSON.parse(localStorage.getItem('user'))
let token  = localStorage.getItem('token')

//初始化userinfo数据
let initState = {
  user: user || '',
  token: token || '',
  isLogin: user && token ? true :false
}

export default function test(preState=initState,action) {
  const {type,data} = action
  let newState
  switch (type) {
    case SAVE_USER_INFO:
      const {user,token} = data
      newState = {user,token,isLogin:true}
      return newState
    case DELETE_USER_INFO:
      newState = {user:'',token:'',isLogin:false}
      return newState 
    default:
      return preState
  }
}