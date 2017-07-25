/**
 * Created by zhangchao on 2017/7/20.
 */
import { TYPE_UPDATE_USER } from '../constants/actiontypes';

export const userLogin = params => {
    return {
        type: TYPE_UPDATE_USER,
        isLogin: true
    }
};