import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.scss'

const tabList = [
  {id: 1, title: '首页', icon: 'icon iconfont icon-shouye', path: '/home'},
  {id: 2, title: '关注', icon: 'icon iconfont icon-guanzhu', path: '/attention'},
  {id: 3, title: '简书钻', icon: 'icon iconfont icon-zuanshi', path: '/vip'},
  {id: 4, title: '消息', icon: 'icon iconfont icon-xiaoxi', path: '/message'},
  {id: 5, title: '我的', icon: 'icon iconfont icon-wode', path: '/mine'}
];

export default ()=>{
  return (
    <nav id="tabs" className="border-top">
    {
      tabList.map(item=>(
        <NavLink className="tab" key={item.id} to={item.path}>
          <span className={item.icon}></span>
          <span className="text">{item.title}</span>
        </NavLink>
      ))
    }
    </nav>
  )
}
