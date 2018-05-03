/**
 * Created by Zing on 2016/10/9.
 */
import {message} from 'antd';
export const msgEnter=(nextState,replace)=>{
    let user=sessionStorage.getItem("SESSIONUSER");
    let token=sessionStorage.getItem("SESSIONTOKEN");
    let enab=sessionStorage.getItem("SESSIONADMIENAB");
    let comp=sessionStorage.getItem("SESSIONCOMP");
    if(user==null&&token==null){
        message.success('请先登录');
        replace({ pathname: '/'});
    }else{
        if(comp>0){
            if(enab==undefined||enab==0){
                message.error('管理员权限正在审核中!');
            }
        }
    }
};