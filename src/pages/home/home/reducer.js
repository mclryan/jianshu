import api from '../../../utils/api'
import HTTP from '../../../utils/HTTP'

const initialState = {
    recommendList: []
}



// 同步action 
export const setRecommendData = (val)=>({
    type: 'setRecommendList',
    value: val
})
export const setLoadMoreData = (val)=>({
    type: 'setLoadMoreData',
    value: val
})

//异步action
export const requestRecommendData = async (dispatch)=>{
    let response = await HTTP.get(api.HOME_RECOMMEND_LIST);
    let action = setRecommendData(response);
    dispatch(action);
}
export const loadMoreRecommendData = async (dispatch)=>{
    let response = await HTTP.get(api.HOME_RECOMMEND_LIST);
    let action = setLoadMoreData(response);
    dispatch(action);
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