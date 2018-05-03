/**
 * Created by Zing on 2016/10/20.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//获取特种货运价优势服务
export const GET_YSPFW = 'GET_YSPFW';

function get_yspfw(date) {
  return {
    type: GET_YSPFW,
    err:date.err,
    errMsg:date.errMsg,
    ysper:date.rows
  }
}

export function getyspfw(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+'&servType=4&rowCount=0',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yspfw(date));
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
export const GET_YSPPORTS = 'GET_YSPPORTS';

function get_yspports(date) {
  return {
    type: GET_YSPPORTS,
    err:date.err,
    errMsg:date.errMsg,
    yspports:date.rows
  }
}

export function getyspports(userName,token,serv){
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
            dispatch(get_yspports(date));
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
export const GET_YSPPORTSA = 'GET_YSPPORTSA';

function get_yspportsa(date) {
  return {
    type: GET_YSPPORTSA,
    err:date.err,
    errMsg:date.errMsg,
    yspportsa:date.rows
  }
}

export function getyspportsa(userName,token){
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
            dispatch(get_yspportsa(date));
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

//获取公司用户（发布人）(接收人)
export const GET_YSPFBR = 'GET_YSPFBR';

function get_yspfbr(date) {
  return {
    type: GET_YSPFBR,
    err:date.err,
    errMsg:date.errMsg,
    yspfbr:date.rows
  }
}

export function getyspfbr(userName,token,user,comp){
  let str='';
  if(comp>0){
    str='&comp='+comp;
  }else{
    str='&user='+user;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/users/?userName='+userName+'&token='+token+'&rowCount=0'+str,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yspfbr(date));
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
export const GET_YSPUSERS = 'GET_YSPUSERS';

function get_yspusers(date) {
  return {
    type: GET_YSPUSERS,
    err:date.err,
    errMsg:date.errMsg,
    yspusers:date.user
  }
}

export function getyspusers(userName,token,userid){
  return function(dispatch) {
    fetch(HTTPED+'api/users/'+userid+'/?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yspusers(date));
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

//新建（特种货运价优势）
export const GET_YSPXINJIAN = 'GET_YSPXINJIAN';

function post_yspnew(date,isshow) {
  return {
    type: GET_YSPXINJIAN,
    err:date.err,
    errMsg:date.errMsg,
    advaid:date.adva,
    isshow:isshow
  }
}

export function postyspnew(userName,token,serv,depaPort,user,labe,inLabe){
  return function(dispatch) {
    fetch(HTTPED+'api/advas/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&depaPort="+depaPort+"&user="+user+"&isSpec=true&labe="+labe+"&inLabe="+inLabe
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_yspnew(date,false));
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

//初始化特种运价优势列表
export const GET_YSPLISTC = 'GET_YSPLISTC';

function get_ysplistc(date) {
  return {
    type: GET_YSPLISTC,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    ysplists:date.rows,
    vipCount:date.vipCount,
    platCount:date.platCount,
    pushCount:date.pushCount,
    allVipCount:date.allVipCount
  }
}

export function getysplistc(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/advas/?userName='+userName+'&token='+token+'&rowCount=10&advaType=1',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysplistc(date));
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
export const GET_YSPLISTALL = 'GET_YSPLISTALL';

function get_ysplist(date) {
  return {
    type: GET_YSPLISTALL,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    ysplists:date.rows,
    vipCount:date.vipCount,
    platCount:date.platCount,
    pushCount:date.pushCount,
    allVipCount:date.allVipCount
  }
}

export function getysplist(userName,token,pageIndex,serv,depaPort,creator,user,enab){
  return function(dispatch) {
    let str='';
    if(enab!=''&&enab!=2){
      str="&enab="+enab;
    }
    fetch(HTTPED+'api/advas/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&serv="+serv+"&depaPort="+depaPort+"&creator="+creator+"&user="+user+"&advaType=1"+str,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysplist(date));
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
export const GET_YSPLISTGD = 'GET_YSPLISTGD';

function get_ysplistgd(date) {
  return {
    type: GET_YSPLISTGD,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    ysplists:date.rows,
    vipCount:date.vipCount,
    platCount:date.platCount,
    pushCount:date.pushCount,
    allVipCount:date.allVipCount
  }
}

export function getysplistgd(userName,token,pageIndex,serv,depaPort,creator,user,enab){
  return function(dispatch) {
    let str='';
    if(enab!=''||enab!=2){
      str="&enab="+enab;
    }
    fetch(HTTPED+'api/advas/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&serv="+serv+"&depaPort="+depaPort+"&creator="+creator+"&user="+user+"&advaType=1"+str,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysplistgd(date));
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

//获取特种优势详情
export const GET_YSPDETL = 'GET_YSPDETL';

function get_yspxq(date) {
  return {
    type: GET_YSPDETL,
    err:date.err,
    errMsg:date.errMsg,
    yspdetl:date.adva
  }
}

export function getyspxq(userName,token,advaid){
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
            dispatch(get_yspxq(date));
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

//特种货运价优势状态修改
export const GET_YSPZTGB = 'GET_YSPZTGB';

function put_yspztbg(date,isc) {
  return {
    type: GET_YSPZTGB,
    err:date.err,
    errMsg:date.errMsg,
    advaid:date.adva,
    isc:isc
  }
}

export function putyspztbg(userName,token,advaid,enab,labe,inLabe){
  return function(dispatch) {
    fetch(HTTPED+'api/advas/'+advaid,{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&enab="+enab+"&labe="+labe+"&inLabe="+inLabe
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_yspztbg(date,false));
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

//获取最近港口起运地 带服务
export const GET_YSSPZJ = 'GET_YSSPZJ';

function get_ysspzj(date) {
  return {
    type: GET_YSSPZJ,
    err:date.err,
    errMsg:date.errMsg,
    ysspzj:date.rows
  }
}

export function getysspzj(userName,token,serv){
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
            dispatch(get_ysspzj(date));
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

//修改运价优势标注
export const GET_YSBZSP = 'GET_YSBZSP';

function put_ysbzsp(date) {
  return {
    type: GET_YSBZSP,
    err:date.err,
    errMsg:date.errMsg,
    advabzidsp:date.adva
  }
}

export function putysbzsp(userName,token,advaid,labe,inLabe,enab){
  return function(dispatch) {
    fetch(HTTPED+'api/advas/'+advaid+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&labe="+labe+"&inLabe="+inLabe+"&enab="+enab
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_ysbzsp(date));
            message.success('修改标注成功');
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

//获取最近口岸 不带服务
export const GET_KANNOQTZ = 'GET_KANNOQTZ';

function get_kannoqtz(date) {
  return {
    type: GET_KANNOQTZ,
    err:date.err,
    errMsg:date.errMsg,
    kannoqtz:date.rows
  }
}

export function getkannoqtz(userName,token){
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
            dispatch(get_kannoqtz(date));
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
export const GET_HOTPOSP = 'GET_HOTPOSP';

function get_hotposp(date) {
  return {
    type: GET_HOTPOSP,
    err:date.err,
    errMsg:date.errMsg,
    hotposp:date.rows
  }
}

export function gethotposp(userName,token,serv){
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
            dispatch(get_hotposp(date));
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
export const GET_PLXGSP = 'GET_PLXGSP';

function put_plxgsp(date) {
  return {
    type: GET_PLXGSP,
    err:date.err,
    errMsg:date.errMsg
  }
}

export function putplxgsp(userName,token,advas,labe,inLabe){
  return function(dispatch) {
    fetch(HTTPED+'api/advas/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&advas="+advas+"&labe="+labe+'&inLabe='+inLabe
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_plxgsp(date));
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
export const GET_PLXGSPJQ = 'GET_PLXGSPJQ';

function put_plxgspjq(date) {
  return {
    type: GET_PLXGSPJQ,
    err:date.err,
    errMsg:date.errMsg
  }
}

export function putplxgspjq(userName,token,advas,enab){
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
            dispatch(put_plxgspjq(date));
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

//获取口岸 根据服务 名称
export const GET_KANSP = 'GET_KANSP';

function get_kansp(date) {
  return {
    type: GET_KANSP,
    err:date.err,
    errMsg:date.errMsg,
    kansp:date.rows
  }
}

export function getkansp(userName,token,serv,name){
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
            dispatch(get_kansp(date));
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
export const PUT_VIPZSS = 'PUT_VIPZSS';

function put_vipzss(date) {
  return {
    type: PUT_VIPZSS,
    err:date.err,
    errMsg:date.errMsg,
    advazss:date.adva
  }
}

export function putvipzss(userName,token,adva){
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
            dispatch(put_vipzss(date,false));
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