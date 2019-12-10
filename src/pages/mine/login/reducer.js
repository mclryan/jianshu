import api from '../../../utils/api'
import HTTP from '../../../utils/HTTP'

const initialState = {
    isLogin: false,
    username: localStorage.getItem('username')
}


// 同步action 
export const setLogin = (val)=>({
    type: 'setLogin',
    value: val
})

export const setUserName = (val)=>({
    type: 'setUserName',
    value: val
})

//异步action
export const requestLogin = (info)=>async (dispatch)=>{
  let response = await HTTP.get(api.USER_LOGIN, info);
  dispatch(setLogin(true))
  return response;
}

export default (state = initialState, action)=>{
    switch (action.type) {
        case 'setLogin':
            return {
                ...state,
                isLogin: action.value
            }
        case 'setUserName':
            return {
                ...state,
                username: action.value
            }
        default:
            return state;
    }
    
}