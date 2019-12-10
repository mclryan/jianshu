import React from 'react'
import Item from './item'

export default (props)=>{
  const {recommendList = []} = props;
  
  return (
    <div className="recommend panel">
    {
      recommendList.map((item, index)=>(
        <Item {...item} key={index}/>
      ))
    }
      
    </div>
  )
}
