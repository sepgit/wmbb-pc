/**
 * Created by Administrator on 2016/12/1.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {message} from 'antd';
import {Backlogin} from '../../devtools/Autotoken.js'

//获取保函服务
export const GET_BHFWH = 'GET_BHFWH';

function get_bhfwh(date) {
    return {
        type: GET_BHFWH,
        err:date.err,
        errMsg:date.errMsg,
        bhfwh:date.rows
    }
}

export function getbhfwh(userName,token){
    return function(dispatch) {
        fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+'&servType=5&rowCount=0',{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_bhfwh(date));
                    }else{
                        Backlogin(date.errMsg)
                    }
                });
            }
        }, function(e) {
            message.error("连接服务器失败，请联系管理员！");
        });
    }
}

//获取付款列表付款人
export const GET_BHRH = 'GET_BHRH';

function get_bhrh(date) {
    return {
        type: GET_BHRH,
        err:date.err,
        errMsg:date.errMsg,
        bhrh:date.rows
    }
}

export function getbhrh(userName,token,user,comp){
    let str='';
    if(comp>0){
        str='&comp='+comp;
    }else{
        str='&user='+user;
    }
    return function(dispatch) {
        fetch(HTTPED+'api/wmbbusers/?userName='+userName+'&token='+token+'&rowCount=0'+str,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_bhrh(date));
                    }else{
                        Backlogin(date.errMsg)
                    }
                });
            }
        }, function(e) {
            message.error("连接服务器失败，请联系管理员！");
        });
    }
}

//初始化付款列表
export const GET_CKLCH = 'GET_CKLCH';

function get_sklch(date) {
    return {
        type: GET_CKLCH,
        err:date.err,
        errMsg:date.errMsg,
        rowCount:date.rowCount,
        sklisth:date.rows
    }
}

export function getsklch(userName,token){
    return function(dispatch) {
        fetch(HTTPED+'api/guars/?userName='+userName+'&token='+token+'&rowCount=10&pay=true',{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_sklch(date));
                    }else{
                        Backlogin(date.errMsg)
                    }
                });
            }
        }, function(e) {
            message.error("连接服务器失败，请联系管理员！");
        });
    }
}

//搜索收款列表
export const GET_CKLSH = 'GET_CKLSH';

function get_cklsh(date) {
    return {
        type: GET_CKLSH,
        err:date.err,
        errMsg:date.errMsg,
        rowCount:date.rowCount,
        sklisth:date.rows
    }
}

export function getcklsh(userName,token,pageIndex,serv,payUser,receUser,expiTime,guar,stat,blacklist){
    let str='';
    if(stat!=0){
        str='&stat='+stat;
    }
    return function(dispatch) {
        fetch(HTTPED+'api/guars/?userName='+userName+'&token='+token+"&rowCount=10&pay=true&pageIndex="+pageIndex+"&serv="+serv+"&payUser="+payUser+"&receUser="+receUser+"&expiTime="+expiTime+"&guar="+guar+"&blacklist="+blacklist+str,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_cklsh(date));
                    }else{
                        Backlogin(date.errMsg)
                    }
                });
            }
        }, function(e) {
            message.error("连接服务器失败，请联系管理员！");
        });
    }
}

//滚动加载收款
export const GET_CKLGH = 'GET_CKLGH';

function get_cklgh(date) {
    return {
        type: GET_CKLGH,
        err:date.err,
        errMsg:date.errMsg,
        rowCount:date.rowCount,
        sklisth:date.rows
    }
}

export function getcklgh(userName,token,pageIndex,serv,payUser,receUser,expiTime,guar,stat,blacklist){
    let str='';
    if(stat!=0){
        str='&stat='+stat;
    }
    return function(dispatch) {
        fetch(HTTPED+'api/guars/?userName='+userName+'&token='+token+"&rowCount=10&pay=true&pageIndex="+pageIndex+"&serv="+serv+"&payUser="+payUser+"&receUser="+receUser+"&expiTime="+expiTime+"&guar="+guar+"&blacklist="+blacklist+str,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_cklgh(date));
                    }else{
                        Backlogin(date.errMsg)
                    }
                });
            }
        }, function(e) {
            message.error("连接服务器失败，请联系管理员！");
        });
    }
}


//获取保函详情
export const GET_BHXQH = 'GET_BHXQH';

function get_bhxqh(date) {
    return {
        type: GET_BHXQH,
        err:date.err,
        errMsg:date.errMsg,
        bhxqh:date.guar
    }
}

export function getbhxqh(userName,token,guar){
    return function(dispatch) {
        fetch(HTTPED+'api/guars/'+guar+'/?userName='+userName+'&token='+token,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_bhxqh(date));
                    }else{
                        Backlogin(date.errMsg)
                    }
                });
            }
        }, function(e) {
            message.error("连接服务器失败，请联系管理员！");
        });
    }
}

//上传付款水单
export const GET_FPSCH = 'GET_FPSCH';

function put_fksdh(date) {
    return {
        type: GET_FPSCH,
        err:date.err,
        errMsg:date.errMsg,
        guarfksd:date.guar
    }
}

export function putfksdh(guar,formdate){
    return function(dispatch) {
        fetch(HTTPED+'api/guars/'+guar+'/',{
            method: "put",
            body:formdate
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date) {
                    if(!date.err){
                        dispatch(put_fksdh(date));
                        message.success('上传成功');
                    }else{
                        Backlogin(date.errMsg)
                    }
                });
            }
        }, function(e) {
            message.error("连接服务器失败，请联系管理员！");
        });
    }
}


//修改状态
export const GET_XGZTH = 'GET_XGZTH';

function put_xgzth(date) {
    return {
        type: GET_XGZTH,
        err:date.err,
        errMsg:date.errMsg,
        guarzth:date.guar
    }
}

export function putxgzth(guar,userName,token,stat){
    return function(dispatch) {
        fetch(HTTPED+'api/guars/'+guar+'/',{
            method: "put",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body:"userName="+userName+"&token="+token+"&changeStat=true&stat="+stat
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date) {
                    if(!date.err){
                        dispatch(put_xgzth(date));
                        message.success('修改成功');
                    }else{
                        Backlogin(date.errMsg)
                    }
                });
            }
        }, function(e) {
            message.error("连接服务器失败，请联系管理员！");
        });
    }
}

//流程记录-确认履约
export const GET_QRLVH = 'GET_QRLVH';

function put_qrlv(date) {
    return {
        type: GET_QRLVH,
        err:date.err,
        errMsg:date.errMsg,
        guarqr:date.guar
    }
}

export function putqrlv(guar,userName,token,certStat){
    return function(dispatch) {
        fetch(HTTPED+'api/guars/'+guar+'/',{
            method: "put",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body:"userName="+userName+"&token="+token+"&certStat="+certStat+"&certConfirm=true"
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date) {
                    if(!date.err){
                        dispatch(put_qrlv(date));
                        message.success('确认成功');
                    }else{
                        Backlogin(date.errMsg)
                    }
                });
            }
        }, function(e) {
            message.error("连接服务器失败，请联系管理员！");
        });
    }
}


//流程记录-异议内容
export const GET_YIH = 'GET_YIH';

function put_yih(date) {
    return {
        type: GET_YIH,
        err:date.err,
        errMsg:date.errMsg,
        guaryih:date.guar
    }
}

export function putyih(guar,userName,token,certStatLabe){
    return function(dispatch) {
        fetch(HTTPED+'api/guars/'+guar+'/',{
            method: "put",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body:"userName="+userName+"&token="+token+"&certStatLabe="+certStatLabe+"&certConfirm=true"
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date) {
                    if(!date.err){
                        dispatch(put_yih(date));
                        message.success('确认成功');
                    }else{
                        Backlogin(date.errMsg)
                    }
                });
            }
        }, function(e) {
            message.error("连接服务器失败，请联系管理员！");
        });
    }
}

//获取个人信息（用户详情）
export const GET_PAINFO = 'GET_PAINFO';

function get_painfo(date) {
    return {
        type: GET_PAINFO,
        err:date.err,
        errMsg:date.errMsg,
        painfo:date.user
    }
}

export function getpainfo(userName,token,userid){
    return function(dispatch) {
        fetch(HTTPED+'api/wmbbusers/'+userid+'/?userName='+userName+'&token='+token,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_painfo(date));
                    }else{
                        Backlogin(date.errMsg)
                    }
                });
            }
        }, function(e) {
            message.error("连接服务器失败，请联系管理员！");
        });
    }
}