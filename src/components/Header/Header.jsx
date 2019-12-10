import React, { PureComponent } from 'react'
import './style.scss'
import {Route} from 'react-router-dom'

class HeaderDom extends PureComponent {
  render() {
    return (
      <div id="commond-header" className="border-bottom">
        <span className="icon iconfont icon-zuojiantou"
          onClick={this.goBackAction.bind(this)}
        ></span>
        <span className="icon iconfont icon-diandian"></span>
    </div>
    )
  }

  goBackAction(){
    this.props.history.goBack();
  }
}

export default class Header extends PureComponent {
  render() {
    return (
      <Route children={(props)=><HeaderDom {...props}/>}/>
    )
  }

}
