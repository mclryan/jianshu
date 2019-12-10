import React from 'react'
import {Link} from 'react-router-dom'

export default (props)=>{
  const {data} = props.object
  
  return (
    <div className="home-item">
      <Link to={"/home/detail/"+data.slug+'/'+data.id}>
        <h1>{data.title}</h1>
        <p>{data.public_abbr}</p>
        <div className="info">
          <div className="diamond">
            <span className="iconfont icon-zuanshi1"></span>
            <p>{parseInt(data.total_fp_amount) / 1000}</p>
          </div>
          <div className="name">{data.user.nickname}</div>
          <div className="msg">
            <span className="iconfont icon-xinxi"></span>
            <p>{data.public_comments_count}</p>
          </div>
          <div className="like">
            <span className="iconfont icon-favorite"></span>
            <p>{data.likes_count}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
