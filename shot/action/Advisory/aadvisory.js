/**
 * Created by Zing on 2016/8/9.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {message} from 'antd';
import {Backlogin} from '../../devtools/Autotoken.js'

//循环获取该公司用户下管理员账号信息
function getadmininfozx(arr){
  var d=sessionStorage.getItem("SESSIONADMIACCO");
  var admininfos='';
  for(let v of arr) {
    if(v.userAcco==d){
      admininfos='{"user":"' + v.user + '","userAcco":"' + v.userAcco + '","name":"' + v.name + '"}';
    }
  }
  return admininfos;
}
//获取服务
export const GET_ZXFW = 'GET_ZXFW';

function get_zxfw(date) {
  return {
    type: GET_ZXFW,
    err:date.err,
    errMsg:date.errMsg,
    zxlist:date.rows
  }
}

export function getzxfw(userName,token,servType){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+'&servType='+servType+'&rowCount=0',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_zxfw(date));
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
export const GET_ZXKA = 'GET_ZXKA';

function get_zxka(date) {
  return {
    type: GET_ZXKA,
    err:date.err,
    errMsg:date.errMsg,
    ports:date.rows
  }
}

export function getzxka(userName,token){
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
            dispatch(get_zxka(date));
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

//获取最近港口起运港
export const GET_ZXPORTSZJ = 'GET_ZXPORTSZJ';

function get_zxportszj(date) {
  return {
    type: GET_ZXPORTSZJ,
    err:date.err,
    errMsg:date.errMsg,
    portszj:date.rows
  }
}

export function getzxportszj(userName,token,serv){
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
            dispatch(get_zxportszj(date));
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
export const GET_ZXJTFW = 'GET_ZXJTFW';

function get_zxjtfw(date) {
  return {
    type: GET_ZXJTFW,
    err:date.err,
    errMsg:date.errMsg,
    servOptis:date.rows
  }
}

export function getzxjtfw(userName,token){
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
            dispatch(get_zxjtfw(date));
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
export const GET_ZXSENDTO = 'GET_ZXSENDTO';

function get_zxsendto(date) {
  return {
    type: GET_ZXSENDTO,
    err:date.err,
    errMsg:date.errMsg,
    zxprovs:date.rows
  }
}

export function getzxsendto(userName,token,serv,destPort){
  return function(dispatch) {
    fetch(HTTPED+'api/provs/?userName='+userName+'&token='+token+'&rowCount=0&serv='+serv+'&destPort='+destPort+'&useProv=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_zxsendto(date));
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
export const GET_ZXGCCTO = 'GET_ZXGCCTO';

function get_zxccto(date,adminlinfo) {
  return {
    type: GET_ZXGCCTO,
    err:date.err,
    errMsg:date.errMsg,
    zxcctos:date.rows,
    adminlinfozx:adminlinfo
  }
}

export function getzxccto(userName,token,comp){
  return function(dispatch) {
    fetch(HTTPED+'api/wmbbusers/?userName='+userName+'&token='+token+'&rowCount=0&comp='+comp,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            let adminlinfo=getadmininfozx(date.rows);
            dispatch(get_zxccto(date,adminlinfo));
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
export const GET_ZXGWTO = 'GET_ZXGWTO';

function get_zxwtuo(date) {
  return {
    type: GET_ZXGWTO,
    err:date.err,
    errMsg:date.errMsg,
    zxwtuo:date.rows
  }
}

export function getzxwtuo(userName,token,comp){
  return function(dispatch) {
    fetch(HTTPED+'api/wmbbusers/?userName='+userName+'&token='+token+'&rowCount=0&freiMngr=1&comp='+comp,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_zxwtuo(date));
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
export const GET_ZXJTSER = 'GET_ZXJTSER';

function get_zxjtser(date) {
  return {
    type: GET_ZXJTSER,
    err:date.err,
    errMsg:date.errMsg,
    serJser:date.rows
  }
}

export function getzxjtser(userName,token,servid){
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
            dispatch(get_zxjtser(date));
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
export const GET_ZXADDNEW = 'GET_ZXADDNEW';

function get_zxaddnew(date,isshow) {
  return {
    type: GET_ZXADDNEW,
    err:date.err,
    errMsg:date.errMsg,
    consid:date.cons,
    isshow:isshow
  }
}

export function getzxaddnew(user,userName,token,serv,servOpti,port,consMemo,sendTo,ccto,match,mngr){
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
            dispatch(get_zxaddnew(date,false));
            dispatch(get_gbtsfw(true));
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

//咨询新增上传
export const GET_ZXXZSC = 'GET_ZXXZSC';

function put_zxxzsc(date,isuploads) {
  return {
    type: GET_ZXXZSC,
    err:date.err,
    errMsg:date.errMsg,
    consid:date.cons,
    isuploads:isuploads
  }
}

export function putzxxzsc(consid,formdate){
  return function(dispatch) {
    fetch(HTTPED+'api/conss/'+consid+'/',{
      method: "put",
      body:formdate
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(put_zxxzsc(date,true));
            message.success('上传成功');
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

//初始化咨询列表
export const GET_ZXLISTC = 'GET_ZXLISTC';

function get_zxlistc(date) {
  return {
    type: GET_ZXLISTC,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    zxlists:date.rows
  }
}

export function getzxlistc(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/conss/?userName='+userName+'&token='+token+'&rowCount=10',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_zxlistc(date));
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

//搜索咨询列表
export const GET_ZXLISTALL = 'GET_ZXLISTALL';

function get_zxlist(date) {
  return {
    type: GET_ZXLISTALL,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    zxlists:date.rows
  }
}

export function getzxlist(userName,token,pageIndex,portid,serv,servOptiid,consStat,consTimeFrom,consTimeTo,unreadOnly){
  let str='',str1='';
  if(consStat!=0){
    str='&consStat='+consStat;
  }
  if(unreadOnly!=0){
    str1='&unreadOnly='+unreadOnly;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/conss/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&port="+portid+"&serv="+serv+"&servOpti="+servOptiid+'&consTimeFrom='+consTimeFrom+'&consTimeTo='+consTimeTo+str+str1,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_zxlist(date));
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
export const GET_ZXLISTGD = 'GET_ZXLISTGD';

function get_zxlistgd(date) {
  return {
    type: GET_ZXLISTGD,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    zxlists:date.rows
  }
}

export function getzxlistgd(userName,token,pageIndex,portid,serv,servOptiid,consStat,consTimeFrom,consTimeTo,unreadOnly){
  let str='',str1='';
  if(consStat!=0){
    str='&consStat='+consStat;
  }
  if(unreadOnly!=0){
    str1='&unreadOnly='+unreadOnly;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/conss/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&port="+portid+"&serv="+serv+"&servOpti="+servOptiid+'&consTimeFrom='+consTimeFrom+'&consTimeTo='+consTimeTo+str+str1,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_zxlistgd(date));
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

//回复列表
export const GET_ZXHF = 'GET_ZXHF';

function get_zxhf(date) {
  return {
    type: GET_ZXHF,
    err:date.err,
    errMsg:date.errMsg,
    zxhflist:date.rows
  }
}

export function getzxhf(userName,token,consid){
  return function(dispatch) {
    fetch(HTTPED+'api/resps/?userName='+userName+'&token='+token+'&cons='+consid,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_zxhf(date));
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
export const GET_ZXXQS = 'GET_ZXXQS';

function get_zxxqs(date,conssendTo,consccto,consfile,iscz) {
  return {
    type: GET_ZXXQS,
    err:date.err,
    errMsg:date.errMsg,
    zxdetl:date.cons,
    conssendTo:conssendTo,
    consccto:consccto,
    consfile:consfile,
    iscz:iscz
  }
}

export function getzxxqs(userName,token,consid,userid){
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
            let str1='',str2='',str3='',iscz=false;
            if(date.cons.sendTo!=null){
              let issj=JSON.parse(date.cons.sendTo);
              for(let i of issj){
                str1+=i.name+',';
              }
              str1=str1.substring(0,str1.length-1);
            }
            if(date.cons.ccto!=null&&date.cons.ccto!='[,]'){
              let iscs=JSON.parse(date.cons.ccto);
              for(let v of iscs){
                str2+=v.name+',';
                if(v.user==userid){
                  iscz=true;
                }
              }
              str2=str2.substring(0,str2.length-1);
            }
            str3=HTTPED.substring(0,HTTPED.length-1)+date.cons.file;
            dispatch(get_zxxqs(date,str1,str2,str3,iscz));
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

//咨询回复收藏状态
export const GET_ZXHFSC = 'GET_ZXHFSC';

function put_zxhfsc(date) {
  return {
    type: GET_ZXHFSC,
    err:date.err,
    errMsg:date.errMsg,
    respid:date.resp
  }
}

export function putzxhfsc(userName,token,respid,respStat){
  return function(dispatch) {
    fetch(HTTPED+'api/resps/'+respid,{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&respStat="+respStat
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_zxhfsc(date));
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

//咨询状态修改
export const GET_ZXZTGB = 'GET_ZXZTGB';

function put_zxztgb(date,isc) {
  return {
    type: GET_ZXZTGB,
    err:date.err,
    errMsg:date.errMsg,
    consztid:date.cons,
    isc:isc
  }
}

export function putzxztgb(userName,token,consid,consStat){
  return function(dispatch) {
    fetch(HTTPED+'api/conss/'+consid,{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&consStat="+consStat
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_zxztgb(date,false));
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

//获取该服务港口
export const GET_ZXPORTSF = 'GET_ZXPORTSF';

function get_zxportsf(date) {
  return {
    type: GET_ZXPORTSF,
    err:date.err,
    errMsg:date.errMsg,
    zxportsf:date.rows
  }
}

export function getzxportsf(userName,token,serv){
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
            dispatch(get_zxportsf(date));
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
export const GET_ZXPEOINFO = 'GET_ZXPEOINFO';

function get_peoinfozx(date,deposit) {
  return {
    type: GET_ZXPEOINFO,
    err:date.err,
    errMsg:date.errMsg,
    peoinfozx:date.user,
    deposit:deposit
  }
}

export function getpeoinfozx(userName,token,userid){
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
            fetch(HTTPED+'api/guars/?userName='+userName+'&token='+token+'&user='+userid+'&residual=true',{
              method: "get",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function(res){
              if(res.ok){
                res.json().then(function(d3){
                  if(!date.err){
                    dispatch(get_peoinfozx(date,d3.deposit));
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


//开关闭推送
export const GET_GBTSFW = 'GET_GBTSFW';

function get_gbtsfw(isgbts) {
  return {
    type: GET_GBTSFW,
    xptsfw:isgbts
  }
}

export function getgbtsfw(){
  return function(dispatch) {
    dispatch(get_gbtsfw(false));
  }
}


//获取服务优势列表推送
export const GET_FWYS = 'GET_FWYS';

function get_fwys(date) {
  return {
    type: GET_FWYS,
    err:date.err,
    errMsg:date.errMsg,
    fwys:date.rows
  }
}

export function getfwys(userName,token,port,servOpti,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/pushConts/?userName='+userName+'&token='+token+'&port='+port+'&servOpti='+servOpti+'&serv='+serv,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_fwys(date));
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
export const GET_FWDEL = 'GET_FWDEL';

function get_fwdel(date) {
  return {
    type: GET_FWDEL,
    err:date.err,
    errMsg:date.errMsg,
    fwdel:date.cont
  }
}

export function getfwdel(userName,token,cont){
  return function(dispatch) {
    fetch(HTTPED+'api/conts/'+cont+'/?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_fwdel(date));
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

//获取联系人详情
export const GET_USEDELFW = 'GET_USEDELFW';

function get_usedelfw(date) {
  return {
    type: GET_USEDELFW,
    err:date.err,
    errMsg:date.errMsg,
    userdelfw:date.user
  }
}

export function getusedelfw(userName,token,user){
  return function(dispatch) {
    fetch(HTTPED+'api/wmbbusers/'+user+'/?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_usedelfw(date));
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

//获取口岸根据服务
export const GET_FWKANF = 'GET_FWKANF';

function get_fwkanf(date) {
  return {
    type: GET_FWKANF,
    err:date.err,
    errMsg:date.errMsg,
    fwkanf:date.rows
  }
}

export function getfwkanf(userName,token,sevr){
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
            dispatch(get_fwkanf(date));
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
export const GET_XJGYSF = 'GET_XJGYSF';

function post_xjgysf(date) {
  return {
    type: GET_XJGYSF,
    err:date.err,
    errMsg:date.errMsg,
    providf:date.prov,
    xjgysf:date.acco
  }
}

export function postxjgysf(userName,token,serv,port,cont,labe){
  return function(dispatch) {
    fetch(HTTPED+'api/provs/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&port="+port+"&cont="+cont+"&labe="+labe
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_xjgysf(date));
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

//获取所有服务
export const GET_SERAF = 'GET_SERAF';

function get_seraf(date) {
  return {
    type: GET_SERAF,
    err:date.err,
    errMsg:date.errMsg,
    xseraf:date.rows
  }
}

export function getseraf(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+'&rowCount=0',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_seraf(date));
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

//获取该咨询标注列表
export const GET_BZLBZ = 'GET_BZLBZ';

function get_bzlbz(date) {
  return {
    type: GET_BZLBZ,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    bzlistz:date.rows
  }
}

export function getbzlbz(userName,token,consid){
  return function(dispatch) {
    fetch(HTTPED+'api/consComms/?userName='+userName+'&token='+token+'&cons='+consid,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_bzlbz(date));
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

//新建咨询标注
export const GET_XJBZZ = 'GET_XJBZZ';

function post_xjbzz(date) {
  return {
    type: GET_XJBZZ,
    err:date.err,
    errMsg:date.errMsg
  }
}

export function postxjbzz(userName,token,cons,comm){
  return function(dispatch) {
    fetch(HTTPED+'api/consComms/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&cons="+cons+"&comm="+comm
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_xjbzz(date));
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

//获取口岸 根据服务 名称
export const GET_KANZX = 'GET_KANZX';

function get_kanzx(date) {
  return {
    type: GET_KANZX,
    err:date.err,
    errMsg:date.errMsg,
    kanzx:date.rows
  }
}

export function getkanzx(userName,token,serv,name){
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
            dispatch(get_kanzx(date));
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
