import React, { Component, lazy, Suspense } from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Loading from './components/Loading/Loading'
import Tabs from './components/Tabs/Tabs'

const Home = lazy(()=>import('./pages/home/home/home'));
const Detail = lazy(()=>import('./pages/home/detail/detail'));
const Mine = lazy(()=>import('./pages/mine/mine/mine'));
const Collect = lazy(()=>import('./pages/mine/collect/collect'));
const Login = lazy(()=>import('./pages/mine/login/login'));
const Register = lazy(()=>import('./pages/mine/register/register'));

const Attention = lazy(()=>import('./pages/attention/attention/attention'));
const Message = lazy(()=>import('./pages/message/message/message'));
const Vip = lazy(()=>import('./pages/vip/vip/vip'));

export default class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<Loading/>}>

          {/* 根页面 */}
          <Switch>
            <Route path="/" exact render={()=><Redirect to="/home"/>}/>

            <Route path="/home" component={Home}/>
            <Route path="/attention" component={Attention}/>
            <Route path="/vip" component={Vip}/>
            <Route path="/message" component={Message}/>

            <Route path="/mine" component={Mine}/>

          </Switch>

          {/* 子页面 */}
          <>
            <Route path="/home/detail/:slug/:id" component={Detail}/>
            <Route path="/mine/collect" component={Collect}/>
            <Route path="/mine/login" component={Login}/>
            <Route path="/mine/register" component={Register}/>
          </>

          {/* tab栏 */}
          <Tabs/>

        </Suspense>
      </Router>
    )
  }
}
