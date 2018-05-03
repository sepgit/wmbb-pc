/**
 * Created by Zing on 2016/8/4.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//循环获取该公司用户下管理员账号信息
function getadmininfohf(arr){
  var d=sessionStorage.getItem("SESSIONADMIACCO");
  var admininfos='';
  for(let v of arr) {
    if(v.userAcco==d){
      admininfos='{"user":"' + v.user + '","userAcco":"' + v.userAcco + '","name":"' + v.name + '"}';
    }
  }
  return admininfos;
}

//获取口岸
export const GET_HFKA = 'GET_HFKA';

function get_hfka(date) {
  return {
    type: GET_HFKA,
    err:date.err,
    errMsg:date.errMsg,
    ports:date.rows
  }
}

export function gethfka(userName,token){
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
            dispatch(get_hfka(date));
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

//获取服务
export const GET_HFFW = 'GET_HFFW';

function get_hffw(date) {
  return {
    type: GET_HFFW,
    err:date.err,
    errMsg:date.errMsg,
    hfser:date.rows
  }
}

export function gethffw(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+'&servType=2'+'&rowCount=0',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hffw(date));
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
export const GET_HFJTFW = 'GET_HFJTFW';

function get_hfjtfw(date) {
  return {
    type: GET_HFJTFW,
    err:date.err,
    errMsg:date.errMsg,
    servOptis:date.rows
  }
}

export function gethfjtfw(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/servOptis/?userName='+userName+'&token='+token+"&rowCount=0",{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hfjtfw(date));
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

//初始化回复列表
export const GET_HFLISTC = 'GET_HFLISTC';

function get_hflistc(date) {
  return {
    type: GET_HFLISTC,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    hflist:date.rows
  }
}

export function gethflistc(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/resps/?userName='+userName+'&token='+token+'&rowCount=10',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hflistc(date));
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

//搜索回复列表
export const GET_HFLISTALL = 'GET_HFLISTALL';

function get_hflist(date) {
  return {
    type: GET_HFLISTALL,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    hflist:date.rows
  }
}

export function gethflist(userName,token,pageIndex,portid,serv,servOptiid,respStat,respTimeFrom,respTimeTo,unrespOnly){
  let str='',str1='';
  if(respStat!=0){
    str='&respStat='+respStat;
  }
  if(unrespOnly!=0){
    str='&unrespOnly='+unrespOnly;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/resps/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&port="+portid+"&serv="+serv+"&servOpti="+servOptiid+'&respTimeFrom='+respTimeFrom+'&respTimeTo='+respTimeTo+str+str1,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hflist(date));
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
export const GET_HFLISTGD = 'GET_HFLISTGD';

function get_hflistgd(date) {
  return {
    type: GET_HFLISTGD,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    hflist:date.rows
  }
}

export function gethflistgd(userName,token,pageIndex,portid,serv,servOptiid,respStat,respTimeFrom,respTimeTo,unrespOnly){
  let str='',str1='';
  if(respStat!=0){
    str='&respStat='+respStat;
  }
  if(unrespOnly!=0){
    str='&unrespOnly='+unrespOnly;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/resps/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&port="+portid+"&serv="+serv+"&servOpti="+servOptiid+'&respTimeFrom='+respTimeFrom+'&respTimeTo='+respTimeTo+str+str1,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hflistgd(date));
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

//回复详情
export const GET_HFREDE = 'GET_HFREDE';

function get_hfrede(date,respccto,iscz) {
  return {
    type: GET_HFREDE,
    err:date.err,
    errMsg:date.errMsg,
    hfdetl:date.resp,
    respccto:respccto,
    iscz:iscz
  }
}

export function gethfhfrede(userName,token,respsid,userid){
  return function(dispatch) {
    fetch(HTTPED+'api/resps/'+respsid+'?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            let str2='',iscz=false;
            if(date.resp.ccto!=null&&date.resp.ccto!='[,]'){
              let iscs=JSON.parse(date.resp.ccto);
              for(let v of iscs){
                str2+=v.name+',';
                if(v.user==userid){
                  iscz=true;
                }
              }
              str2=str2.substring(0,str2.length-1);
            }
            dispatch(get_hfrede(date,str2,iscz));
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

//咨询详情
export const GET_ZXXQ = 'GET_ZXXQ';

function get_zxxq(date,conssendTo,consccto,consfile) {
  return {
    type: GET_ZXXQ,
    err:date.err,
    errMsg:date.errMsg,
    zxdetl:date.cons,
    conssendTo:conssendTo,
    consccto:consccto,
    consfile:consfile
  }
}

export function getzxxq(userName,token,consid){
  return function(dispatch) {
    fetch(HTTPED+'api/conss/'+consid+'?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            let str1='',str2='',str3='';
            if(date.cons.sendTo!=null){
              let issj=JSON.parse(date.cons.sendTo);
              for(let i of issj){
                str1+=i.name+',';
              }
              str1=str1.substring(0,str1.length-1);
            }
            if(date.cons.ccto!=null){
              let iscs=JSON.parse(date.cons.ccto);
              for(let v of iscs){
                str2+=v.name+',';
              }
              str2=str2.substring(0,str2.length-1);
            }
            str3=HTTPED.substring(0,HTTPED.length-1)+date.cons.file;
            dispatch(get_zxxq(date,str1,str2,str3));
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


//回复详情忽略
export const GET_HFXQHL = 'GET_HFXQHL';

function put_hfxqhl(date) {
  return {
    type: GET_HFXQHL,
    err:date.err,
    errMsg:date.errMsg,
    respidhl:date.resp
  }
}

export function puthfxqhl(userName,token,respid){
  return function(dispatch) {
    fetch(HTTPED+'api/resps/'+respid+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&skip=true&respStat=50"
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(put_hfxqhl(date));
            message.success('修改成功,请刷新');
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

//发送（回复）
export const GET_FSHFL = 'GET_FSHFL';

function post_fshfl(date,isshow) {
  return {
    type: GET_FSHFL,
    err:date.err,
    errMsg:date.errMsg,
    respid:date.resp,
    isshow:isshow
  }
}

export function postfshfl(user,userName,token,respid,respMemo,ccto){
  return function(dispatch) {
    fetch(HTTPED+'api/resps/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&user="+user+"&resp="+respid+"&respMemo="+respMemo+"&ccto="+ccto
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_fshfl(date,false));
            message.success('发送成功');
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

//获取最近港口咨询
export const GET_HFZJKAN = 'GET_HFZJKAN';

function get_hfzjkan(date) {
  return {
    type: GET_HFZJKAN,
    err:date.err,
    errMsg:date.errMsg,
    portszj:date.rows
  }
}

export function gethfzjkan(userName,token,serv){
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
            dispatch(get_hfzjkan(date));
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

//获取收件人（供应商）
export const GET_HFSENDTO = 'GET_HFSENDTO';

function get_hfsendto(date) {
  return {
    type: GET_HFSENDTO,
    err:date.err,
    errMsg:date.errMsg,
    hfprovs:date.rows
  }
}

export function gethfsendto(userName,token,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/provs/?userName='+userName+'&token='+token+'&rowCount=0&serv='+serv+'&useProv=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hfsendto(date));
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

//获取抄送（公司用户）
export const GET_HFGCCTO = 'GET_HFGCCTO';

function get_hfccto(date,adminlinfo) {
  return {
    type: GET_HFGCCTO,
    err:date.err,
    errMsg:date.errMsg,
    hfcctos:date.rows,
    adminlinfohf:adminlinfo
  }
}

export function gethfccto(userName,token,comp){
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
            let adminlinfo=getadmininfohf(date.rows);
            dispatch(get_hfccto(date,adminlinfo));
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

//获取委托（委托权限的公司用户）
export const GET_HFGWTO = 'GET_HFGWTO';

function get_hfwtuo(date) {
  return {
    type: GET_HFGWTO,
    err:date.err,
    errMsg:date.errMsg,
    hfwtuo:date.rows
  }
}

export function gethfwtuo(userName,token,comp){
  return function(dispatch) {
    fetch(HTTPED+'api/users/?userName='+userName+'&token='+token+'&rowCount=0&freiMngr=1&comp='+comp,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hfwtuo(date));
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

//获取服务的具体服务
export const GET_HFJTSER = 'GET_HFJTSER';

function get_hfjtser(date) {
  return {
    type: GET_HFJTSER,
    err:date.err,
    errMsg:date.errMsg,
    serJser:date.rows
  }
}

export function gethfjtser(userName,token,servid){
  return function(dispatch) {
    fetch(HTTPED+'api/servOptis/?userName='+userName+'&token='+token+"&rowCount=0&serv="+servid,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hfjtser(date));
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


//发送（新增咨询）
export const GET_HFADDNEW = 'GET_HFADDNEW';

function get_hfaddnew(date) {
  return {
    type: GET_HFADDNEW,
    err:date.err,
    errMsg:date.errMsg,
    consid:date.cons
  }
}

export function gethfaddnew(user,userName,token,serv,servOpti,port,consMemo,sendTo,ccto,match,mngr){
  return function(dispatch) {
    fetch(HTTPED+'api/conss/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&user="+user+"&servOpti="+servOpti+"&port="+port+"&consMemo="+consMemo+"&sendTo="+sendTo+"&ccto="+ccto+"&match="+match+"&mngr="+mngr
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hfaddnew(date));
            message.success('发送成功');
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
export const GET_HFPORTSF = 'GET_HFPORTSF';

function get_hfportsf(date) {
  return {
    type: GET_HFPORTSF,
    err:date.err,
    errMsg:date.errMsg,
    hfportsf:date.rows
  }
}

export function gethfportsf(userName,token,serv){
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
            dispatch(get_hfportsf(date));
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

//获取个人信息（用户详情）
export const GET_HFPEOINFO = 'GET_HFPEOINFO';

function get_peoinfohf(date,deposit) {
  return {
    type: GET_HFPEOINFO,
    err:date.err,
    errMsg:date.errMsg,
    peoinfohf:date.user,
    deposit:deposit
  }
}

export function getpeoinfohf(userName,token,userid){
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
            fetch(HTTPED+'api/guars/?userName='+userName+'&token='+token+'&user='+userid+'&residual=true',{
              method: "get",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function(res){
              if(res.ok){
                res.json().then(function(d3){
                  if(!date.err){
                    dispatch(get_peoinfohf(date,d3.deposit));
                  }
                });
              }
            });
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

//获取该回复标注列表
export const GET_BZLBF = 'GET_BZLBF';

function get_bzlbf(date) {
  return {
    type: GET_BZLBF,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    bzlistf:date.rows
  }
}

export function getbzlbf(userName,token,respid){
  return function(dispatch) {
    fetch(HTTPED+'api/respComms/?userName='+userName+'&token='+token+'&resp='+respid,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_bzlbf(date));
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

//新建回复标注
export const GET_XJBZF = 'GET_XJBZF';

function post_xjbzf(date) {
  return {
    type: GET_XJBZF,
    err:date.err,
    errMsg:date.errMsg
  }
}

export function postxjbzf(userName,token,resp,comm){
  return function(dispatch) {
    fetch(HTTPED+'api/respComms/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&resp="+resp+"&comm="+comm
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_xjbzf(date));
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
export const GET_KANHF = 'GET_KANHF';

function get_kanhf(date) {
  return {
    type: GET_KANHF,
    err:date.err,
    errMsg:date.errMsg,
    kanhf:date.rows
  }
}

export function getkanhf(userName,token,serv,name){
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
            dispatch(get_kanhf(date));
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