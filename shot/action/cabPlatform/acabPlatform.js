/**
 * Created by Chen on 2017/12/05.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import {message} from 'antd';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'

//获取服务类型
export const GET_FWLX = 'GET_FWLX';

function get_fwlx(date) {
  return {
    type: GET_FWLX,
    err:date.err,
    errMsg:date.errMsg,
    fwlxary:date.rows
  }
}

export function getfwlx(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+"&rowCount=0&servType=1",{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_fwlx(date));
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

//获取港口
export const GET_KOUAN = 'GET_KOUAN';

function get_kouan(date) {
  return {
    type: GET_KOUAN,
    err:date.err,
    errMsg:date.errMsg,
    kouary:date.rows
  }
}

export function getkouan(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+"&rowCount=0",{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_kouan(date));
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

//获取起运地 根据服务 名称
export const GET_QYDKA = 'GET_QYDKA';

function get_qydka(date) {
  return {
    type: GET_QYDKA,
    err:date.err,
    errMsg:date.errMsg,
    qydka:date.rows
  }
}

export function getqydka(userName,token,serv,name){
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
            dispatch(get_qydka(date));
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

//获取目的地 根据服务 名称
export const GET_MDDKA = 'GET_MDDKA';

function get_mddka(date) {
  return {
    type: GET_MDDKA,
    err:date.err,
    errMsg:date.errMsg,
    mddka:date.rows
  }
}

export function getmddka(userName,token,serv,name){
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
            dispatch(get_mddka(date));
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

//获取承运商
export const GET_CARRSP = 'GET_CARRSP';

function get_carrsp(date) {
  return {
    type: GET_CARRSP,
    err:date.err,
    errMsg:date.errMsg,
    carrsp:date.rows
  }
}

export function getcarrsp(userName,token,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/carrs/?userName='+userName+'&token='+token+'&rowCount=0&serv='+serv,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_carrsp(date));
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

//搜索平台舱位列表
export const GET_CABDISPS = 'GET_CABDISPS';

function get_cabDisps(date) {
  return {
    type: GET_CABDISPS,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    cabDispsList:date.rows
  }
}

export function getcabDisps(userName,token,pageIndex,serv,depaPort,destPort,carr,resAcco){
  return function(dispatch) {
    let path= HTTPED+'api/cabDisps/?userName='+userName+'&token='+token+'&rowCount=10&listType=1';  //1看别人的；2看自己发布未成交；3看自己发布已成交；4看购买。
    if (pageIndex>0){
      path = path + '&pageIndex='+pageIndex;
    }
    if (serv>0&&serv!=''){
      path = path + '&serv='+serv;
    }
    if (depaPort>0&&depaPort!=''){
      path = path + '&depaPort='+depaPort;
    }
    if (destPort>0&&destPort!=''){
      path = path + '&destPort='+destPort;
    }
    if (carr>0&&carr!=''){
      path = path + '&carr='+carr;
    }
    if (resAcco!=''){
      path = path + '&resAcco='+resAcco;
    }

    fetch(path,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_cabDisps(date));
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

//获取详情
export const GET_CABDISP = 'GET_CABDISP';

function get_cabDisp(date) {
  return {
    type: GET_CABDISP,
    err:date.err,
    errMsg:date.errMsg,
    cabDispdetail:date.cabDisp
  }
}

export function getcabDisp(userName,token,cabDisp){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDisps/'+cabDisp+'/?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_cabDisp(date));
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

//购买舱位
export const PUT_CABDISPSBUY = 'PUT_CABDISPSBUY';

function put_cabDispsbuy(date) {
  return {
    type: PUT_CABDISPSBUY,
    err:date.err,
    errMsg:date.errMsg,
    cabDispID:date.cabDisp
  }
}

export function putcabDispsbuy(userName,token,cabDisp,inldType){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDisps/buy/'+cabDisp+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&inldType="+inldType
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(put_cabDispsbuy(date));
            message.success("购买成功！");
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

//获取余额
export const GET_CABDEPOS = 'GET_CABDEPOS';

function get_cabDepos(date) {
  return {
    type: GET_CABDEPOS,
    err:date.err,
    errMsg:date.errMsg,
    residual:date.residual,
    resiUsd:date.resiUsd
  }
}

export function getcabDepos(userName,token,user){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDepos/?userName='+userName+'&token='+token+'&resi=ture'+'&user='+user,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_cabDepos(date));
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

//获取内陆方式服务类型
export const GET_NLFWLX = 'GET_NLFWLX';

function get_nlfwlx(date) {
  return {
    type: GET_NLFWLX,
    err:date.err,
    errMsg:date.errMsg,
    nlfw:date.rows
  }
}

export function getnlfwlx(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+"&rowCount=0&servType=7",{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_nlfwlx(date));
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