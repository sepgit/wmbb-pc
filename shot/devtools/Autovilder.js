/**
 * Created by Zing on 2016/7/8.
 */
import {message} from 'antd';
export const handonEnter=(nextState,replace)=>{
    let user=sessionStorage.getItem("SESSIONUSER");
    let token=sessionStorage.getItem("SESSIONTOKEN");
    if(user==null&&token==null){
        message.success('请先登录');
        replace({ pathname: '/'});
    }
};