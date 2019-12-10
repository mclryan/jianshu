import React from 'react'


const tabList = ['推荐','小岛','专题','连载'];

export default (props)=>{
  return (
    <nav className="home-tab border-bottom posi">
    {
      tabList.map((item, index)=>(
        <li className="item" key={index}
          onClick={()=>{
            props.onSelect(index);
          }}
        >
          <p style={{
              color: props.selectIndex === index ? '#13171a' : '#999999',
              borderBottom: props.selectIndex === index ? '4px solid #e96f5a' : '4px solid transparent'
            }}>
            {item}
          </p>
        </li>
      ))
    }
    </nav>
  )
}
