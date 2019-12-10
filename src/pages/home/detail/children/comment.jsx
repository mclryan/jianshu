import React, { Component } from 'react'

export default class comment extends Component {
  render() {
    const {commentData} = this.props;
    
    return (
      <div className="comment">
        <div className="header border-bottom">
          <h1>评论（{commentData.length}）</h1>
          <span className="onlyauthor">只看作者</span>
        </div>
        <div className="list">
        {
          commentData.map((item,index)=>(
            <div className="item border-bottom" key={index}>
              <div className="img">
                <img src={item.user.avatar} alt=""/>
              </div>
              <div className="con">
                <h3>{item.user.nickname}</h3>
                {/* <p>{item.compiled_content}</p> */}
                <p dangerouslySetInnerHTML={{__html: item.compiled_content}}></p>
                <div className="info">
                  <p>{item.floor}楼 · {parseInt(item.created_at[5]+item.created_at[6])}.{item.created_at[8]+item.created_at[9]} {item.created_at[11]+item.created_at[12]}:{item.created_at[14]+item.created_at[15]}</p>
                  <div>
                    <span className="icon iconfont icon-pinglun"></span>
                    <span className="icon iconfont icon-dianzan1"></span>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
          
        </div>
      </div>
    )
  }
}
