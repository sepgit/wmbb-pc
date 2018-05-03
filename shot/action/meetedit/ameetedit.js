/**
 * Created by Zing on 2017/4/1.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//会议需求列表 运价服务 编辑
export const GET_MBTXQ = 'GET_MBTXQ';

function get_mbtxq(date) {
  return {
    type: GET_MBTXQ,
    err:date.err,
    errMsg:date.errMsg,
    mbtxq:date.rows
  }
}

export function getmbtxq(userName,token,meetChat){
  return function(dispatch) {
    fetch(HTTPED+'api/meetRequs/?userName='+userName+'&token='+token+'&servType=1&meetChat='+meetChat,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_mbtxq(date));
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

//会议需求列表 咨询服务 编辑
export const GET_MBTXQZ = 'GET_MBTXQZ';

function get_mbtxqz(date) {
  return {
    type: GET_MBTXQZ,
    err:date.err,
    errMsg:date.errMsg,
    mbtxqz:date.rows
  }
}

export function getmbtxqz(userName,token,meetChat){
  return function(dispatch) {
    fetch(HTTPED+'api/meetRequs/?userName='+userName+'&token='+token+'&servType=2&meetChat='+meetChat,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_mbtxqz(date));
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

//会议需求列表 特种服务 编辑
export const GET_MBTXQT = 'GET_MBTXQT';

function get_mbtxqt(date) {
  return {
    type: GET_MBTXQT,
    err:date.err,
    errMsg:date.errMsg,
    mbtxqt:date.rows
  }
}

export function getmbtxqt(userName,token,meetChat){
  return function(dispatch) {
    fetch(HTTPED+'api/meetRequs/?userName='+userName+'&token='+token+'&servType=3&meetChat='+meetChat,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_mbtxqt(date));
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

//新建需求
export const POST_XJXQ = 'POST_XJXQ';

function post_xjxq(date) {
  return {
    type: POST_XJXQ,
    err:date.err,
    errMsg:date.errMsg,
    meetChat:date.meetChat
  }
}

export function postxjxq(userName,token,meetChat,serv,servOpti,port,depaPort,destPort,carr){
  return function(dispatch) {
    fetch(HTTPED+'api/meetRequs/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&meetChat="+meetChat+"&serv="+serv+"&servOpti="+servOpti+"&port="+port+"&depaPort="+depaPort+"&destPort="+destPort+"&carr="+carr
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_xjxq(date));
            message.success('新建成功');
            window.location.reload();
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

//根据索引获取服务
export const GET_MYJFW = 'GET_MYJFW';

function get_myjfw(date) {
  return {
    type: GET_MYJFW,
    err:date.err,
    errMsg:date.errMsg,
    myjfw:date.rows
  }
}

export function getmyjfw(userName,token,indtype){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+'&servType='+indtype+'&rowCount=0',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_myjfw(date));
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

//根据服务获取所有承运商
export const GET_CRA = 'GET_CRA';

function get_cra(date) {
  return {
    type: GET_CRA,
    err:date.err,
    errMsg:date.errMsg,
    cra:date.rows
  }
}

export function getcra(userName,token,serv){
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
            dispatch(get_cra(date));
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

//根据服务获取热门承运商
export const GET_CRAH = 'GET_CRAH';

function get_crah(date) {
  return {
    type: GET_CRAH,
    err:date.err,
    errMsg:date.errMsg,
    crah:date.rows
  }
}

export function getcrah(userName,token,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/carrs/?userName='+userName+'&token='+token+'&hot=true&rowCount=0&serv='+serv,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_crah(date));
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

//根据服务获取所有起运地
export const GET_QYDA = 'GET_QYDA';

function get_qyda(date) {
  return {
    type: GET_QYDA,
    err:date.err,
    errMsg:date.errMsg,
    qydsy:date.rows
  }
}

export function getqyda(userName,token,serv){
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
            dispatch(get_qyda(date));
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

//根据服务获取最近起运地
export const GET_QYDAZ = 'GET_QYDAZ';

function get_qydaz(date) {
  return {
    type: GET_QYDAZ,
    err:date.err,
    errMsg:date.errMsg,
    qydzj:date.rows
  }
}

export function getqydaz(userName,token,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&recent=true&type=1&serv='+serv,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_qydaz(date));
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

//根据服务获取所有目的地
export const GET_MDDA = 'GET_MDDA';

function get_mdda(date) {
  return {
    type: GET_MDDA,
    err:date.err,
    errMsg:date.errMsg,
    mddsy:date.rows
  }
}

export function getmdda(userName,token,serv){
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
            dispatch(get_mdda(date));
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

//根据服务获取最近目的地
export const GET_MDDAZ = 'GET_MDDAZ';

function get_mddaz(date) {
  return {
    type: GET_MDDAZ,
    err:date.err,
    errMsg:date.errMsg,
    mddzj:date.rows
  }
}

export function getmddaz(userName,token,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&recent=true&type=2&serv='+serv,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_mddaz(date));
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

//根据服务获取具体服务
export const GET_JTFW = 'GET_JTFW';

function get_jtfw(date) {
  return {
    type: GET_JTFW,
    err:date.err,
    errMsg:date.errMsg,
    mjtfw:date.rows
  }
}

export function getjtfw(userName,token,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/servOptis/?userName='+userName+'&token='+token+'&serv='+serv+'&rowCount=0',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_jtfw(date));
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

// 口岸
export const GET_MEDKAN = 'GET_MEDKAN';

function get_medkan(date) {
  return {
    type: GET_MEDKAN,
    err:date.err,
    errMsg:date.errMsg,
    kansy:date.rows
  }
}

export function getmedkan(userName,token,serv){
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
            dispatch(get_medkan(date));
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

// 最近口岸
export const GET_MEDKANZ = 'GET_MEDKANZ';

function get_medkanz(date) {
  return {
    type: GET_MEDKANZ,
    err:date.err,
    errMsg:date.errMsg,
    kanzj:date.rows
  }
}

export function getmedkanz(userName,token,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&recent=true&type=1&serv='+serv,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_medkanz(date));
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

//删除需求
export const DEL_MDEL = 'DEL_MDEL';

function del_mdel(date) {
  return {
    type: DEL_MDEL,
    err:date.err
  }
}

export function delmdel(userName,token,meetRequ){
  return function(dispatch) {
    fetch(HTTPED+'api/meetRequs/'+meetRequ+'/',{
      method: "delete",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(del_mdel(date));
            message.success('删除成功');
            window.location.reload();
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
export const GET_QYDM = 'GET_QYDM';

function get_qydm(date) {
  return {
    type: GET_QYDM,
    err:date.err,
    errMsg:date.errMsg,
    qydm:date.rows
  }
}

export function getqydm(userName,token,serv,name){
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
            dispatch(get_qydm(date));
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
export const GET_MDDM = 'GET_MDDM';

function get_mddm(date) {
  return {
    type: GET_MDDM,
    err:date.err,
    errMsg:date.errMsg,
    mddm:date.rows
  }
}

export function getmddm(userName,token,serv,name){
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
            dispatch(get_mddm(date));
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
export const GET_KANM = 'GET_KANM';

function get_kanm(date) {
  return {
    type: GET_KANM,
    err:date.err,
    errMsg:date.errMsg,
    kanm:date.rows
  }
}

export function getkanm(userName,token,serv,name){
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
            dispatch(get_kanm(date));
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