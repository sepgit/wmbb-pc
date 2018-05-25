/**
 * Created by Zing on 2016/6/27.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import md5 from 'md5';
import React from 'react';
import {message,Icon,notification,Button} from 'antd';
import { Link, browserHistory } from 'react-router'

//登录
export const LOGIN_DL = 'LOGIN_DL';

function put_login(date) {
  return {
    type: LOGIN_DL,
    err:date.err,
    errMsg:date.errMsg,
    token:date.token,
    user:date.user
  }
}

export function putlogin(userName,pad){
  return function(dispatch) {
    fetch(HTTPED+'api/users/'+userName+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"login=true&password="+md5(pad).toUpperCase()
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_login(date));
            message.success('登录成功');
            sessionStorage.setItem("SESSIONUSERACC",userName);
            sessionStorage.setItem("SESSIONUSER",date.user);
            sessionStorage.setItem("SESSIONTOKEN",date.token);
            //获取用户信息
            const btnClick = function () {
              notification.close('haliluya');
            };
            const btn = (
              <Button type="primary" size="small" onClick={btnClick}>
                  知道了
              </Button>
            );
            const args = {
              message: '提醒',
              description: '请完善个人信息.',
              duration: 5,
              key:'haliluya',
              btn,
              icon:<Icon type="info" />
            };
            fetch(HTTPED+'api/users/'+date.user+'/?userName='+userName+'&token='+date.token,{
              method: "get",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function(res){
              if(res.ok){
                res.json().then(function(dates){
                  if(!dates.err){
                    //获取用户信息
                    sessionStorage.setItem("SESSIONUNAME",dates.user.name);
                    sessionStorage.setItem("SESSIONCOMP",dates.user.comp);
                    sessionStorage.setItem("SESSIONUVIP",dates.user.userVip);
                    sessionStorage.setItem("SESSIONGUARPRIV",dates.user.guarPriv);
                    let isxm,ishy,iszw,iskan,isphon,isyx,isgsqc,isgsjc,iscz,isdh,isadd;
                    isxm=dates.user.name==''||dates.user.name=='null'?0:1;
                    ishy=dates.user.indu==''||dates.user.indu=='null'?0:1;
                    iszw=dates.user.posi==''||dates.user.posi=='null'?0:1;
                    iskan=dates.user.port==''||dates.user.port=='null'?0:1;
                    isphon=dates.user.mobi==''||dates.user.mobi=='null'?0:1;
                    isyx=dates.user.mail==''||dates.user.mail=='null'?0:1;
                    isgsqc=dates.user.compName==''||dates.user.compName=='null'?0:1;
                    isgsjc=dates.user.compAlia==''||dates.user.compAlia=='null'?0:1;
                    iscz=dates.user.fax==''||dates.user.fax=='null'?0:1;
                    isdh=dates.user.phon==''||dates.user.phon=='null'?0:1;
                    isadd=dates.user.addr==''||dates.user.addr=='null'?0:1;
                    if(isxm==0||ishy==0||iszw==0||iskan==0||isphon==0||isyx==0||isgsqc==0||isgsjc==0||iscz==0||isdh==0||isadd==0){
                      notification.open(args);
                    }
                  }
                });
              }
            });
            //获取用户权限
            fetch(HTTPED+'api/users/'+date.user+'/?userName='+userName+'&token='+date.token+'&priv=true',{
              method: "get",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function(resa){
              if(resa.ok){
                resa.json().then(function(datea){
                  if(!datea.err){
                    sessionStorage.setItem("SESSIONADMI",datea.priv.admi);
                    sessionStorage.setItem("SESSIONADVA",datea.priv.adva);
                    sessionStorage.setItem("SESSIONPROV",datea.priv.prov);
                    sessionStorage.setItem("SESSIONCONT",datea.priv.cont);
                    sessionStorage.setItem("SESSIONPAYM",datea.priv.paym);
                    sessionStorage.setItem("SESSIONCASH",datea.priv.cash);
                  }
                });
              }
            });
            //获取系统权限
            fetch(HTTPED+'api/users/'+date.user+'/?userName='+userName+'&token='+date.token+'&systPriv=true',{
              method: "get",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function(resb){
              if(resb.ok){
                resb.json().then(function(dateb){
                  if(!dateb.err) {
                    sessionStorage.setItem("SESSIONSYSCONS", dateb.systPriv.cons);
                    sessionStorage.setItem("SESSIONSYSENQU", dateb.systPriv.enqu);
                    sessionStorage.setItem("SESSIONSYSREPL", dateb.systPriv.repl);
                    sessionStorage.setItem("SESSIONSYSRESP", dateb.systPriv.resp);
                  }
                });
              }
            });
            //跳转首页
            browserHistory.push({
              pathname:'/Home'
            });
          }else{
            message.error(date.errMsg);
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}

//验证码
export const CODES_REFRESH = 'CODES_REFRESH';//验证码刷新
function get_Code(date,capi,pic) {
  return {
    type: CODES_REFRESH,
    errMsg:date.errMsg,
    capi:capi,
    pic:pic
  }
}

export function getCode(){
  return function(dispatch) {
    fetch(HTTPED+'api/capt/',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            //获取验证码成功
            let str='data:image/png;base64,';
            let pic=str+date.capt.pic;
            dispatch(get_Code(date,date.capt.capi,pic));
          }else{
            message.error(date.errMsg);
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}

//注册
export const SIGN_ZC = 'SIGN_ZC';

function post_zc(date,userName) {
  return {
    type: SIGN_ZC,
    err:date.err,
    errMsg:date.errMsg,
    userid:date.user,
    uac:userName
  }
}

export function postzc(userName,password,capi,capt){
  return function(dispatch) {
    fetch(HTTPED+'api/users/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userAcco="+userName+"&password="+md5(password).toUpperCase()+"&capi="+capi+"&capt="+capt
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_zc(date,userName));
            message.success('注册成功');
            //邮件
            fetch(HTTPED+'api/users/'+userName+'/',{
              method: "put",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              },
              body:"actm=true"
            }).then(function(res){
              if(res.ok){
                res.json().then(function(dates) {
                  if(!dates.err){
                    //邮件发送成功
                    message.success('邮件发送成功,请去邮箱查看');
                  }else{
                    //邮件发送失败
                    message.error('邮件发送失败，请核对注册邮箱');
                  }
                });
              }
            }, function(e) {
              message.error("连接服务器失败，请联系管理员！");
            });
          }else{
            message.error(date.errMsg);
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}

//发送激活邮件
export const SIGN_JHYJ = 'SIGN_JHYJ';

function post_jhyj(date,signjh) {
  return {
    type: SIGN_JHYJ,
    err:date.err,
    signjh:signjh
  }
}

export function postjhyj(userName){
  return function(dispatch) {
    fetch(HTTPED+'api/users/'+userName+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"actm=true"
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            //邮件发送成功
            dispatch(post_jhyj(date,true));
            message.success('邮件发送成功,请去邮箱查看');
          }else{
            //邮件发送失败
            dispatch(post_jhyj(date,false));
            message.error('你的帐号已激活或者未注册，邮件发送失败');
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}

//激活
export const SIGN_JH = 'SIGN_JH';

function put_jh(date) {
  return {
    type: SIGN_JH,
    err:date.err,
    errMsg:date.errMsg
  }
}

export function putjh(userName,actiCode){
  return function(dispatch) {
    fetch(HTTPED+'api/users/'+userName+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"acti=true&actiCode="+actiCode
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_jh(date));
            message.success('激活成功,请登录');
            browserHistory.push({
              pathname:'/'
            });
          }else{
            message.error(date.errMsg);
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}

//忘记密码
export const LOG_WJMM = 'LOG_WJMM';

function put_wjmm(date) {
  return {
    type: LOG_WJMM,
    err:date.err,
    errMsg:date.errMsg
  }
}

export function putwjmm(userName){
  return function(dispatch) {
    fetch(HTTPED+'api/users/'+userName+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"forPass=true"
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_wjmm(date));
            message.success('邮件已发送，请去邮箱查看');
          }else{
            message.error(date.errMsg);
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}


//重置密码
export const LOG_CZMM = 'LOG_CZMM';

function put_czmm(date) {
  return {
    type: LOG_CZMM,
    err:date.err,
    errMsg:date.errMsg
  }
}

export function putczmm(userName,vkey,newPass){
  return function(dispatch) {
    fetch(HTTPED+'api/users/'+userName+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"resPass=true&vkey="+vkey+"&newPass="+md5(newPass).toUpperCase()
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_czmm(date));
            message.success('密码重置成功,请登录');
            browserHistory.push({
              pathname:'/'
            });
          }else{
            message.error(date.errMsg);
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}

//URL无验证直接登录跳转
export const LOGIN_DLURL = 'LOGIN_DLURL';

function put_loginurl(date) {
  return {
    type: LOGIN_DLURL,
    err:date.err,
    errMsg:date.errMsg,
    token:date.token,
    user:date.user
  }
}

export function putloginurl(userName,pad){
  return function(dispatch) {
    fetch(HTTPED+'api/users/'+userName+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"rlogin=true&rkey="+pad
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_loginurl(date));
            message.success('登录成功');
            sessionStorage.setItem("SESSIONUSERACC",userName);
            sessionStorage.setItem("SESSIONUSER",date.user);
            sessionStorage.setItem("SESSIONTOKEN",date.token);
            //获取用户信息
            const btnClick = function () {
              notification.close('haliluya');
            };
            const btn = (
              <Button type="primary" size="small" onClick={btnClick}>
                  知道了
              </Button>
            );
            const args = {
              message: '提醒',
              description: '请完善个人信息.',
              duration: 5,
              key:'haliluya',
              btn,
              icon:<Icon type="info" />
            };
            fetch(HTTPED+'api/users/'+date.user+'/?userName='+userName+'&token='+date.token,{
              method: "get",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function(res){
              if(res.ok){
                res.json().then(function(dates){
                  if(!dates.err){
                    sessionStorage.setItem("SESSIONCOMP",dates.user.comp);
                    sessionStorage.setItem("SESSIONUVIP",dates.user.userVip);
                    let isxm,ishy,iszw,iskan,isphon,isyx,isgsqc,isgsjc,iscz,isdh,isadd;
                    isxm=dates.user.name==''||dates.user.name=='null'?0:1;
                    ishy=dates.user.indu==''||dates.user.indu=='null'?0:1;
                    iszw=dates.user.posi==''||dates.user.posi=='null'?0:1;
                    iskan=dates.user.port==''||dates.user.port=='null'?0:1;
                    isphon=dates.user.mobi==''||dates.user.mobi=='null'?0:1;
                    isyx=dates.user.mail==''||dates.user.mail=='null'?0:1;
                    isgsqc=dates.user.compName==''||dates.user.compName=='null'?0:1;
                    isgsjc=dates.user.compAlia==''||dates.user.compAlia=='null'?0:1;
                    iscz=dates.user.fax==''||dates.user.fax=='null'?0:1;
                    isdh=dates.user.phon==''||dates.user.phon=='null'?0:1;
                    isadd=dates.user.addr==''||dates.user.addr=='null'?0:1;
                    if(isxm==0||ishy==0||iszw==0||iskan==0||isphon==0||isyx==0||isgsqc==0||isgsjc==0||iscz==0||isdh==0||isadd==0){
                      notification.open(args);
                    }
                  }
                });
              }
            });
            //获取用户权限
            fetch(HTTPED+'api/users/'+date.user+'/?userName='+userName+'&token='+date.token+'&priv=true',{
              method: "get",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function(resa){
              if(resa.ok){
                resa.json().then(function(datea){
                  if(!datea.err){
                    sessionStorage.setItem("SESSIONADMI",datea.priv.admi);
                    sessionStorage.setItem("SESSIONADVA",datea.priv.adva);
                    sessionStorage.setItem("SESSIONPROV",datea.priv.prov);
                    sessionStorage.setItem("SESSIONCONT",datea.priv.cont);
                    sessionStorage.setItem("SESSIONPAYM",datea.priv.paym);
                    sessionStorage.setItem("SESSIONCASH",datea.priv.cash);
                  }
                });
              }
            });
            //获取系统权限
            fetch(HTTPED+'api/users/'+date.user+'/?userName='+userName+'&token='+date.token+'&systPriv=true',{
              method: "get",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function(resb){
              if(resb.ok){
                resb.json().then(function(dateb){
                  if(!dateb.err) {
                    sessionStorage.setItem("SESSIONSYSCONS", dateb.systPriv.cons);
                    sessionStorage.setItem("SESSIONSYSENQU", dateb.systPriv.enqu);
                    sessionStorage.setItem("SESSIONSYSREPL", dateb.systPriv.repl);
                    sessionStorage.setItem("SESSIONSYSRESP", dateb.systPriv.resp);
                  }
                });
              }
            });
            //跳转首页
            browserHistory.push({
              pathname:'/Home'
            });
          }else{
            message.error(date.errMsg);
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}

//获取最近询盘列表
export const GET_DLXP = 'GET_DLXP';

function get_dlxp(date) {
  return {
    type: GET_DLXP,
    err:date.err,
    errMsg:date.errMsg,
    dlxp:date.rows
  }
}

export function getdlxp(){
  return function(dispatch) {
    fetch(HTTPED+'api/lgPages/enqus/',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_dlxp(date));
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}


//获取最近咨询对象
export const GET_DLZX = 'GET_DLZX';

function get_dlzx(date) {
  return {
    type: GET_DLZX,
    err:date.err,
    errMsg:date.errMsg,
    dlzx:date.rows
  }
}

export function getdlzx(){
  return function(dispatch) {
    fetch(HTTPED+'api/lgPages/conss/',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_dlzx(date));
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}

//获取最近优势对象
export const GET_DLYJ = 'GET_DLYJ';

function get_dlyj(date) {
  return {
    type: GET_DLYJ,
    err:date.err,
    errMsg:date.errMsg,
    dlyj:date.rows
  }
}

export function getdlyj(){
  return function(dispatch) {
    fetch(HTTPED+'api/lgPages/advas/',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_dlyj(date));
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}

//获取最近服务优势对象
export const GET_DLFW = 'GET_DLFW';

function get_dlfw(date) {
  return {
    type: GET_DLFW,
    err:date.err,
    errMsg:date.errMsg,
    dlfw:date.rows
  }
}

export function getdlfw(){
  return function(dispatch) {
    fetch(HTTPED+'api/lgPages/conts/',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_dlfw(date));
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}

//获取最近舱位展示
export const GET_DLCW = 'GET_DLCW';

function get_dlcw(date) {
  return {
    type: GET_DLCW,
    err:date.err,
    errMsg:date.errMsg,
    dlcw:date.rows
  }
}

export function getdlcw(){
  return function(dispatch) {
    fetch(HTTPED+'api/lgPages/cabDisps/',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_dlcw(date));
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}
