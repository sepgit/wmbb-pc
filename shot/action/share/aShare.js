/*
 * @Author: sepgit 
 * @Date: 2018-07-19 14:21:08 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-07-19 14:59:50
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';
//获得服务列表
export const GET_SERLISTS = 'GET_SERLISTS';

function get_SerLists(date) {
  return {
    type: GET_SERLISTS,
    err:date.err,
    errMsg:date.errMsg,
    serLists:date.rows
  }
}

export function getSerLists(userName,token,servType){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+"&rowCount=0&servType="+servType,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_SerLists(date));
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