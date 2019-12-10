import React, {useState, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.scss'
import {requestLogout} from './reducer'
import {setLogin} from '../login/reducer'
import { Toast } from 'antd-mobile';

const postList = [
  {title: '我的文章', icon: 'iconfont icon-16'},
  {title: '我的帖子', icon: 'iconfont icon-tiezi'},
  {title: '赞和收藏', icon: 'iconfont icon-shoucang', path: '/mine/collect'},
  {title: '奖励任务', icon: 'iconfont icon-tiezi'},
]
const mineList = ['简书会员','简书活动','简东西','我的钱包','我的书架','浏览历史'];

export default (props)=>{
  const [isLogin, setIsLogin] = useState(()=>{
    return JSON.parse(localStorage.getItem('isLogin'));
  });
  const username = useSelector((state)=>state.login.username);
  const dispatch = useDispatch();
  const logoutAction = useCallback(async ()=>{
    const result = await dispatch(requestLogout);
    if (result.code === 0){
      Toast.info('退出登录成功',2,null,false);
      localStorage.removeItem('isLogin');
      localStorage.removeItem('username');
      dispatch(setLogin(false));
      setIsLogin(false);
    }else{
      Toast.info(result.message,2,null,false);
    }
  })

  return (
    <div id="mine" className="page">
      <div className="header border-bottom">
        <div className="scan">
          <span className="icon iconfont icon-saoma"></span>
        </div>
        <div className="write">
          <p>写文章</p>
        </div>
      </div>
      <div className="tologin-wrap">
        <div className="avatar">
        {
          isLogin ?
          (<img src="/images/avatar.jpeg" alt=""/>) :
          (
            <>
            <div className="ball"></div>
            <div className="ball"></div>
            </>
          )
        }
        </div>
        {
          isLogin ?
          (<div className="user">
            <h4>用户{username}</h4>
            <div className="fan">
              <span>关注 <i>{12}</i></span>
              <span>粉丝 <i>{0}</i></span>
            </div>
          </div>)
          : (<div className="tologin">
            <h4 onClick={()=>{
              props.history.push('/mine/login');
            }}>点击登录</h4>
            <p>立即赢取简书钻福利</p>
          </div>)
          
        }

      </div>
      <nav className="post">
      {
        postList.map(item=>(
          <li className="item" key={item.title} onClick={()=>{
            item.path && props.history.push(item.path);
          }}>
            <a>
              <span className={item.icon}></span>
              <p>
                {item.title}
              </p>
            </a>
          </li>
        ))
      }
      </nav>
      <nav className="mine-list">
      {
        mineList.map((item, index)=>(
          <li className="item border-bottom" key={index}>
            <a>
              <p>{item}</p>
              <span className="iconfont icon-you-"></span>
            </a>
          </li>
        ))
      }
      </nav>
      <div className="logout" onClick={logoutAction}>
        退出登录
      </div>
    </div>
  )

}
