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

//会议列表
export const GET_MEET = 'GET_MEET';

function get_meet(date) {
    return {
        type: GET_MEET,
        err:date.err,
        errMsg:date.errMsg,
        meetslist:date.rows
    }
}

export function getmeet(userName,token){
    return function(dispatch) {
        fetch(HTTPED+'api/meets/?userName='+userName+'&token='+token,{
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(get_meet(date));
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

//会议报名
export const POST_MEETBM = 'POST_MEETBM';

function post_meetbm(date) {
    return {
        type: POST_MEETBM,
        err:date.err,
        errMsg:date.errMsg,
        meetChat:date.meetChat
    }
}

export function postmeetbm(userName,token,meet){
    return function(dispatch) {
        fetch(HTTPED+'api/meets/',{
            method: "post",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body:"userName="+userName+"&token="+token+"&meet="+meet
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(post_meetbm(date));
                        message.success('报名成功');
                        fetch(HTTPED+'api/meets/?userName='+userName+'&token='+token,{
                            method: "get",
                            headers: {
                                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                            }
                        }).then(function(res){
                            if(res.ok){
                                res.json().then(function(date){
                                    if(!date.err){
                                        dispatch(get_meet(date));
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

//会议缺席
export const PUT_MEETQX = 'PUT_MEETQX';

function put_meetqx(date) {
    return {
        type: PUT_MEETQX,
        err:date.err
    }
}

export function putmeetqx(userName,token,meet){
    return function(dispatch) {
        fetch(HTTPED+'api/meets/'+meet+'/',{
            method: "put",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body:"userName="+userName+"&token="+token
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(put_meetqx(date));
                        message.success('退出会议成功！');
                        fetch(HTTPED+'api/meets/?userName='+userName+'&token='+token,{
                            method: "get",
                            headers: {
                                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                            }
                        }).then(function(res){
                            if(res.ok){
                                res.json().then(function(date){
                                    if(!date.err){
                                        dispatch(get_meet(date));
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