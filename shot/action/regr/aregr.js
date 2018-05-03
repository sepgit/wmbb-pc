/**
 * Created by Zing on 2017/6/6.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//充值列表
export const GET_CZL = 'GET_CZL';

function get_czl(date) {
    return {
        type: GET_CZL,
        err:date.err,
        errMsg:date.errMsg,
        rowCount:date.rowCount,
        czlist:date.rows
    }
}

export function getczl(userName,token){
    return function(dispatch) {
        fetch(HTTPED+'api/cabDepos/?userName='+userName+'&token='+token+'&rowCount=10&cabType=3',{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_czl(date));
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

//搜索充值列表
export const GET_SCZ = 'GET_SCZ';

function get_scz(date) {
    return {
        type: GET_SCZ,
        err:date.err,
        errMsg:date.errMsg,
        rowCount:date.rowCount,
        czlist:date.rows
    }
}

export function getscz(userName,token,pageIndex){
    return function(dispatch) {
        fetch(HTTPED+'api/cabDepos/?userName='+userName+'&token='+token+"&rowCount=10&cabType=3&pageIndex="+pageIndex,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_scz(date));
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

//滚动加载充值列表
export const GET_CZGD = 'GET_CZGD';

function get_czgd(date) {
    return {
        type: GET_CZGD,
        err:date.err,
        errMsg:date.errMsg,
        rowCount:date.rowCount,
        czlist:date.rows
    }
}

export function getczgd(userName,token,pageIndex){
    return function(dispatch) {
        fetch(HTTPED+'api/cabDepos/?userName='+userName+'&token='+token+"&rowCount=10&cabType=3&pageIndex="+pageIndex,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_czgd(date));
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
export const GET_KYYEC = 'GET_KYYEC';

function get_kyyec(date) {
    return {
        type: GET_KYYEC,
        err:date.err,
        errMsg:date.errMsg,
        residual:date.residual,
        resiUsd:date.resiUsd
    }
}

export function getkyyec(userName,token){
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
                        dispatch(get_kyyec(date));
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
