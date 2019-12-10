import api from '../../../utils/api'
import HTTP from '../../../utils/HTTP'

const initialState = {
    
}


//异步action
export const requestRegister = (info)=>async (dispatch)=>{
  console.log(info);
  let response = await HTTP.get(api.USER_REGISTER, info);
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