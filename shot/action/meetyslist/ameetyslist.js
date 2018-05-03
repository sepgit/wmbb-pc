/**
 * Created by Zing on 2017/4/1.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//会议优势列表 运价优势
export const GET_MEETYS = 'GET_MEETYS';

function get_meetys(date) {
    return {
        type: GET_MEETYS,
        err:date.err,
        errMsg:date.errMsg,
        meetys:date.rows
    }
}

export function getmeetys(userName,token,user){
    return function(dispatch) {
        fetch(HTTPED+'api/advas/?userName='+userName+'&token='+token+'&rowCount=0&user='+user,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_meetys(date));
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

//会议优势列表 特种优势
export const GET_MEETYST = 'GET_MEETYST';

function get_meetyst(date) {
    return {
        type: GET_MEETYST,
        err:date.err,
        errMsg:date.errMsg,
        meetyst:date.rows
    }
}

export function getmeetyst(userName,token,user){
    return function(dispatch) {
        fetch(HTTPED+'api/advas/?userName='+userName+'&token='+token+'&rowCount=0&advaType=1&user='+user,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_meetyst(date));
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

//会议优势列表 服务优势
export const GET_MEETYSF = 'GET_MEETYSF';

function get_meetysf(date) {
    return {
        type: GET_MEETYSF,
        err:date.err,
        errMsg:date.errMsg,
        meetysf:date.rows
    }
}

export function getmeetysf(userName,token,user){
    return function(dispatch) {
        fetch(HTTPED+'api/conts/?userName='+userName+'&token='+token+'&rowCount=0&user='+user,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_meetysf(date));
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
