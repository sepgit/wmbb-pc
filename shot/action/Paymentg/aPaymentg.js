/**
 * Created by Zing on 2016/11/18.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {message} from 'antd';
import {Backlogin} from '../../devtools/Autotoken.js'

//获取保函服务
export const GET_BHFW = 'GET_BHFW';

function get_bhfw(date) {
  return {
    type: GET_BHFW,
    err:date.err,
    errMsg:date.errMsg,
    bhfw:date.rows
  }
}

export function getbhfw(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+'&servType=5&rowCount=0',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_bhfw(date));
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

//获取付款人
export const GET_PAYR = 'GET_PAYR';

function get_payr(date,xyye,enab,resiEnab) {
  return {
    type: GET_PAYR,
    err:date.err,
    errMsg:date.errMsg,
    payr:date.rows,
    xyye:xyye,
    enab:enab,
    resiEnab:resiEnab
  }
}

//获取付款人权限
export const GET_PRIVS = 'GET_PRIVS';

function get_privs(date) {
  return {
    type: GET_PRIVS,
    err:date.err,
    errMsg:date.errMsg,
    privs:date.priv
  }
}


export function getpayr(userName,token,userAcco){
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
              //获取付款人信用余额
              fetch(HTTPED+'api/guars/?userName='+userName+'&token='+token+'&user='+date.rows[0].user+'&residual=true',{
                method: "get",
                headers: {
                  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
              }).then(function(res){
                if(res.ok){
                  res.json().then(function(d2){
                    if(!d2.err){
                      dispatch(get_payr(date,d2.residual,d2.enab,d2.resiEnab));
                    }
                  });
                }
              });
              //获取付款人权限
              fetch(HTTPED+'api/users/'+date.rows[0].user+'/?userName='+userName+'&token='+token+'&priv=true',{
                method: "get",
                headers: {
                  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
              }).then(function(res){
                if(res.ok){
                  res.json().then(function(d3){
                    if(!d3.err){
                      dispatch(get_privs(d3));
                    }
                  });
                }
              });
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

//发送（新增收付款保函）
export const GET_NEWBH = 'GET_NEWBH';

function get_newbh(date) {
  return {
    type: GET_NEWBH,
    err:date.err,
    errMsg:date.errMsg,
    guarid:date.guar
  }
}

export function getnewbh(userName,token,payUser,serv,trans,voyage,billNum,cartNum,depo,expiTime,guarTarget,guarCre){
  return function(dispatch) {
    fetch(HTTPED+'api/guars/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&payUser="+payUser+"&serv="+serv+"&trans="+trans+"&voyage="+voyage+"&billNum="+billNum+"&cartNum="+cartNum+"&depo="+depo+"&expiTime="+expiTime+"&guarTarget="+guarTarget+"&guarCre="+guarCre
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_newbh(date,false));
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

//获取收款列表收款人
export const GET_BHR = 'GET_BHR';

function get_bhr(date) {
  return {
    type: GET_BHR,
    err:date.err,
    errMsg:date.errMsg,
    bhr:date.rows
  }
}

export function getbhr(userName,token,user,comp){
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
            dispatch(get_bhr(date));
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

//初始化收款列表
export const GET_CKLC = 'GET_CKLC';

function get_sklc(date) {
  return {
    type: GET_CKLC,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    sklist:date.rows
  }
}

export function getsklc(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/guars/?userName='+userName+'&token='+token+'&rowCount=10&rece=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_sklc(date));
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

//搜索收款列表
export const GET_CKLS = 'GET_CKLS';

function get_ckls(date) {
  return {
    type: GET_CKLS,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    sklist:date.rows
  }
}

export function getckls(userName,token,pageIndex,serv,payUser,receUser,expiTime,guar,stat,blacklist){
  let str='';
  if(stat!=0){
    str='&stat='+stat;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/guars/?userName='+userName+'&token='+token+"&rowCount=10&rece=true&pageIndex="+pageIndex+"&serv="+serv+"&payUser="+payUser+"&receUser="+receUser+"&expiTime="+expiTime+"&guar="+guar+"&blacklist="+blacklist+str,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ckls(date));
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

//滚动加载收款
export const GET_CKLG = 'GET_CKLG';

function get_cklg(date) {
  return {
    type: GET_CKLG,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    sklist:date.rows
  }
}

export function getcklg(userName,token,pageIndex,serv,payUser,receUser,expiTime,guar,stat,blacklist){
  let str='';
  if(stat!=0){
    str='&stat='+stat;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/guars/?userName='+userName+'&token='+token+"&rowCount=10&rece=true&pageIndex="+pageIndex+"&serv="+serv+"&payUser="+payUser+"&receUser="+receUser+"&expiTime="+expiTime+"&guar="+guar+"&blacklist="+blacklist+str,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_cklg(date));
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


//获取保函详情
export const GET_BHXQ = 'GET_BHXQ';

function get_bhxq(date) {
  return {
    type: GET_BHXQ,
    err:date.err,
    errMsg:date.errMsg,
    bhxq:date.guar
  }
}

export function getbhxq(userName,token,guar){
  return function(dispatch) {
    fetch(HTTPED+'api/guars/'+guar+'/?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_bhxq(date));
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

//上传履约证明
export const GET_LYSC = 'GET_LYSC';

function put_lysc(date) {
  return {
    type: GET_LYSC,
    err:date.err,
    errMsg:date.errMsg,
    guarly:date.guar
  }
}

export function putlysc(guar,formdate){
  return function(dispatch) {
    fetch(HTTPED+'api/guars/'+guar+'/',{
      method: "put",
      body:formdate
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(put_lysc(date));
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

//确认履约证明
export const GET_LYQR = 'GET_LYQR';

function put_lyqr(date) {
  return {
    type: GET_LYQR,
    err:date.err,
    errMsg:date.errMsg,
    guarly:date.guar
  }
}

export function putlyqr(guar,userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/guars/'+guar+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&confirms=true&perfCert=true"
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(put_lyqr(date));
            message.success('确认成功');
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

//上传发票复印件
export const GET_FPSC = 'GET_FPSC';

function put_fpsc(date) {
  return {
    type: GET_FPSC,
    err:date.err,
    errMsg:date.errMsg,
    guarfp:date.guar
  }
}

export function putfpsc(guar,formdate){
  return function(dispatch) {
    fetch(HTTPED+'api/guars/'+guar+'/',{
      method: "put",
      body:formdate
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(put_fpsc(date));
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


//修改状态
export const GET_XGZT = 'GET_XGZT';

function put_xgzt(date) {
  return {
    type: GET_XGZT,
    err:date.err,
    errMsg:date.errMsg,
    guarzt:date.guar
  }
}

export function putxgzt(guar,userName,token,stat){
  return function(dispatch) {
    fetch(HTTPED+'api/guars/'+guar+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&changeStat=true&stat="+stat
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(put_xgzt(date));
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

//获取个人信息（用户详情）
export const GET_REINFO = 'GET_REINFO';

function get_reinfo(date) {
  return {
    type: GET_REINFO,
    err:date.err,
    errMsg:date.errMsg,
    reinfo:date.user
  }
}

export function getreinfo(userName,token,userid){
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
            dispatch(get_reinfo(date));
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

//删除
export const GET_DELBH = 'GET_DELBH';

function del_delbh(date) {
  return {
    type: GET_DELBH,
    err:date.err,
    errMsg:date.errMsg,
    guarzt:date.guar
  }
}

export function deldelbh(guar,userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/guars/'+guar+'/',{
      method: "delete",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(del_delbh(date));
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

//企业列表模糊企业对象2数组。
export const GET_USERMHP= 'GET_USERMHP';

function get_usermhp(date) {
  return {
    type: GET_USERMHP,
    err:date.err,
    errMsg:date.errMsg,
    usermhp:date.rows
  }
}

export function getusermhp(userName,token,compAlia){
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
            dispatch(get_usermhp(date));
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
export const GET_USERLBP= 'GET_USERLBP';

function get_userlbp(date) {
  return {
    type: GET_USERLBP,
    err:date.err,
    errMsg:date.errMsg,
    userlbp:date.rows
  }
}

export function getuserlbp(userName,token,comp){
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
            dispatch(get_userlbp(date));
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

//最近付款人列表
export const GET_ZJUSRF= 'GET_ZJUSRF';

function get_zjusrf(date) {
  return {
    type: GET_ZJUSRF,
    err:date.err,
    errMsg:date.errMsg,
    zjusrf:date.rows
  }
}

export function getzjusrf(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/guars/?userName='+userName+'&token='+token+'&lateUser=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_zjusrf(date));
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