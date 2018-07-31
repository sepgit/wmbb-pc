/*
 * @Author: sepgit 
 * @Date: 2018-07-11 10:15:13 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-07-18 13:01:06
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//服务列表 加载
export const GET_SERLISTS = 'GET_SERLISTS';

function get_serlists(date) {
  return {
    type: GET_SERLISTS,
    err:date.err,
    errMsg:date.errMsg,
    serRowCounts:date.rowCount,
    serLists:date.rows
  }
}

 export function getserlists(userName,token,listType){
  return function(dispatch) {
    fetch(HTTPED+'api/servGuars/?userName='+userName+'&token='+token+'&rowCount=5&pageIndex=1&listType='+listType,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_serlists(date));
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