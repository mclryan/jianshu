import React, {useCallback} from 'react';

export default (props)=>{
  const {data} = props;
  const goDetailAction = useCallback((slug, id)=>{
    props.history.push('/home/detail/'+slug+'/'+id);
  }, [props.history]);

  return (
    <nav className="collect">
    {
      data ? (
        data.map((item, index)=>(
          <li className="item border-bottom" key={index} onClick={goDetailAction.bind(this, item.slug, item.id)}>
            <div className="time">
              <span className="name">{item.name}</span>
              {item.time1} {item.time2}
            </div>
            <p className="con">{item.title}</p>
            <div className="info">
              <span className="icon iconfont icon-yanjing"></span>
              <i>{item.word}</i>
              <span className="icon iconfont icon-xiaoxi"></span>
              <i>23</i>
              <span className="icon iconfont icon-dianzan"></span>
              <i>{item.like}</i>
            </div>
          </li>
        ))
      ) : (
        <p className="showNo">
          暂无收藏，快去收藏吧~
        </p>
      )
    }
      
    </nav>
  )
}
