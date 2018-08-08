/*
 * @Author: sepgit 
 * @Date: 2018-08-01 11:24:57 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-08-06 09:53:31
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
    console.log(date);
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
    console.log(date);
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

//总的加载
export const GET_ALLMYREL = 'GET_ALLMYREL';

function get_allmyrel(date) {
  return {
    type: GET_ALLMYREL,
    err:date.err,
    errMsg:date.errMsg,
    allmyrel:date.rows
  }
}

 export function getallmyrel(userName,token,comp){
  return function(dispatch) {
    fetch(HTTPED+'api/prebatch/?userName='+userName+'&token='+token+'&comp='+comp,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_allmyrel(date));
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