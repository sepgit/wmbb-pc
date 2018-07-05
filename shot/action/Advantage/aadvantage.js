/**
 * Created by Zing on 2016/8/16.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//获取运价优势服务
export const GET_YSFW = 'GET_YSFW';

function get_ysfw(date) {
  return {
    type: GET_YSFW,
    err:date.err,
    errMsg:date.errMsg,
    ysser:date.rows
  }
}

export function getysfw(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+'&servType=3&rowCount=0',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysfw(date));
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

//获取根据服务承运商
export const GET_YSCARRS = 'GET_YSCARRS';

function get_yscarrs(date) {
  return {
    type: GET_YSCARRS,
    err:date.err,
    errMsg:date.errMsg,
    yscarrs:date.rows
  }
}

export function getyscarrs(userName,token,serv){
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
            dispatch(get_yscarrs(date));
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


//获取用户详情
export const GET_YSUSERS = 'GET_YSUSERS';

function get_ysusers(date) {
  return {
    type: GET_YSUSERS,
    err:date.err,
    errMsg:date.errMsg,
    ysusers:date.user
  }
}

export function getysusers(userName,token,userid){
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
            dispatch(get_ysusers(date));
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

//新建（优势）
export const GET_YSXINJIAN = 'GET_YSXINJIAN';

function post_ysnew(date,isshow) {
  return {
    type: GET_YSXINJIAN,
    err:date.err,
    errMsg:date.errMsg,
    advaid:date.adva,
    isshow:isshow
  }
}

export function postysnew(userName,token,serv,carr,depaPort,destPort,user,isDepa,isDest,booking,freight,qing,shipSpace,labe,inLabe){
  return function(dispatch) {
    let str='';
    if(isDepa){
      str="&isDepa="+isDepa;
    }else{
      str="&isDest="+isDest;
    }
    fetch(HTTPED+'api/advas/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&carr="+carr+"&depaPort="+depaPort+"&destPort="+destPort+"&user="+user+"&booking="+booking+"&freight="+freight+"&qing="+qing+"&shipSpace="+shipSpace+"&labe="+labe+"&inLabe="+inLabe+str
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_ysnew(date,false));
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

//获取公司用户（发布人）
export const GET_YSFBR = 'GET_YSFBR';

function get_ysfbr(date) {
  return {
    type: GET_YSFBR,
    err:date.err,
    errMsg:date.errMsg,
    ysfbr:date.rows
  }
}

export function getysfbr(userName,token,user,comp){
  let str='';
  if(comp>0){
    str='&comp='+comp;
  }else{
    str='&user='+user;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/wmbbusers/?userName='+userName+'&token='+token+'&rowCount=0'+str,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysfbr(date));
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

//初始化运价优势列表
export const GET_YSLISTC = 'GET_YSLISTC';

function get_yslistc(date) {
  return {
    type: GET_YSLISTC,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    yslists:date.rows,
    vipCount:date.vipCount,
    platCount:date.platCount,
    pushCount:date.pushCount,
    allVipCount:date.allVipCount
  }
}

export function getyslistc(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/advas/?userName='+userName+'&token='+token+'&rowCount=10',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yslistc(date));
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

//搜索运价优势列表
export const GET_YSLISTALL = 'GET_YSLISTALL';

function get_yslist(date) {
  return {
    type: GET_YSLISTALL,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    yslists:date.rows,
    vipCount:date.vipCount,
    platCount:date.platCount,
    pushCount:date.pushCount,
    allVipCount:date.allVipCount
  }
}

export function getyslist(userName,token,pageIndex,serv,carr,depaPort,destPort,creator,user,enab,booking,freight,qing,shipSpace){
  return function(dispatch) {
    let str='';
    if(enab!=''&&enab!=2){
      str="&enab="+enab;
    }
    fetch(HTTPED+'api/advas/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&serv="+serv+"&carr="+carr+"&depaPort="+depaPort+"&destPort="+destPort+"&creator="+creator+"&user="+user+"&booking="+booking+"&freight="+freight+"&qing="+qing+"&shipSpace="+shipSpace+str,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yslist(date));
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
export const GET_YSLISTGD = 'GET_YSLISTGD';

function get_yslistgd(date) {
  return {
    type: GET_YSLISTGD,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    yslists:date.rows,
    vipCount:date.vipCount,
    platCount:date.platCount,
    pushCount:date.pushCount,
    allVipCount:date.allVipCount
  }
}

export function getyslistgd(userName,token,pageIndex,serv,carr,depaPort,destPort,creator,user,enab,booking,freight,qing,shipSpace){
  return function(dispatch) {
    let str='';
    if(enab!=''&&enab!=2){
      str="&enab="+enab;
    }
    fetch(HTTPED+'api/advas/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&serv="+serv+"&carr="+carr+"&depaPort="+depaPort+"&destPort="+destPort+"&creator="+creator+"&user="+user+"&booking="+booking+"&freight="+freight+"&qing="+qing+"&shipSpace="+shipSpace+str,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yslistgd(date));
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

//获取优势详情
export const GET_YSDETL = 'GET_YSDETL';

function get_ysxq(date) {
  return {
    type: GET_YSDETL,
    err:date.err,
    errMsg:date.errMsg,
    ysdetl:date.adva
  }
}

export function getysxq(userName,token,advaid){
  return function(dispatch) {
    fetch(HTTPED+'api/advas/'+advaid+'/?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysxq(date));
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

//运价优势状态修改
export const GET_YSZTGB = 'GET_YSZTGB';

function put_ysztbg(date,isc) {
  return {
    type: GET_YSZTGB,
    err:date.err,
    errMsg:date.errMsg,
    advaid:date.adva,
    isc:isc
  }
}

export function putysztbg(userName,token,advaid,labe,booking,freight,qing,shipSpace,enab,inLabe){
  return function(dispatch) {
    fetch(HTTPED+'api/advas/'+advaid+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&labe="+labe+"&booking="+booking+"&freight="+freight+"&qing="+qing+"&shipSpace="+shipSpace+"&enab="+enab+"&inLabe="+inLabe
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_ysztbg(date,false));
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

//获取常用承运商
export const GET_YSCARRSCY = 'GET_YSCARRSCY';

function get_yscarrscy(date) {
  return {
    type: GET_YSCARRSCY,
    err:date.err,
    errMsg:date.errMsg,
    carrscy:date.rows
  }
}

export function getyscarrscy(userName,token,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/carrs/?userName='+userName+'&token='+token+'&rowCount=0&hot=true&serv='+serv,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yscarrscy(date));
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

//获取所有承运商
export const GET_YSCARRSALL = 'GET_YSCARRSALL';

function get_yscarrsall(date) {
  return {
    type: GET_YSCARRSALL,
    err:date.err,
    errMsg:date.errMsg,
    yscarrsall:date.rows
  }
}

export function getyscarrsall(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/carrs/?userName='+userName+'&token='+token+'&rowCount=0',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yscarrsall(date));
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

//修改运价优势标注4项详情
export const GET_YSBZ = 'GET_YSBZ';

function put_ysbz(date) {
  return {
    type: GET_YSBZ,
    err:date.err,
    errMsg:date.errMsg,
    advabzid:date.adva
  }
}

export function putysbz(userName,token,advaid,labe,booking,freight,qing,shipSpace,enab,inLabe){
  return function(dispatch) {
    fetch(HTTPED+'api/advas/'+advaid+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&labe="+labe+"&booking="+booking+"&freight="+freight+"&qing="+qing+"&shipSpace="+shipSpace+"&enab="+enab+"&inLabe="+inLabe
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_ysbz(date));
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


//获取所有港口
export const GET_YJPORTSYS = 'GET_YJPORTSYS';

function get_portsyjys(date) {
  return {
    type: GET_YJPORTSYS,
    err:date.err,
    errMsg:date.errMsg,
    yjysports:date.rows
  }
}

export function getportsyjys(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_portsyjys(date));
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

//获取该服务港口
export const GET_YSGFWPORTSF = 'GET_YSGFWPORTSF';

function get_ysgfwportsf(date) {
  return {
    type: GET_YSGFWPORTSF,
    err:date.err,
    errMsg:date.errMsg,
    ysgfwportsf:date.rows
  }
}

export function getysgfwportsf(userName,token,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&serv='+serv,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysgfwportsf(date));
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

//获取港口起运地 不带服务 -------------------最近
export const GET_KANNOQ = 'GET_KANNOQ';

function get_kannoq(date) {
  return {
    type: GET_KANNOQ,
    err:date.err,
    errMsg:date.errMsg,
    kannoq:date.rows
  }
}

export function getkannoq(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&type=1&recent=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_kannoq(date));
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

//获取港口目的地 不带服务 -----------------最近
export const GET_KANNOM = 'GET_KANNOM';

function get_kannom(date) {
  return {
    type: GET_KANNOM,
    err:date.err,
    errMsg:date.errMsg,
    kannom:date.rows
  }
}

export function getkannom(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&type=2&recent=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_kannom(date));
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

//获取航线
export const GET_YSLINE = 'GET_YSLINE';

function get_ysline(date) {
  return {
    type: GET_YSLINE,
    err:date.err,
    errMsg:date.errMsg,
    ysline:date.rows
  }
}

export function getysline(userName,token,lineType){
  return function(dispatch) {
    fetch(HTTPED+'api/lines/?userName='+userName+'&token='+token+'&rowCount=0&lineType='+lineType,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysline(date));
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

//获取起运地港口 带航线 带服务
export const GET_YSPORTS = 'GET_YSPORTS';

function get_ysports(date) {
  return {
    type: GET_YSPORTS,
    err:date.err,
    errMsg:date.errMsg,
    ysports:date.rows
  }
}

export function getysports(userName,token,serv,line){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&serv='+serv+'&line='+line,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysports(date));
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

//获取目的地港口 带航线 带服务
export const GET_YSPORTSM = 'GET_YSPORTSM';

function get_ysportsm(date) {
  return {
    type: GET_YSPORTSM,
    err:date.err,
    errMsg:date.errMsg,
    ysportsm:date.rows
  }
}

export function getysportsm(userName,token,serv,line){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&serv='+serv+'&line='+line,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysportsm(date));
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

//获取目的地港口 带航线 带服务-----------最近
export const GET_HXPORTSMZJ = 'GET_HXPORTSMZJ';

function get_hxportszjm(date) {
  return {
    type: GET_HXPORTSMZJ,
    err:date.err,
    errMsg:date.errMsg,
    hxportszjm:date.rows
  }
}

export function gethxportszjms(userName,token,serv,line){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&type=2&recent=true&serv='+serv+'&line='+line,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hxportszjm(date));
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

//获取起运地地港口 带航线 带服务---------最近
export const GET_HXPORTSZJ = 'GET_HXPORTSZJ';

function get_hxportszj(date) {
  return {
    type: GET_HXPORTSZJ,
    err:date.err,
    errMsg:date.errMsg,
    hxportszj:date.rows
  }
}

export function gethxportszjs(userName,token,serv,line){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&type=1&recent=true&serv='+serv+'&line='+line,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hxportszj(date));
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

//获取港口起运地 带服务-----------------最近
export const GET_YSQPORTSZJ = 'GET_YSQPORTSZJ';

function get_ysqportszj(date) {
  return {
    type: GET_YSQPORTSZJ,
    err:date.err,
    errMsg:date.errMsg,
    ysqportszj:date.rows
  }
}

export function getysqportszj(userName,token,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&type=1&recent=true&serv='+serv,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysqportszj(date));
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

//获取港口目的地 带服务-------------------最近
export const GET_YSMPORTSZJM = 'GET_YSMPORTSZJM';

function get_ysmportszjm(date) {
  return {
    type: GET_YSMPORTSZJM,
    err:date.err,
    errMsg:date.errMsg,
    ysmportszjm:date.rows
  }
}

export function getysmportszjm(userName,token,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&type=2&recent=true&serv='+serv,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysmportszjm(date));
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

//获取港口  带服务----------热门
export const GET_HOTPO = 'GET_HOTPO';

function get_hotpo(date) {
  return {
    type: GET_HOTPO,
    err:date.err,
    errMsg:date.errMsg,
    hotpo:date.rows
  }
}

export function gethotpo(userName,token,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&hot=true&serv='+serv,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hotpo(date));
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

//获取港口  带服务 带航线----------热门
export const GET_HOTPOL = 'GET_HOTPOL';

function get_hotpol(date) {
  return {
    type: GET_HOTPOL,
    err:date.err,
    errMsg:date.errMsg,
    hotpol:date.rows
  }
}

export function gethotpol(userName,token,serv,line){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&hot=true&serv='+serv+'&line='+line,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hotpol(date));
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

//批量修改
export const GET_PLXG = 'GET_PLXG';

function put_plxg(date) {
  return {
    type: GET_PLXG,
    err:date.err,
    errMsg:date.errMsg
  }
}

export function putplxg(userName,token,advas,labe,booking,freight,qing,shipSpace,inLabe){
  return function(dispatch) {
    fetch(HTTPED+'api/advas/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&advas="+advas+"&labe="+labe+"&booking="+booking+"&freight="+freight+"&qing="+qing+"&shipSpace="+shipSpace+'&inLabe='+inLabe
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_plxg(date));
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

//批量修改启用
export const GET_PLXGJQ = 'GET_PLXGJQ';

function put_plxgjq(date) {
  return {
    type: GET_PLXGJQ,
    err:date.err,
    errMsg:date.errMsg
  }
}

export function putplxgjq(userName,token,advas,enab){
  return function(dispatch) {
    fetch(HTTPED+'api/advas/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&chgStat=true&advas="+advas+"&enab="+enab
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_plxgjq(date));
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

//获取起运地 根据服务 名称
export const GET_QYDYJ = 'GET_QYDYJ';

function get_qydyj(date) {
  return {
    type: GET_QYDYJ,
    err:date.err,
    errMsg:date.errMsg,
    qydyj:date.rows
  }
}

export function getqydyj(userName,token,serv,name){
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
            dispatch(get_qydyj(date));
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
export const GET_MDDYJ = 'GET_MDDYJ';

function get_mddyj(date) {
  return {
    type: GET_MDDYJ,
    err:date.err,
    errMsg:date.errMsg,
    mddyj:date.rows
  }
}

export function getmddyj(userName,token,serv,name){
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
            dispatch(get_mddyj(date));
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

//添加VIP展示
export const PUT_VIPZS = 'PUT_VIPZS';

function put_vipzs(date) {
  return {
    type: PUT_VIPZS,
    err:date.err,
    errMsg:date.errMsg,
    advazs:date.adva
  }
}

export function putvipzs(userName,token,adva){
  return function(dispatch) {
    fetch(HTTPED+'api/advas/'+adva+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&addToVip=true"
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_vipzs(date,false));
            message.success('展示成功');
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