/**
 * Created by Zing on 2017/7/21.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//求舱黑名单列表
export const GET_CABL = 'GET_CABL';

function get_cabl(date) {
    return {
        type: GET_CABL,
        err:date.err,
        errMsg:date.errMsg,
        rowCount:date.rowCount,
        cabck:date.rows
    }
}

export function getcabl(userName,token){
    return function(dispatch) {
        fetch(HTTPED+'api/disps/?userName='+userName+'&token='+token+'&rowCount=10&isBlack=true&listType=3',{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_cabl(date));
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

//搜索黑名单列表
export const GET_CABLS = 'GET_CABLS';

function get_cabls(date) {
    return {
        type: GET_CABLS,
        err:date.err,
        errMsg:date.errMsg,
        rowCount:date.rowCount,
        cabck:date.rows
    }
}

export function getcabls(userName,token,pageIndex,guar,userAcco,compAlia,mobi,listType){
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
                        dispatch(get_cabls(date));
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
export const GET_CABLG = 'GET_CABLG';

function get_cablg(date) {
    return {
        type: GET_CABLG,
        err:date.err,
        errMsg:date.errMsg,
        rowCount:date.rowCount,
        cabck:date.rows
    }
}

export function getcablg(userName,token,pageIndex,guar,userAcco,compAlia,mobi,listType){
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
                        dispatch(get_cablg(date));
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