import React, {useCallback, useRef} from 'react'
import { Toast } from 'antd-mobile';

export default (props={})=>{
  let contentDOM = props.free_content && props.free_content.split('data-original-src').join('src');
  const likeRef = useRef();
  const likeIconRef = useRef();
  
  const likeAction = useCallback((props)=>{
    if(!props.isLogin){
      props.history.push('/mine/login');
      Toast.info('请先登录',2,null,false);
      return;
    }
    let likeInfo = localStorage.getItem('likeInfo') ? JSON.parse(localStorage.getItem('likeInfo')) : [];
    let obj = {
      id: props.id,
      slug: props.slug,
      title: props.public_title,
      time1: props.first_shared_at.substring(0,10),
      time2: props.first_shared_at.substring(11,16),
      word: props.wordage,
      like: props.likes_count
    }
    likeInfo.push(obj);
    localStorage.setItem('likeInfo', JSON.stringify(likeInfo));
    likeRef.current.innerText = parseInt(likeRef.current.innerText)+1;
    likeIconRef.current.style.color = '#f33';
    Toast.info('点赞成功',2,null,false);
  }, [])

  return (
    <div className="content">
      <h1>{props.public_title}</h1>
      <div className="userinfo">
        <div className="info-left">
          <div className="head">
            <img src={props.user && props.user.avatar} alt=""/>
          </div>
          <p className="name">{props.user && props.user.nickname}</p>
        </div>
        <div className="info-right">
          <div className="follow">
            + 关注
          </div>
        </div>
      </div>
      <div className="datainfo">
        <div className="datainfo-left">
          <div className="diamond">
            <span className="iconfont icon-zuanshi1"></span>
            <p>{props.total_fp_amount && props.total_fp_amount / 1000}</p>
          </div>
          <div className="word">
          <p>字数 {props.wordage}</p>
          </div>
          <div className="read">
            <p>阅读 36</p>
          </div>
        </div>
        <div className="datainfo-right">
          <div className="time">
            {props.first_shared_at && props.first_shared_at.substring(0,10)}&nbsp;&nbsp;
            {props.first_shared_at && props.first_shared_at.substring(11,16)}
          </div>
        </div>
      </div>
      <article className="article">
        
          <div dangerouslySetInnerHTML={{__html: contentDOM}}/>
        
      </article>
      <div className="like" onClick={likeAction.bind(this,props)}  >
        <div className="line-wrap">
          <div className="line"></div>
          <div className="line-content">
            点赞赚钻 <span>最高日赚数百元</span>
          </div>
        </div>
        <div className="tolike">
          <span className="icon iconfont icon-dianzan1" ref={likeIconRef}></span>
        </div>
        <p className="count">赞（<span ref={likeRef}>{props.likes_count}</span>）</p>
      </div>
    </div>
  )
}
