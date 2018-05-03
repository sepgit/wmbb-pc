/**
 * Created by Zing on 2016/7/14.
 */
import {browserHistory} from 'react-router'
import {message} from 'antd';

export const Backlogin=(errMsg)=>{
    if(errMsg=='token失效。'||errMsg=='token过期。'){
        browserHistory.push({
            pathname:'/'
        });
        message.error("登录已失效或已过期,请重新登录");
    }else{
        message.error(errMsg);
    }
};
