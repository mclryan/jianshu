import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import home from '../pages/home/home/reducer';
import detail from '../pages/home/detail/reducer';
import register from '../pages/mine/register/reducer';
import login from '../pages/mine/login/reducer';

const reducer = combineReducers({
    home,
    detail,
    register,
    login
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;