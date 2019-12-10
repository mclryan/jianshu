// 管理api
// export const HOST = 'http://localhost:3000';


// export const HOME_RECOMMEND_LIST = '/asimov/trending/now?count=15&note_ids=';
export const HOME_RECOMMEND_LIST = '/api/content/home_recommend';

// export const HOME_DETAIL_LIST = '/asimov/p/';
export const HOME_DETAIL_LIST = '/api/content/home_detail/';

// export const HOME_COMMENT_LIST = '/asimov/notes/';
export const HOME_COMMENT_LIST = '/api/content/home_comment_list/';

export const USER_REGISTER = '/api/user/register';
export const USER_LOGIN = '/api/user/login';
export const USER_LOGOUT = '/api/user/logout';
export const USER_CHECKLOGIN = '/api/user/check_login';


export default {
    // HOST,
    HOME_RECOMMEND_LIST,
    HOME_DETAIL_LIST,
    HOME_COMMENT_LIST,
    USER_REGISTER,
    USER_LOGIN,
    USER_LOGOUT,
    USER_CHECKLOGIN
}
