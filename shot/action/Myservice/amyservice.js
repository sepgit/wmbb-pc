/*
 * @Author: sepgit 
 * @Date: 2018-07-11 10:15:13 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-07-11 10:15:34
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//
export const GET_KYYE = 'GET_KYYE';

function get_gyye(date) {
  return {
    type: GET_KYYE,
    err:date.err,
    errMsg:date.errMsg,
    residual:date.residual,
    resiUsd:date.resiUsd
  }
}
//之上 的就是一个  Action   type  就是action 的名字 携带的信息 就是 下面的几个内容
 export function getgyye(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDepos/?userName='+userName+'&token='+token+'&resi=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_gyye(date));
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