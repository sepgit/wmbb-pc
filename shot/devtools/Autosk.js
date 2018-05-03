/**
 * Created by Zing on 2016/12/15.
 */
import {message} from 'antd';
export const SKEnter=(nextState,replace)=>{
    let user=sessionStorage.getItem("SESSIONUSER");
    let token=sessionStorage.getItem("SESSIONTOKEN");
    let userVip=sessionStorage.getItem("SESSIONUVIP");
    if(user==null&&token==null){
        message.success('请先登录');
        replace({ pathname: '/'});
    }else{
        if(userVip==undefined||userVip==0||userVip=='null'){
            message.error('请加入认证会员才可查看!');
            replace({ pathname: '/cab'});
        }
    }
};