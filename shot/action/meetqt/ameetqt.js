/**
 * Created by Zing on 2017/3/22.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//会议洽谈列表
export const GET_MEETQT = 'GET_MEETQT';

function get_meetqt(date) {
    return {
        type: GET_MEETQT,
        err:date.err,
        errMsg:date.errMsg,
        meetqtlist:date.rows
    }
}

export function getmeetqt(userName,token,meet){
    return function(dispatch) {
        fetch(HTTPED+'api/meetChats/?userName='+userName+'&token='+token+'&meet='+meet,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_meetqt(date));
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

//会议约谈
export const POST_MCT = 'POST_MCT';

function post_mct(date) {
    return {
        type: POST_MCT,
        err:date.err,
        errMsg:date.errMsg,
        meetChat:date.meetChat
    }
}

export function postmct(userName,token,meetChat,msci,meetid){
    return function(dispatch) {
        fetch(HTTPED+'api/meetChats/',{
            method: "post",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body:"userName="+userName+"&token="+token+"&meetChat="+meetChat+"&msci="+msci
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(post_mct(date));
                        message.success('约谈成功');
                        fetch(HTTPED+'api/meetChats/?userName='+userName+'&token='+token+'&meet='+meetid,{
                            method: "get",
                            headers: {
                                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                            }
                        }).then(function(res){
                            if(res.ok){
                                res.json().then(function(date){
                                    if(!date.err){
                                        dispatch(get_meetqt(date));
                                    }else{
                                        Backlogin(date.errMsg)
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

//获取个人信息（用户详情）
export const GET_PINFO = 'GET_PINFO';

function get_pinfo(date) {
    return {
        type: GET_PINFO,
        err:date.err,
        errMsg:date.errMsg,
        pinfo:date.user
    }
}

export function getpinfo(userName,token,userid){
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
                        dispatch(get_pinfo(date));
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