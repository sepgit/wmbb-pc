/**
 * Created by Zing on 2017/6/2.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//定金列表
export const GET_DJGL = 'GET_DJGL';

function get_djgl(date) {
    return {
        type: GET_DJGL,
        err:date.err,
        errMsg:date.errMsg,
        rowCount:date.rowCount,
        djlist:date.rows
    }
}

export function getdjgl(userName,token){
    return function(dispatch) {
        fetch(HTTPED+'api/cabDepos/?userName='+userName+'&token='+token+'&rowCount=10&cabType=1',{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_djgl(date));
                    }else{
                        Backlogin(date.errMsg);
                    }
                });
            }
        }, function(e) {
            message.error("连接服务器失败，请联系管理员！");
        });
    }
}

//搜索定金列表
export const GET_SDJ = 'GET_SDJ';

function get_sdj(date) {
    return {
        type: GET_SDJ,
        err:date.err,
        errMsg:date.errMsg,
        rowCount:date.rowCount,
        djlist:date.rows
    }
}

export function getsdj(userName,token,pageIndex){
    return function(dispatch) {
        fetch(HTTPED+'api/cabDepos/?userName='+userName+'&token='+token+"&rowCount=10&cabType=1&pageIndex="+pageIndex,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_sdj(date));
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

//滚动加载定金列表
export const GET_DJGD = 'GET_DJGD';

function get_djgd(date) {
    return {
        type: GET_DJGD,
        err:date.err,
        errMsg:date.errMsg,
        rowCount:date.rowCount,
        djlist:date.rows
    }
}

export function getdjgd(userName,token,pageIndex){
    return function(dispatch) {
        fetch(HTTPED+'api/cabDepos/?userName='+userName+'&token='+token+"&rowCount=10&cabType=1&pageIndex="+pageIndex,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_djgd(date));
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

//可用余额
export const GET_KYYED = 'GET_KYYED';

function get_kyyed(date) {
    return {
        type: GET_KYYED,
        err:date.err,
        errMsg:date.errMsg,
        residual:date.residual,
        resiUsd:date.resiUsd
    }
}

export function getkyyed(userName,token){
    return function(dispatch) {
        fetch(HTTPED+'api/cabDepos/?userName='+userName+'&token='+token+'&resi=true',{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_kyyed(date));
                    }else{
                        Backlogin(date.errMsg);
                    }
                });
            }
        }, function(e) {
            message.error("连接服务器失败，请联系管理员！");
        });
    }
}
