import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.scss'
import Scroll from '../../../components/Scroll/Scroll'
import Header from '../../../components/Header/Header'
import Content from './children/content'
import Comment from './children/comment'
import Bot from './children/bot'
import {requestDetailData, requestCommentData, requestCheckLogin} from './reducer'
import {setLogin} from '../../mine/login/reducer'
import { Toast } from 'antd-mobile'
import {dateToString} from '../../../utils/utils'

class detail extends Component {
  constructor(props){
    super(props);
    this.state = {
      myComment: [],
      isShow: false
    }
  }
  render() {
    const {detailData} = this.props;
    return (
      <div id="detail" className="page subpage">
        <Header/>

        <Scroll>
          <Content {...detailData} {...this.props}/>
          <Comment commentData={[...this.state.myComment.reverse(), ...this.props.commentData]}/>
        </Scroll>

        <Bot onCellect={this.collectAction.bind(this)}
          onSend={this.sendAction.bind(this)}
          onShow={this.changeShowAction.bind(this)}
          />
        {
          this.state.isShow && (
            <>
              <div className="mask" onClick={this.changeShowAction.bind(this)}></div>
              <div className="showtext">
                <textarea className="text" ref={(inputRef)=>this.inputRef=inputRef} placeholder="说点什么吧"></textarea>
                <div className="submit" onClick={()=>{
                  const value = this.inputRef.value;
                  if(!value){
                    return false;
                  }
                  this.sendAction(value);
                  this.inputRef.value = '';
                }}>发表</div>
              </div>
            </>
          )
        }
      </div>
    )
  }

  changeShowAction(){
    this.setState({...this.state,isShow:!this.state.isShow})
  }

  componentDidMount(){
    this.props.getDetailData(this.props.match.params.slug);
    this.props.getCommentData(this.props.match.params.id);
    this.checkLogin();
  }

  async checkLogin(){
    const result = await requestCheckLogin();
    
    if(result.code === 0){
      this.props.setCheckLogin(true);
    }else{
      this.props.setCheckLogin(false);
    }
  }

  collectAction(){
    if(!this.props.isLogin){
      this.props.history.push('/mine/login');
      Toast.info('请先登录',2,null,false);
      return;
    }
    
    let collectInfo = localStorage.getItem('collectInfo') ? JSON.parse(localStorage.getItem('collectInfo')) : [];
    let obj = {
      id: this.props.detailData.id,
      slug: this.props.detailData.slug,
      title: this.props.detailData.public_title,
      time1: this.props.detailData.first_shared_at.substring(0,10),
      time2: this.props.detailData.first_shared_at.substring(11,16),
      word: this.props.detailData.wordage,
      name: this.props.detailData.user.nickname,
      like: this.props.detailData.likes_count
    }
    collectInfo.push(obj);
    localStorage.setItem('collectInfo', JSON.stringify(collectInfo));
    Toast.info('收藏成功',2,null,false);
  }

  sendAction(value){
    if(!this.props.isLogin){
      this.props.history.push('/mine/login');
      Toast.info('请先登录',2,null,false);
      return;
    }
    let username = this.props.username
    let commentVal = {
      compiled_content: value,
      floor: this.props.commentData.length+this.state.myComment.length+2,
      created_at: "2019-12-08T12:03:04.000+08:00",
      user: {
        nickname: username,
        avatar: '/images/avatar.jpeg'
      }
    }
    this.setState({
      ...this.state,
      isShow: false,
      myComment: [
        ...this.state.myComment,
        commentVal
      ]
    })

    let commentInfo = JSON.parse(localStorage.getItem('commentData')) || [];
    console.log(this.props.detailData);
    
    let setComment = {
      ...commentVal,
      created_at: dateToString(new Date()),
      id: this.props.detailData.id,
      slug: this.props.detailData.slug
    }
    commentInfo.push(setComment);
    localStorage.setItem('commentData',JSON.stringify(commentInfo));
    
    Toast.info('发表成功',2,null,false);
  }

}

const mapStateToProps = (state)=>{
  return {
    detailData: state.detail.detailData,
    commentData: state.detail.commentData,
    isLogin: state.login.isLogin,
    username: state.login.username
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getDetailData(id){
      let action = requestDetailData(id);
      dispatch(action);
    },
    getCommentData(id){
      let action = requestCommentData(id);
      dispatch(action);
    },
    setCheckLogin(val){
      let action = setLogin(val);
      dispatch(action);
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(detail);
