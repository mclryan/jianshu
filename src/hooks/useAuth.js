// 鉴权
import React from 'react'
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function useAuth(DOM){
  let isLogin = useSelector((state)=>state.login.isLogin);
  console.log(isLogin);
  
  return isLogin ? DOM : <Redirect to='/mine/login'/>;
}