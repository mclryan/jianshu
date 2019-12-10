import React, {useState, useCallback} from 'react'
import Scroll from '../../../components/Scroll/Scroll'
import './style.scss'

const newmess = [
  {title: '互动消息', icon: 'iconfont icon-xinxi'},
  {title: '简书钻', icon: 'iconfont icon-zuanshi1'},
  {title: '其他消息', icon: 'iconfont icon-10'}
]



export default (props)=>{

  const [commentData] = useState(()=>{
    return JSON.parse(localStorage.getItem('commentData'));
  });
  const toDetailAction =  useCallback((slug,id)=>{
    props.history.push('/home/detail/'+slug+'/'+id);
    
  }, [props.history])
  
  return(
    <div id="message" className="page">
      <div className="header border-bottom">
        <p className="title">消息</p>
        <span className="icon iconfont icon-sousuo"></span>
      </div>
      <div className="newmess">
      {
        newmess.map((item, index)=>(
          <div className="messitem" key={index}>
            <span className={item.icon}></span>
            <p>{item.title}</p>
          </div>
        ))
      }
      </div>
      <div className="comment">
        <div className="hgroup">
          <h1>我的评论</h1>
          <p>新的评论</p>
        </div>
        <nav className="mycomment">
        <Scroll>
        {
          (!commentData || commentData.length === 0) ?
          (
            <div className="noshow">
              <span className="iconfont icon-weixing"></span>
              <p>这里空空如也哦~</p>
            </div>
          ) : (
            
              commentData.map((item, index)=>(
                <li className="item" key={index} onClick={toDetailAction.bind(this,item.slug,item.id)}>
                  <div className="avatar">
                    <img src={item.user.avatar} alt=""/>
                  </div>
                  <div className="con border-bottom">
                    <div className="titlegroup">
                      <div className="title">
                        <h4>{item.user.nickname}</h4>
                        <span className="iconfont icon-zuanshi"></span>
                      </div>
                      <span className="time">{item.created_at}</span>
                    </div>
                    <p className="content">
                      {item.compiled_content}
                    </p>
                  </div>
                </li>
              ))
            
          )
        }
        </Scroll>
        </nav>
      </div>
    </div>
  )
}