import React, {useCallback, useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import './style.scss'
import {requestRegister} from './reducer'
import { Toast } from 'antd-mobile';

export default (props)=>{
  const telRef = useRef();
  const passRef = useRef();
  const registerRef = useRef();
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);
  const handleInput = useCallback(()=>{
    if(telRef.current.value !== '' && passRef.current.value !== ''){
      setIsClick(true);
      registerRef.current.style.background = '#eb7060';
    } else{
      setIsClick(false);
      registerRef.current.style.background = '#f5b6ad';
    }
  }, [])
  const registerAction = useCallback(async ()=>{
    if(!isClick) return;
    // 注册
    const result = await dispatch(requestRegister({
      tel: telRef.current.value,
      password: passRef.current.value
    }))
    
    if(result.code === 0){
      Toast.info('注册成功',2,null,false);
      props.history.push('/mine/login');
    }else{
      Toast.info(result.message,2,null,false);
    }
  }, [isClick, dispatch, props.history])

  return(
    <div id="register" className="page subpage">
      <div className="header">
        <span className="icon iconfont icon-cha" onClick={()=>{
          props.history.goBack();
        }}></span>
      </div>
      <h1>注册账号密码</h1>
      <div className="content">
        <input type="text" ref={telRef} className="user" placeholder="请输入手机号" onInput={handleInput}/>
        <br/>
        <input type="password" ref={passRef} className="password" placeholder="请输入密码" onInput={handleInput}/>
        <div className="register" ref={registerRef} onClick={registerAction}>注册</div>
        <div className="tologin" onClick={()=>{
          props.history.push('/mine/login');
        }}>已有账号，去登录</div>
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