/*
 * @Author: sepgit 
 * @Date: 2018-07-11 10:15:13 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-08-03 10:01:46
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//服务列表 加载
export const GET_TKTLISTS = 'GET_TKTLISTS';

function get_tktlists(date) {
  return {
    type: GET_TKTLISTS,
    err:date.err,
    errMsg:date.errMsg,
    tktRowCounts:date.rowCount,
    tktLists:date.rows
  }
}

 export function gettktlists(userName,token,comp){
  return function(dispatch) {
    fetch(HTTPED+'api/prebatch/?userName='+userName+'&token='+token+'&comp='+comp+'&preTimeFrom='+'&preTimeTo=',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_tktlists(date));
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
//卡券批次详情
export const GET_TKTLISTSPRE = 'GET_TKTLISTSPRE';

function get_tktlistspre(date) {
  return {
    type: GET_TKTLISTSPRE,
    err:date.err,
    errMsg:date.errMsg,
    tktListspre:date.prebatch
  }
}

 export function gettktlistspre(userName,token,prebatch){
  return function(dispatch) {
    fetch(HTTPED+'api/prebatch/'+prebatch+'/?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_tktlistspre(date));
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

//领取优惠卷
export const GET_GETTKTS = 'GET_GETTKTS';

function get_gettkts(date) {
  return {
    type: GET_GETTKTS,
    err:date.err,
    errMsg:date.errMsg,
    getID:date.prebatch
  }
}

 export function getgettkts(userName,token,Quser,prebatch){
  return function(dispatch) {
    fetch(HTTPED+'api/prebatch/'+prebatch+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&Quser="+Quser
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_gettkts(date));
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
