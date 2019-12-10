import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

import 'lib-flexible/flexible'
import './style/reset.scss'
import './style/common.scss'

import store from './store'
import {Provider} from 'react-redux'


ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
)