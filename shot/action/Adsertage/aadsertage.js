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

//获取服务优势服务
export const GET_YSSFW = 'GET_YSSFW';

function get_yssfw(date) {
  return {
    type: GET_YSSFW,
    err:date.err,
    errMsg:date.errMsg,
    yssser:date.rows
  }
}

export function getyssfw(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+'&servType=2&rowCount=0',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yssfw(date));
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

//获取服务优势具体服务条件
export const GET_YSSJTFW = 'GET_YSSJTFW';

function get_yssjtfw(date) {
  return {
    type: GET_YSSJTFW,
    err:date.err,
    errMsg:date.errMsg,
    yssjtfw:date.rows
  }
}

export function getyssjtfw(userName,token,serv){
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
            dispatch(get_yssjtfw(date));
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

//获取服务优势具体服务无条件
export const GET_YSSJTFWW = 'GET_YSSJTFWW';

function get_yssjtfww(date) {
  return {
    type: GET_YSSJTFWW,
    err:date.err,
    errMsg:date.errMsg,
    yssjtfww:date.rows
  }
}

export function getyssjtfww(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/servOptis/?userName='+userName+'&token='+token+'&rowCount=0',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yssjtfww(date));
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
export const GET_YSSPORTS = 'GET_YSSPORTS';

function get_yssports(date) {
  return {
    type: GET_YSSPORTS,
    err:date.err,
    errMsg:date.errMsg,
    yssports:date.rows
  }
}

export function getyssports(userName,token,serv){
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
            dispatch(get_yssports(date));
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
export const GET_YSSFBR = 'GET_YSSFBR';

function get_yssfbr(date) {
  return {
    type: GET_YSSFBR,
    err:date.err,
    errMsg:date.errMsg,
    yssfbr:date.rows
  }
}

export function getyssfbr(userName,token,user,comp){
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
            dispatch(get_yssfbr(date));
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
export const GET_YSSUSERS = 'GET_YSSUSERS';

function get_yssusers(date) {
  return {
    type: GET_YSSUSERS,
    err:date.err,
    errMsg:date.errMsg,
    yssusers:date.user
  }
}

export function getyssusers(userName,token,userid){
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
            dispatch(get_yssusers(date));
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

//新建（服务优势）
export const GET_YSSXINJIAN = 'GET_YSSXINJIAN';

function post_yssnew(date,isshow) {
  return {
    type: GET_YSSXINJIAN,
    err:date.err,
    errMsg:date.errMsg,
    contid:date.cont,
    isshow:isshow
  }
}

export function postyssnew(userName,token,serv,servOpti,port,user,labe,inLabe){
  return function(dispatch) {
    fetch(HTTPED+'api/conts/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&servOpti="+servOpti+"&port="+port+"&user="+user+"&labe="+labe+"&inLabe="+inLabe
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_yssnew(date,false));
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

//初始化服务优势列表
export const GET_YSSLISTC = 'GET_YSSLISTC';

function get_ysslistc(date) {
  return {
    type: GET_YSSLISTC,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    ysslists:date.rows,
    vipCount:date.vipCount,
    platCount:date.platCount,
    pushCount:date.pushCount,
    allVipCount:date.allVipCount
  }
}

export function getysslistc(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/conts/?userName='+userName+'&token='+token+'&rowCount=10',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysslistc(date));
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

//搜索服务优势列表
export const GET_YSSLISTALL = 'GET_YSSLISTALL';

function get_ysslist(date) {
  return {
    type: GET_YSSLISTALL,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    ysslists:date.rows,
    vipCount:date.vipCount,
    platCount:date.platCount,
    pushCount:date.pushCount,
    allVipCount:date.allVipCount
  }
}

export function getysslist(userName,token,pageIndex,serv,servOpti,port,creator,user,enab){
  let str='';
  if(enab!=''&&enab!=2){
    str="&enab="+enab;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/conts/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&serv="+serv+"&servOpti="+servOpti+"&port="+port+"&creator="+creator+"&user="+user+str,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysslist(date));
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
export const GET_YSSLISTGD = 'GET_YSSLISTGD';

function get_ysslistgd(date) {
  return {
    type: GET_YSSLISTGD,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    ysslists:date.rows,
    vipCount:date.vipCount,
    platCount:date.platCount,
    pushCount:date.pushCount,
    allVipCount:date.allVipCount
  }
}

export function getysslistgd(userName,token,pageIndex,serv,servOpti,port,creator,user,enab){
  return function(dispatch) {
    let str='';
    if(enab!=''||enab!=2){
      str="&enab="+enab;
    }
    fetch(HTTPED+'api/conts/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&serv="+serv+"&servOpti="+servOpti+"&port="+port+"&creator="+creator+"&user="+user+str,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysslistgd(date));
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

//获取服务优势详情
export const GET_YSSDETL = 'GET_YSSDETL';

function get_yssxq(date) {
  return {
    type: GET_YSSDETL,
    err:date.err,
    errMsg:date.errMsg,
    yssdetl:date.cont
  }
}

export function getyssxq(userName,token,contid){
  return function(dispatch) {
    fetch(HTTPED+'api/conts/'+contid+'/?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yssxq(date));
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

//服务优势状态修改
export const GET_YSSZTGB = 'GET_YSSZTGB';

function put_yssztbg(date,isc) {
  return {
    type: GET_YSSZTGB,
    err:date.err,
    errMsg:date.errMsg,
    contid:date.cont,
    isc:isc
  }
}

export function putyssztbg(userName,token,contid,enab,labe,inLabe){
  return function(dispatch) {
    fetch(HTTPED+'api/conts/'+contid,{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&enab="+enab+"&labe="+labe+"&inLabe="+inLabe
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_yssztbg(date,false));
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
export const GET_FWPORTSYS = 'GET_FWPORTSYS';

function get_portsfwys(date) {
  return {
    type: GET_FWPORTSYS,
    err:date.err,
    errMsg:date.errMsg,
    fwysports:date.rows
  }
}

export function getportsfwys(userName,token){
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
            dispatch(get_portsfwys(date));
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

//获取最近口岸 带服务
export const GET_YSFWZJ = 'GET_YSFWZJ';

function get_ysfwzj(date) {
  return {
    type: GET_YSFWZJ,
    err:date.err,
    errMsg:date.errMsg,
    ysfwzj:date.rows
  }
}

export function getysfwzj(userName,token,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&type=3&recent=true&serv='+serv,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ysfwzj(date));
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

//修改服务优势标注
export const GET_YSBZFW = 'GET_YSBZFW';

function put_ysbzfw(date) {
  return {
    type: GET_YSBZFW,
    err:date.err,
    errMsg:date.errMsg,
    contfwid:date.cont
  }
}

export function putysbzfw(userName,token,contMngr,labe,enab,inLabe){
  return function(dispatch) {
    fetch(HTTPED+'api/conts/'+contMngr+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&labe="+labe+"&enab="+enab+"&inLabe="+inLabe
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_ysbzfw(date));
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
export const GET_KANFW = 'GET_KANFW';

function get_kanfu(date) {
  return {
    type: GET_KANFW,
    err:date.err,
    errMsg:date.errMsg,
    kanfu:date.rows
  }
}

export function getkanfu(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&type=3&recent=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_kanfu(date));
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
export const GET_HOTPOF = 'GET_HOTPOF';

function get_hotpof(date) {
  return {
    type: GET_HOTPOF,
    err:date.err,
    errMsg:date.errMsg,
    hotpof:date.rows
  }
}

export function gethotpof(userName,token,serv){
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
            dispatch(get_hotpof(date));
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
export const GET_PLXGSR = 'GET_PLXGSR';

function put_plxgsr(date) {
  return {
    type: GET_PLXGSR,
    err:date.err,
    errMsg:date.errMsg
  }
}

export function putplxgsr(userName,token,conts,labe,inLabe){
  return function(dispatch) {
    fetch(HTTPED+'api/conts/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&conts="+conts+"&labe="+labe+'&inLabe='+inLabe
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_plxgsr(date));
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
export const GET_PLXGSRJQ = 'GET_PLXGSRJQ';

function put_plxgsrjq(date) {
  return {
    type: GET_PLXGSRJQ,
    err:date.err,
    errMsg:date.errMsg
  }
}

export function putplxgsrjq(userName,token,conts,enab){
  return function(dispatch) {
    fetch(HTTPED+'api/conts/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&chgStat=true&conts="+conts+"&enab="+enab
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_plxgsrjq(date));
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
export const GET_KANF = 'GET_KANF';

function get_kanf(date) {
  return {
    type: GET_KANF,
    err:date.err,
    errMsg:date.errMsg,
    kanf:date.rows
  }
}

export function getkanf(userName,token,serv,name){
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
            dispatch(get_kanf(date));
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
export const PUT_VIPZSF = 'PUT_VIPZSF';

function put_vipzsf(date) {
  return {
    type: PUT_VIPZSF,
    err:date.err,
    errMsg:date.errMsg,
    contzs:date.cont
  }
}

export function putvipzsf(userName,token,cont){
  return function(dispatch) {
    fetch(HTTPED+'api/conts/'+cont+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&addToVip=true"
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_vipzsf(date,false));
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