import api from '../../../utils/api'
import HTTP from '../../../utils/HTTP'

const initialState = {
    detailData: {},
    commentData: []
}



// 同步action 
export const setDetailData = (val)=>({
    type: 'setDetailData',
    value: val
})

export const setCommentData = (val)=>({
    type: 'setCommentData',
    value: val
})

//异步action
export const requestDetailData = (val)=>async (dispatch)=>{
    let response = await HTTP.get(api.HOME_DETAIL_LIST+val);
    let action = setDetailData(response);
    dispatch(action);
}

export const requestCommentData = (val)=>async (dispatch)=>{
    let response = await HTTP.get(api.HOME_COMMENT_LIST+val+'/comments',{
        count: 10,
        order_by: ''
    });
    let action = setCommentData(response);
    dispatch(action);
}

export const requestCheckLogin = async (dispatch)=>{
    let response = await HTTP.get(api.USER_CHECKLOGIN);
    return response;
}


export default (state = initialState, action)=>{
    switch (action.type) {
        case 'setDetailData':
            return {
                ...state,
                detailData: action.value
            }
        case 'setCommentData':
            return {
                ...state,
                commentData: action.value
            }
        default:
            return state;
    }
    
}