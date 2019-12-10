import React, {useCallback, useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import './style.scss'
import {requestLogin, setUserName} from './reducer'
import { Toast } from 'antd-mobile';

export default (props)=>{
  const telRef = useRef();
  const passRef = useRef();
  const loginRef = useRef();
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);
  const handleInput = useCallback(()=>{
    if(telRef.current.value !== '' && passRef.current.value !== ''){
      setIsClick(true);
      loginRef.current.style.background = '#eb7060';
    } else{
      setIsClick(false);
      loginRef.current.style.background = '#f5b6ad';
    }
  }, [])
  const loginAction = useCallback(async ()=>{
    if(!isClick) return;
    // 登录
    const username = telRef.current.value;
    const result = await dispatch(requestLogin({
      tel: username,
      password: passRef.current.value
    }))

    if(result.code === 0){
      Toast.info('登录成功',2,null,false);
      props.history.push('/home');
      localStorage.setItem('isLogin', true);
      localStorage.setItem('username', username);

      dispatch(setUserName(username));

    }else{
      Toast.info(result.message,2,null,false);
    }
    
  }, [isClick, dispatch, props.history]);

  return(
    <div id="login" className="page subpage">
      <div className="header">
        <span className="icon iconfont icon-cha" onClick={()=>{
          props.history.goBack();
        }}></span>
      </div>
      <h1>账号密码登录</h1>
      <div className="content">
        <input type="text" ref={telRef} className="user" placeholder="请输入手机号" onInput={handleInput}/>
        <br/>
        <input type="password" ref={passRef} className="password" placeholder="请输入密码" onInput={handleInput}/>
        <div className="login" ref={loginRef} onClick={loginAction}>登录</div>
        <div className="toregister" onClick={()=>{
          props.history.push('/mine/register');
        }}>注册账号</div>
      </div>
      <div className="bot">
        <h5>社交账号直接登录</h5>
        <div className="weibo">
          <span className="icon iconfont icon-weibo"></span>
          <p>微博</p>
        </div>
        <div className="protocol">
          登录代表您已同意<span>用户协议</span>和<span>隐私政策</span>
        </div>
      </div>
    </div>
  )
}