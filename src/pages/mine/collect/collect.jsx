import React, {useState, useCallback} from 'react';
import Header from '../../../components/Header/Header'
import CollectItem from './children/collect';
import LikeItem from './children/like';
import Scroll from '../../../components/Scroll/Scroll'
import './style.scss'
import useAuth from '../../../hooks/useAuth'


export default (props)=>{
  const [selectIndex, setSelectIndex] = useState(0);
  const [likeInfo, setLikeInfo] = useState(()=>{
    return JSON.parse(localStorage.getItem('likeInfo'));
  })
  const [collectInfo, setCollectInfo] = useState(()=>{
    return JSON.parse(localStorage.getItem('collectInfo'));
  })

  const selectAction = useCallback((index)=>{
    setSelectIndex(index);
  }, [])

  const tabs = (
    <div className="tabs border-bottom">
    {
      ['赞过的文章', '收藏文章'].map((item,index)=>(
        <div className="tab" key={index}
          onClick={selectAction.bind(this,index)}
          >
          <p style={{
            color: selectIndex === index ? '#e7907f' : '#919191',
            borderBottomColor: selectIndex === index ? '#e58c7c' : 'transparent'
          }}>{item}</p>
        </div>
      ))
    }
    </div>
  )
  const Panel = selectIndex === 0 ? LikeItem : CollectItem;
  return useAuth(
    <div id="collect" className="page subpage">
      <Header/>
      {tabs}

      <Scroll>
        <Panel data={selectIndex === 0 ? likeInfo : collectInfo} {...props} />
      </Scroll>
    </div>
  )
}