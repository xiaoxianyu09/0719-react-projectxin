import {SAVE_USER_INFO,DELETE_USER_INFO} from '../action_types'

//创建保存用户信息的action
export const createSaveUserInfoAction = (value)=> {
  localStorage.setItem('user',JSON.stringify(value.user))
  localStorage.setItem('token',value.token)
  return {type:SAVE_USER_INFO,data:value}
}

//创建删除用户信息的action
export const createDeleteUserInfoAction = ()=> {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  return {type:DELETE_USER_INFO}
}