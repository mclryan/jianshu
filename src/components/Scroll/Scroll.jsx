import React, { Component } from 'react'
import BScroll from "better-scroll"

export default class Scroll extends Component {
  render() {
    return (
      <div className="app-scroll" ref={(el)=>this.el = el}
        style={{overflow: 'hidden'}}
      >
        <div className="scoll-wrap">
        {
          this.props.children
        }
        </div>
      </div>
    )
  }

  componentDidMount(){
    // 创建滚动视图
    this.scroll = new BScroll(this.el, {
      tap: true,
      click: true,
      probeType: 3
    });
    // 如果需要滚动，先刷新滚动视图，就可以在可滚动范围内滚动
    this.scroll.on("beforeScrollStart", ()=>{
      this.scroll.refresh();
    });

    this.scroll.on("scroll", () => {
      if (this.scroll.y <= -45){
        this.props.onTabShow && this.props.onTabShow();
      }else{
        this.props.onTabHide && this.props.onTabHide();
      }
    });
  }
}



