/**
 * Created by Zing on 2017/1/11.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//初始化会员展示厅列表
export const GET_BLL = 'GET_BLL';

function get_bll(date) {
    return {
        type: GET_BLL,
        err:date.err,
        errMsg:date.errMsg,
        rowCount:date.rowCount,
        bll:date.rows
    }
}

export function getbll(userName,token){
    return function(dispatch) {
        fetch(HTTPED+'api/disps/?userName='+userName+'&token='+token+'&rowCount=10&isBlack=true',{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_bll(date));
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

//搜索会员展示厅列表
export const GET_BLLS = 'GET_BLLS';

function get_blls(date) {
    return {
        type: GET_BLLS,
        err:date.err,
        errMsg:date.errMsg,
        rowCount:date.rowCount,
        bll:date.rows
    }
}

export function getblls(userName,token,pageIndex,guar,userAcco,compAlia,mobi,listType){
    return function(dispatch) {
        fetch(HTTPED+'api/disps/?userName='+userName+'&token='+token+"&rowCount=10&isBlack=true&pageIndex="+pageIndex+"&guar="+guar+"&userAcco="+userAcco+"&compAlia="+compAlia+"&mobi="+mobi+"&listType="+listType,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_blls(date));
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

//滚动加载
export const GET_BLLG = 'GET_BLLG';

function get_bllg(date) {
    return {
        type: GET_BLLG,
        err:date.err,
        errMsg:date.errMsg,
        rowCount:date.rowCount,
        bll:date.rows
    }
}

export function getbllg(userName,token,pageIndex,guar,userAcco,compAlia,mobi,listType){
    return function(dispatch) {
        fetch(HTTPED+'api/disps/?userName='+userName+'&token='+token+"&rowCount=10&isBlack=true&pageIndex="+pageIndex+"&guar="+guar+"&userAcco="+userAcco+"&compAlia="+compAlia+"&mobi="+mobi+"&listType="+listType,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_bllg(date));
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

//获取用户详情
export const GET_BKINFO = 'GET_BKINFO';

function get_bkinfo(date,deposit) {
    return {
        type: GET_BKINFO,
        err:date.err,
        errMsg:date.errMsg,
        bkinfo:date.user,
        deposit:deposit
    }
}

export function getbkinfo(userName,token,userid){
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
                        fetch(HTTPED+'api/guars/?userName='+userName+'&token='+token+'&user='+userid+'&residual=true',{
                            method: "get",
                            headers: {
                                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                            }
                        }).then(function(res){
                            if(res.ok){
                                res.json().then(function(d3){
                                    if(!date.err){
                                        dispatch(get_bkinfo(date,d3.deposit));
                                    }
                                });
                            }
                        });
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
