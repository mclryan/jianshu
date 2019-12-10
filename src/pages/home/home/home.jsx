import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './style.scss'
import HomeTab from './children/home-tab'
import HomeTabPosition from './children/home-tab-position'
import Recommend from './children/recommend'
import Isle from './children/isle'
import Scroll from '../../../components/Scroll/Scroll'
import {requestRecommendData, loadMoreRecommendData} from './reducer'

const Search = ()=>{
  return (
    <div className="search">
      <div className="search-con">
        <span className="icon iconfont icon-sousuo"></span>
        <p>搜索感兴趣的内容</p>
      </div>
    </div>
  )
}

class home extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      selectIndex: 0,
      tabShow: false
    }
  }
  
  render() {
    const {selectIndex, tabShow} = this.state;
    const {recommendList} = this.props;
    const Panel = this.selectPanel(selectIndex);
    
    return (
      <div id="home" className="page">
        {
          tabShow && <HomeTabPosition selectIndex={selectIndex} onSelect={this.changeAction.bind(this)}/>
        }
        <Scroll onTabShow={this.handleTabShow.bind(this)} onTabHide={this.handleTabHide.bind(this)}>
          <Search/>
          {
            !tabShow && <HomeTab selectIndex={selectIndex} onSelect={this.changeAction.bind(this)}/>
          }
          {/* 主视图 */}
          <Panel recommendList={recommendList}/>
          <div className="loadmore" onClick={this.loadMoreAction.bind(this)}>加载更多...</div>
        </Scroll>
      </div>
    )
  }

  changeAction(index){
    this.setState({
      ...this.state,
      selectIndex: index
    })
  }

  // 选择视图
  selectPanel(index){
    switch (index) {
      case 0:
        return Recommend;
      case 1:
        return Isle;
      default:
        return Recommend;
    }
  }

  loadMoreAction(){
    this.props.getLoadMoreRecommendData();
  }

  componentDidMount(){
    this.props.getRecommendData();
  }

  handleTabShow(){
    if (this.state.tabShow === false){
      this.setState({
        ...this.state,
        tabShow: true
      })
    }
  }

  handleTabHide(){
    if (this.state.tabShow === true){
      this.setState({
        ...this.state,
        tabShow: false
      })
    }
  }
}


const mapStateToProps = (state)=>{
  return {
    recommendList: state.home.recommendList
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getRecommendData(){
      // let action = requestRecommendData();
      dispatch(requestRecommendData);
    },
    getLoadMoreRecommendData(){
      // let action = requestRecommendData();
      dispatch(loadMoreRecommendData);
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(home);
