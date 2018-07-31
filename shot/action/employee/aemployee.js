/**
 * Created by Zing on 2016/8/22.
 */
import 'fetch-detector';
import 'fetch-ie8';
import md5 from 'md5';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//新建员工
export const GET_EMXJ = 'GET_EMXJ';

function get_emxj(date,isfs) {
  return {
    type: GET_EMXJ,
    err:date.err,
    errMsg:date.errMsg,
    userid:date.user,
    isfs:isfs
  }
}

export function getemxj(userName,token,userAcco,comp,name,posi,mobi,phon,fax,mail,addr){
  return function(dispatch) {
    fetch(HTTPED+'api/wmbbusers/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&userAcco="+userAcco+"&comp="+comp+"&name="+name+"&posi="+posi+"&mobi="+mobi+"&phon="+phon+"&fax="+fax+"&mail="+mail+"&addr="+addr+"&password="+md5('111111').toUpperCase()
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_emxj(date,false));
            message.success('新建成功');
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

//初始化列表
export const GET_EMCS = 'GET_EMCS';

function get_emcs(date) {
  return {
    type: GET_EMCS,
    err:date.err,
    errMsg:date.errMsg,
    uerlist:date.rows,
    staffNum:date.staffNum
  }
}

export function getemcs(userName,token,comp){
  return function(dispatch) {
    fetch(HTTPED+'api/wmbbusers/?userName='+userName+'&token='+token+'&rowCount=10&comp='+comp,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_emcs(date));
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


//滚动加载
export const GET_EMGD = 'GET_EMGD';

function get_emgd(date) {
  return {
    type: GET_EMGD,
    err:date.err,
    errMsg:date.errMsg,
    uerlist:date.rows,
    staffNum:date.staffNum
  }
}

export function getemgd(userName,token,pageIndex,comp){
  return function(dispatch) {
    fetch(HTTPED+'api/wmbbusers/?userName='+userName+'&token='+token+'&rowCount=10&pageIndex='+pageIndex+'&comp='+comp,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_emgd(date));
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

//加载详情
export const GET_EMDEL = 'GET_EMDEL';

function get_emdel(date) {
  return {
    type: GET_EMDEL,
    err:date.err,
    errMsg:date.errMsg,
    userdx:date.user
  }
}

export function getemdel(userName,token,userid){
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
            dispatch(get_emdel(date));
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

//加载权限
export const GET_EMQX = 'GET_EMQX';

function get_emqx(date) {
  return {
    type: GET_EMQX,
    err:date.err,
    errMsg:date.errMsg,
    privqx:date.priv
  }
}

export function getemqx(userName,token,userid){
  return function(dispatch) {
    fetch(HTTPED+'api/wmbbusers/'+userid+'/?userName='+userName+'&token='+token+'&priv=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_emqx(date));
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

//修改用户离职
export const PUT_EMLZ = 'PUT_EMLZ';

function put_emlz(date,upis) {
  return {
    type: PUT_EMLZ,
    err:date.err,
    errMsg:date.errMsg,
    userlzid:date.user,
    upis:upis
  }
}

export function putemlz(userName,token,userid){
  return function(dispatch) {
    fetch(HTTPED+'api/wmbbusers/'+userid+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&leav=true"
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_emlz(date,false));
            message.success('修改成功');
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

//修改用户及员工权限
export const PUT_EMUSE = 'PUT_EMUSE';

function put_emuse(date,upis) {
  return {
    type: PUT_EMUSE,
    err:date.err,
    errMsg:date.errMsg,
    userxgid:date.user,
    upisxg:upis
  }
}

export function putemuse(userName,token,userid,name,posi,phon,fax,mail,adva,cont,prov,paym,cash,freiMngr){
  return function(dispatch) {
    fetch(HTTPED+'api/wmbbusers/'+userid+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&priv=true&name="+name+"&posi="+posi+"&phon="+phon+"&fax="+fax+"&mail="+mail+"&adva="+adva+"&cont="+cont+"&prov="+prov+"&paym="+paym+"&cash="+cash+"&freiMngr="+freiMngr
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_emuse(date,false));
            message.success('修改成功');
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