import api from '../../../utils/api'
import HTTP from '../../../utils/HTTP'

const initialState = {
    
}


//异步action
export const requestLogout = async (dispatch)=>{
  let response = await HTTP.get(api.USER_LOGOUT);
  return response;
}

export default (state = initialState, action)=>{
    switch (action.type) {
        case 'setRecommendList':
            return {
                ...state,
                recommendList: action.value
            }
        case 'setLoadMoreData':
            return {
                ...state,
                recommendList: [...state.recommendList, ...action.value]
            }
        default:
            return state;
    }
    
}