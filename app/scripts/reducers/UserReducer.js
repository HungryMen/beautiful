/**
 * Created by zhangchao on 2017/7/20.
 */

import { TYPE_UPDATE_USER } from '../constants/actiontypes';

const initState = {
    isLogin: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case TYPE_UPDATE_USER:
            return {
                isLogin: action.isLogin,
            };
        default:
            return state;
    }
}