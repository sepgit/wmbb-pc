/**
 * Created by Zing on 2017/3/31.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//会议需求列表 运价服务
export const GET_MEETLXQ = 'GET_MEETLXQ';

function get_meetlxq(date) {
    return {
        type: GET_MEETLXQ,
        err:date.err,
        errMsg:date.errMsg,
        meetxqlist:date.rows
    }
}

export function getmeetlxq(userName,token,meetChat){
    return function(dispatch) {
        fetch(HTTPED+'api/meetRequs/?userName='+userName+'&token='+token+'&servType=1&meetChat='+meetChat,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_meetlxq(date));
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

//会议需求列表 咨询服务
export const GET_MEETLXQZ = 'GET_MEETLXQZ';

function get_meetlxqz(date) {
    return {
        type: GET_MEETLXQZ,
        err:date.err,
        errMsg:date.errMsg,
        meetxqlistz:date.rows
    }
}

export function getmeetlxqz(userName,token,meetChat){
    return function(dispatch) {
        fetch(HTTPED+'api/meetRequs/?userName='+userName+'&token='+token+'&servType=2&meetChat='+meetChat,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_meetlxqz(date));
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

//会议需求列表 特种服务
export const GET_MEETLXQT = 'GET_MEETLXQT';

function get_meetlxqt(date) {
    return {
        type: GET_MEETLXQT,
        err:date.err,
        errMsg:date.errMsg,
        meetxqlistt:date.rows
    }
}

export function getmeetlxqt(userName,token,meetChat){
    return function(dispatch) {
        fetch(HTTPED+'api/meetRequs/?userName='+userName+'&token='+token+'&servType=3&meetChat='+meetChat,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_meetlxqt(date));
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
