/**
 * Created by Zing on 2016/8/12.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//获取联系人
export const GET_LIANXIR = 'GET_LIANXIR';

function get_lianxir(date) {
  return {
    type: GET_LIANXIR,
    err:date.err,
    errMsg:date.errMsg,
    lianuser:date.rows[0]
  }
}

export function getlianxir(userName,token,userAcco){
  return function(dispatch) {
    fetch(HTTPED+'api/users/?userName='+userName+'&token='+token+"&rowCount=0&userAcco="+userAcco,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            if(date.rows.length>0){
              dispatch(get_lianxir(date));
            }else{
              message.error("无该联系人，请输入正确的联系人账号！");
            }
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}

//获取服务
export const GET_GYSSER = 'GET_GYSSER';

function get_gysser(date) {
  return {
    type: GET_GYSSER,
    err:date.err,
    errMsg:date.errMsg,
    gysser:date.rows
  }
}

export function getgysser(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+'&rowCount=0&servType=6',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_gysser(date));
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

//获取具体服务
export const GET_GYSJTSER = 'GET_GYSJTSER';

function get_gysjtser(date) {
  return {
    type: GET_GYSJTSER,
    err:date.err,
    errMsg:date.errMsg,
    gyjtsser:date.rows
  }
}

export function getgysjtser(userName,token,fwid){
  return function(dispatch) {
    fetch(HTTPED+'api/servOptis/?userName='+userName+'&token='+token+'&rowCount=0&serv='+fwid,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_gysjtser(date));
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

//获取口岸
export const GET_GYSHFKA = 'GET_GYSHFKA';

function get_gyshfka(date) {
  return {
    type: GET_GYSHFKA,
    err:date.err,
    errMsg:date.errMsg,
    gyskan:date.rows
  }
}

export function getgyshfka(userName,token,sevr){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+"&rowCount=0&serv="+sevr,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_gyshfka(date));
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

//新建供应商
export const GET_GYSNEW = 'GET_GYSNEW';

function post_gysnew(date,isshow) {
  return {
    type: GET_GYSNEW,
    err:date.err,
    errMsg:date.errMsg,
    provid:date.prov,
    acco:date.acco,
    isshow:isshow
  }
}

export function postgysnew(userName,token,serv,servOpti,port,cont,labe){
  return function(dispatch) {
    fetch(HTTPED+'api/provs/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&servOpti="+servOpti+"&port="+port+"&cont="+cont+"&labe="+labe
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_gysnew(date,false));
            message.success('添加成功');
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

//初始化供应商列表
export const GET_GYSLISTC = 'GET_GYSLISTC';

function get_gyslistc(date) {
  return {
    type: GET_GYSLISTC,
    err:date.err,
    errMsg:date.errMsg,
    gyslist:date.rows
  }
}

export function getgyslistc(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/provs/?userName='+userName+'&token='+token+'&rowCount=10',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_gyslistc(date));
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

//搜索供应商列表
export const GET_GYSLISTALL = 'GET_GYSLISTALL';

function get_gyslist(date) {
  return {
    type: GET_GYSLISTALL,
    err:date.err,
    errMsg:date.errMsg,
    gyslist:date.rows
  }
}

export function getgyslist(userName,token,pageIndex,userAcco,mobi,serv,depaPort){
  return function(dispatch) {
    fetch(HTTPED+'api/provs/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&userAcco="+userAcco+"&mobi="+mobi+"&serv="+serv+"&depaPort="+depaPort,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_gyslist(date));
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
export const GET_GYSLISTGD = 'GET_GYSLISTGD';

function get_gyslistgd(date) {
  return {
    type: GET_GYSLISTGD,
    err:date.err,
    errMsg:date.errMsg,
    gyslist:date.rows
  }
}

export function getgyslistgd(userName,token,pageIndex,userAcco,mobi,serv,depaPort){
  return function(dispatch) {
    fetch(HTTPED+'api/provs/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&userAcco="+userAcco+"&mobi="+mobi+"&serv="+serv+"&depaPort="+depaPort,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_gyslistgd(date));
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

//删除供应商
export const GET_GYSDEL = 'GET_GYSDEL';

function del_gysdel(date,deisshow) {
  return {
    type: GET_GYSDEL,
    err:date.err,
    errMsg:date.errMsg,
    deisshow:deisshow
  }
}

export function delgysdel(userName,token,provid){
  return function(dispatch) {
    fetch(HTTPED+'api/provs/'+provid+'/',{
      method: "delete",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(del_gysdel(date,false));
            message.success('删除成功');
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


//获取供应商详情
export const GET_GYSDET = 'GET_GYSDET';

function get_gysdet(date) {
  return {
    type: GET_GYSDET,
    err:date.err,
    errMsg:date.errMsg,
    provdel:date.prov
  }
}

export function getgysdet(userName,token,provid){
  return function(dispatch) {
    fetch(HTTPED+'api/provs/'+provid+'/?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_gysdet(date));
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

//修改供应商
export const GET_GYSUPD = 'GET_GYSUPD';

function put_gysupd(date,upisshow) {
  return {
    type: GET_GYSUPD,
    err:date.err,
    errMsg:date.errMsg,
    upprovid:date.prov,
    upacco:date.acco,
    upisshow:upisshow
  }
}

export function putgysupd(userName,token,provid,labe,enab){
  return function(dispatch) {
    fetch(HTTPED+'api/provs/'+provid+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&labe="+labe+"&enab="+enab
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_gysupd(date,false));
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

//获取港口 根据服务 名称
export const GET_KANSU= 'GET_KANSU';

function get_kansu(date) {
  return {
    type: GET_KANSU,
    err:date.err,
    errMsg:date.errMsg,
    kansu:date.rows
  }
}

export function getkansu(userName,token,serv,name){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=10&serv='+serv+'&name='+name,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_kansu(date));
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

//企业列表模糊企业对象2数组。
export const GET_USERMH= 'GET_USERMH';

function get_usermh(date) {
  return {
    type: GET_USERMH,
    err:date.err,
    errMsg:date.errMsg,
    usermh:date.rows
  }
}

export function getusermh(userName,token,compAlia){
  return function(dispatch) {
    fetch(HTTPED+'api/comps/?userName='+userName+'&token='+token+'&isAlia=true&compAlia='+compAlia,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_usermh(date));
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

//根据企业id获取用户
export const GET_USERLB= 'GET_USERLB';

function get_userlb(date) {
  return {
    type: GET_USERLB,
    err:date.err,
    errMsg:date.errMsg,
    userlb:date.rows
  }
}

export function getuserlb(userName,token,comp){
  return function(dispatch) {
    fetch(HTTPED+'api/users/?userName='+userName+'&token='+token+'&rowCount=0&comp='+comp,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_userlb(date));
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

//最近供应商
export const GET_ZJUSR= 'GET_ZJUSR';

function get_zjusr(date) {
  return {
    type: GET_ZJUSR,
    err:date.err,
    errMsg:date.errMsg,
    zjusr:date.rows
  }
}

export function getzjusr(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/provs/?userName='+userName+'&token='+token+'&lateProv=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_zjusr(date));
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

//获取口岸 根据服务 名称
export const GET_KANSUP = 'GET_KANSUP';

function get_kansup(date) {
  return {
    type: GET_KANSUP,
    err:date.err,
    errMsg:date.errMsg,
    kansup:date.rows
  }
}

export function getkansup(userName,token,serv,name){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=10&serv='+serv+'&name='+name,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_kansup(date));
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
