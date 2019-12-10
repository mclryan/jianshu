import React, { useRef } from 'react'

export default (props)=>{
  const collectRef = useRef();
  const inputRef = useRef();
  return (
    <div className="bot border-top">
      <div className="input">
        <div type="text" className="ipt"
          onClick={()=>{
            props.onShow();
          }}
          >说点什么吧</div>
        {/* <div className="send" onClick={()=>{
          const value = inputRef.current.value;
          if(!value){
            return false;
          }
          props.onSend(value);
          inputRef.current.value = '';
        }}>发表</div> */}
      </div>
      <nav>
        <div className="item">
          <span className="icon iconfont icon-pinglun"></span>
          <p>评论</p>
        </div>
        <div className="item" onClick={()=>{
          props.onCellect();
          collectRef.current.style.color = '#f22';
          collectRef.current.nextElementSibling.innerText = '已收藏';
        }}>
          <span className="icon iconfont icon-favorite" ref={collectRef}></span>
          <p>收藏</p>
        </div>
        <div className="item">
          <span className="icon iconfont icon-fenxiang"></span>
          <p>分享</p>
        </div>
      </nav>
    </div>
  )
}
