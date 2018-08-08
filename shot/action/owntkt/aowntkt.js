/*
 * @Author: sepgit 
 * @Date: 2018-07-11 10:15:13 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-08-03 11:23:46
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//服务列表 加载
export const GET_OWNTKT = 'GET_OWNTKT';

function get_owntkt(date) {
  return {
    type: GET_OWNTKT,
    err:date.err,
    errMsg:date.errMsg,
    // tktRowCounts:date.rowCount,
    owntktLists:date.rows
  }
}

 export function getowntkt(userName,token,Cuser){
  return function(dispatch) {
    fetch(HTTPED+'api/predetail/?userName='+userName+'&token='+token+'&Cuser='+Cuser,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_owntkt(date));
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

export const GET_OWNTKTDETAIL = 'GET_OWNTKTDETAIL';

function get_owntktdetail(date) {
  return {
    type: GET_OWNTKTDETAIL,
    err:date.err,
    errMsg:date.errMsg,
    // tktRowCounts:date.rowCount,
    owntktDetail:date.predetail
  }
}

 export function getowntktdetail(userName,token,prebatch){
  return function(dispatch) {
    fetch(HTTPED+'api/predetail/'+prebatch+'/?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_owntktdetail(date));
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

//修改优惠卷 状态
export const GET_USETKTS = 'GET_USETKTS';

function get_usetkts(date) {
  console.log(date)
  return {
    type: GET_USETKTS,
    err:date.err,
    errMsg:date.errMsg,
    // tktRowCounts:date.rowCount,
    userID:date.predetail,

  }
}

 export function getusetkts(userName,token,predetail,stat,bill){
  return function(dispatch) {
    fetch(HTTPED+'api/predetail/'+predetail+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+'&stat='+stat+'&bill='+bill
    }).then(function(res){
      
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_usetkts(date));
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

//寻找用户
export const GET_FINDUSER = 'GET_FINDUSER';

function get_finduser(date) {
  return {
    type: GET_FINDUSER,
    err:date.err,
    errMsg:date.errMsg,
    alluserNum:date.staffNum,
    alluser:date.rows
  }
}

 export function getfinduser(userName,token,name){
  return function(dispatch) {
    fetch(HTTPED+'api/wmbbusers/?userName='+userName+'&token='+token+'&name='+name,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_finduser(date));
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

//转发
export const GET_GIVEUSER = 'GET_GIVEUSER';

function get_giveuser(date) {
  console.log(date)
  return {
    type: GET_GIVEUSER,
    err:date.err,
    errMsg:date.errMsg,
    // tktRowCounts:date.rowCount,
    userID:date.predetail,

  }
}

 export function getgiveuser(userName,token,predetail,Cuser){
  return function(dispatch) {
    fetch(HTTPED+'api/predetail/'+predetail+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+'&Cuser='+Cuser
    }).then(function(res){
      
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_giveuser(date));
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