/**
 * Created by Zing on 2016/6/20.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';
import md5 from 'md5';
import {browserHistory} from 'react-router'

//获取用户
export const GET_EMPLOYEES = 'GET_EMPLOYEES';

function get_employess(date) {
  return {
    type: GET_EMPLOYEES,
    err:date.err,
    errMsg:date.errMsg,
    user:date.user
  }
}

export function getyg(user,userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/users/'+user+'/?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            sessionStorage.setItem("SESSIONUNAME",date.user.name);
            sessionStorage.setItem("SESSIONCOMP",date.user.comp);
            sessionStorage.setItem("SESSIONUVIP",date.user.userVip);
            sessionStorage.setItem("SESSIONGUARPRIV",date.user.guarPriv);
            dispatch(get_employess(date));
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
//获取权限
export const GET_PRIV = 'GET_PRIV';
function get_priv(date) {
  return {
    type: GET_PRIV,
    err:date.err,
    errMsg:date.errMsg,
    priv:date.priv
  }
}

export function getqx(user,userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/users/'+user+'/?userName='+userName+'&token='+token+'&priv=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            sessionStorage.setItem("SESSIONADMI",date.priv.admi);
            sessionStorage.setItem("SESSIONADVA",date.priv.adva);
            sessionStorage.setItem("SESSIONPROV",date.priv.prov);
            sessionStorage.setItem("SESSIONCONT",date.priv.cont);
            sessionStorage.setItem("SESSIONPAYM",date.priv.paym);
            sessionStorage.setItem("SESSIONCASH",date.priv.cash);
            dispatch(get_priv(date));
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
//获取询盘
export const GET_INQUIRY = 'GET_INQUIRY';
function get_quiry(date) {
  return {
    type: GET_INQUIRY,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    quiry:date.rows
  }
}

export function getxp(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/?userName='+userName+'&token='+token+'&rowCount=2',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_quiry(date));
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

//获取回盘
export const GET_BACKPLATE = 'GET_BACKPLATE';

function get_backlate(date) {
  return {
    type: GET_BACKPLATE,
    err:date.err,
    errMsg:date.errMsg,
    totalRows:date.totalRows,
    rowCount:date.rowCount,
    backlate:date.rows
  }
}

export function gethp(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/repls/?userName='+userName+'&token='+token+'&rowCount=2',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_backlate(date));
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
//获取咨询
export const GET_ADVISORY = 'GET_ADVISORY';

function get_advisory(date) {
  return {
    type: GET_ADVISORY,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    advisory:date.rows
  }
}

export function getzx(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/conss/?userName='+userName+'&token='+token+'&rowCount=2',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_advisory(date));
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
//获取回复
export const GET_REPLY = 'GET_REPLY';

function get_reply(date) {
  return {
    type: GET_REPLY,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    reply:date.rows
  }
}

export function gethf(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/resps/?userName='+userName+'&token='+token+'&rowCount=2',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_reply(date));
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

//询盘详情展示
export const BOOM_XPSHOW = 'BOOM_XPSHOW';

function boom_xpshow(text,keys) {
  return {
    type: BOOM_XPSHOW,
    textxp: text,
    keysxp: keys
  }
}

export function xpshow(text,keys){
  return function(dispatch) {
    dispatch(boom_xpshow(text,keys));
  }
}

//回复详情展示
export const BOOM_HFSHOW = 'BOOM_HFSHOW';

function boom_hfshow(text,keys) {
  return {
    type: BOOM_HFSHOW,
    texthf: text,
    keyshf: keys
  }
}

export function hfshow(text,keys){
  return function(dispatch) {
    dispatch(boom_hfshow(text,keys));
  }
}

//咨询详情展示
export const BOOM_ZXSHOW = 'BOOM_ZXSHOW';

function boom_zxshow(text,keys) {
  return {
    type: BOOM_ZXSHOW,
    textzx: text,
    keyszx: keys
  }
}

export function zxshow(text,keys){
  return function(dispatch) {
    dispatch(boom_zxshow(text,keys));
  }
}

//供应商详情展示
export const BOOM_GYSSHOW = 'BOOM_GYSSHOW';

function boom_gysshow(text,keys) {
  return {
    type: BOOM_GYSSHOW,
    text: text,
    keys: keys
  }
}

export function gysshow(text,keys){
  return function(dispatch) {
    dispatch(boom_gysshow(text,keys));
  }
}


//运价优势详情展示
export const BOOM_YSSHOW = 'BOOM_YSSHOW';

function boom_ysshow(text,keys) {
  return {
    type: BOOM_YSSHOW,
    text: text,
    keys: keys
  }
}

export function ysshow(text,keys){
  return function(dispatch) {
    dispatch(boom_ysshow(text,keys));
  }
}

//服务优势详情展示
export const BOOM_YSSSHOW = 'BOOM_YSSSHOW';

function boom_yssshow(text,keys) {
  return {
    type: BOOM_YSSSHOW,
    text: text,
    keys: keys
  }
}

export function yssshow(text,keys){
  return function(dispatch) {
    dispatch(boom_yssshow(text,keys));
  }
}


//特种货运价优势详情展示
export const BOOM_TZHSHOW = 'BOOM_TZHSHOW';

function boom_tzhshow(text,keys) {
  return {
    type: BOOM_TZHSHOW,
    text: text,
    keys: keys
  }
}

export function tzhshow(text,keys){
  return function(dispatch) {
    dispatch(boom_tzhshow(text,keys));
  }
}

//回盘详情展示
export const BOOM_HPSHOW = 'BOOM_HPSHOW';

function boom_hpshow(text,keys) {
  return {
    type: BOOM_HPSHOW,
    texthp: text,
    keyshp: keys
  }
}

export function hpshow(text,keys){
  return function(dispatch) {
    dispatch(boom_hpshow(text,keys));
  }
}

//平台管理运价展示详情
export const BOOM_PMSHOW = 'BOOM_PMSHOW';

function boom_pmshow(text,keys) {
  return {
    type: BOOM_PMSHOW,
    text: text,
    keys: keys
  }
}

export function pmshow(text,keys){
  return function(dispatch) {
    dispatch(boom_pmshow(text,keys));
  }
}

//平台管理服务展示详情
export const BOOM_PMSHOWFW = 'BOOM_PMSHOWFW';

function boom_pmshowfw(text,keys) {
  return {
    type: BOOM_PMSHOWFW,
    text: text,
    keys: keys
  }
}

export function pmshowfw(text,keys){
  return function(dispatch) {
    dispatch(boom_pmshowfw(text,keys));
  }
}

//平台管理特种货运价展示详情
export const BOOM_PMSHOWSP = 'BOOM_PMSHOWSP';

function boom_pmshowsp(text,keys) {
  return {
    type: BOOM_PMSHOWSP,
    text: text,
    keys: keys
  }
}

export function pmshowsp(text,keys){
  return function(dispatch) {
    dispatch(boom_pmshowsp(text,keys));
  }
}

//员工详情
export const BOOM_EMSHOW = 'BOOM_EMSHOW';

function boom_emshow(text,keys) {
  return {
    type: BOOM_EMSHOW,
    text: text,
    keys: keys
  }
}

export function emshow(text,keys){
  return function(dispatch) {
    dispatch(boom_emshow(text,keys));
  }
}

//收款列表详情
export const BOOM_CKLXQ = 'BOOM_CKLXQ';

function boom_cklxq(text,keys) {
  return {
    type: BOOM_CKLXQ,
    textck: text,
    keysck: keys
  }
}

export function bhshow(text,keys){
  return function(dispatch) {
    dispatch(boom_cklxq(text,keys));
  }
}

//付款列表详情
export const BOOM_FKLXQ = 'BOOM_FKLXQ';

function boom_fklxq(text,keys) {
  return {
    type: BOOM_FKLXQ,
    textfk: text,
    keysfk: keys
  }
}

export function fkshow(text,keys){
  return function(dispatch) {
    dispatch(boom_fklxq(text,keys));
  }
}

//个人信息修改
export const GET_HGERXX = 'GET_HGERXX';

function get_hgerxx(date,isshow) {
  return {
    type: GET_HGERXX,
    err:date.err,
    errMsg:date.errMsg,
    usergrid:date.user,
    isshow:isshow
  }
}

export function gethgerxx(userName,token,userid,name,comp,compName,compAlia,indu,port,addr,posi,phon,fax,mobi,mobiBind,mail,qq){
  return function(dispatch) {
    fetch(HTTPED+'api/users/'+userid+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&name="+name+"&comp="+comp+"&compName="+compName+"&compAlia="+compAlia+"&indu="+indu+"&port="+port+"&addr="+addr+"&posi="+posi+"&phon="+phon+"&fax="+fax+"&mobi="+mobi+"&mobiBind="+mobiBind+"&mail="+mail+'&qq='+qq
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hgerxx(date,false));
            //message.success('修改成功');
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
export const GET_PORTS = 'GET_PORTS';

function get_ports(date) {
  return {
    type: GET_PORTS,
    err:date.err,
    errMsg:date.errMsg,
    xports:date.rows
  }
}

export function gethports(userName,token,name){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=10&name='+name,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ports(date));
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

//获取行业
export const GET_INDUS = 'GET_INDUS';

function get_indus(date) {
  return {
    type: GET_INDUS,
    err:date.err,
    errMsg:date.errMsg,
    indus:date.rows
  }
}

export function getindus(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/indus/?userName='+userName+'&token='+token+'&rowCount=0',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_indus(date));
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

//退出登录
export const GET_HTCDL = 'GET_HTCDL';

function get_htcdl(date) {
  return {
    type: GET_HTCDL,
    err:date.err,
    errMsg:date.errMsg
  }
}

export function gethtcdl(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/users/'+userName+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"token="+token+"&logout=true"
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_htcdl(date));
            message.success('退出成功');
            sessionStorage.clear();
            browserHistory.push({
              pathname:'/'
            });
          }else{
            message.success('退出成功');
            sessionStorage.clear();
            browserHistory.push({
              pathname:'/'
            });
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}

//修改密码
export const GET_HXGMM = 'GET_HXGMM';

function get_hxgmm(date) {
  return {
    type: GET_HXGMM,
    err:date.err,
    errMsg:date.errMsg
  }
}

export function gethxgmm(userName,token,oldPass,newPass){
  return function(dispatch) {
    fetch(HTTPED+'api/users/'+userName+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"token="+token+"&chgPass=true&oldPass="+md5(oldPass).toUpperCase()+"&newPass="+md5(newPass).toUpperCase()
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hxgmm(date));
            message.success('修改成功,请重新登录！');
            sessionStorage.clear();
            browserHistory.push({
              pathname:'/'
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

//获取企业信息
export const GET_HCOMPS = 'GET_HCOMPS';

function get_hcomps(date) {
  return {
    type: GET_HCOMPS,
    err:date.err,
    errMsg:date.errMsg,
    comps:date.comp
  }
}

export function gethcomps(userName,token,compid){
  return function(dispatch) {
    fetch(HTTPED+'api/comps/'+compid+'/?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            sessionStorage.setItem("SESSIONADMIACCO",date.comp.admiAcco);//企业管理员账号
            sessionStorage.setItem("SESSIONADMIENAB",date.comp.enab);//企业管理员启用
            dispatch(get_hcomps(date));
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}

//新建企业信息
export const GET_HXJQY = 'GET_HXJQY';

function get_hxjqy(date) {
  return {
    type: GET_HXJQY,
    err:date.err,
    errMsg:date.errMsg,
    compsid:date.comp
  }
}

export function gethxjqy(formdate){
  return function(dispatch) {
    fetch(HTTPED+'api/comps/',{
      method: "post",
      body:formdate
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_hxjqy(date));
            //message.success('升级成功!');
            /*sessionStorage.clear();
             browserHistory.push({
             pathname:'/'
             });*/
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

//重建企业信息
export const GET_HCJQY = 'GET_HCJQY';

function get_hcj(date) {
  return {
    type: GET_HCJQY,
    err:date.err,
    errMsg:date.errMsg,
    compcid:date.comp
  }
}

export function gethcj(formdate,compid){
  return function(dispatch) {
    fetch(HTTPED+'api/comps/'+compid+'/',{
      method: "put",
      body:formdate
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hcj(date));
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

//获取系统权限
export const GET_PRIVXP = 'GET_PRIVXP';

function get_privxp(date) {
  return {
    type: GET_PRIVXP,
    err:date.err,
    errMsg:date.errMsg,
    privxt:date.systPriv
  }
}

export function getprivxp(user,userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/users/'+user+'/?userName='+userName+'&token='+token+'&systPriv=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            sessionStorage.setItem("SESSIONSYSCONS",date.systPriv.cons);
            sessionStorage.setItem("SESSIONSYSENQU",date.systPriv.enqu);
            sessionStorage.setItem("SESSIONSYSREPL",date.systPriv.repl);
            sessionStorage.setItem("SESSIONSYSRESP",date.systPriv.resp);
            dispatch(get_privxp(date));
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

//获取信用余额
export const GET_XYYE = 'GET_XYYE';

function get_xyye(date) {
  return {
    type: GET_XYYE,
    err:date.err,
    errMsg:date.errMsg,
    residual:date.residual
  }
}

export function getxyye(userName,token,user){
  return function(dispatch) {
    fetch(HTTPED+'api/guars/?userName='+userName+'&token='+token+'&user='+user+'&residual=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(d2){
          if(!d2.err){
            dispatch(get_xyye(d2));
          }else{
            Backlogin(date.errMsg)
          }
        });
      }
    });
  }
}

//修改邮件提醒
export const GET_XXTXXG = 'GET_XXTXXG';

function get_xxtxxg(date) {
  return {
    type: GET_XXTXXG,
    err:date.err,
    errMsg:date.errMsg,
    xxtxxg:date.user
  }
}

export function getxxtxxg(userName,token,userid,nenq,nenf,nenc,nrpl,nrpf,nrpc,ncon,ncof,ncoc,nrsp,nrsf,nrsc,nawa){
  return function(dispatch) {
    fetch(HTTPED+'api/users/'+userid+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&nenq="+nenq+"&nenf="+nenf+"&nenc="+nenc+"&nrpl="+nrpl+"&nrpf="+nrpf+"&nrpc="+nrpc+"&ncon="+ncon+"&ncof="+ncof+"&ncoc="+ncoc+"&nrsp="+nrsp+"&nrsf="+nrsf+"&nrsc="+nrsc+"&nawa="+nawa+"&editMsg=true"
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_xxtxxg(date));
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

//Logbaidu 物贸百度

//获取所有运价
export const GET_SERVSALL = 'GET_SERVSALL';

function get_servsall(date) {
  return {
    type: GET_SERVSALL,
    err:date.err,
    errMsg:date.errMsg,
    servsall:date.rows
  }
}

export function getservsall(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+'&servType=1&rowCount=0',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_servsall(date));
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

//获取运价优势服务
export const GET_YJFW = 'GET_YJFW';

function get_yjfw(date) {
  return {
    type: GET_YJFW,
    err:date.err,
    errMsg:date.errMsg,
    yjser:date.rows
  }
}

export function getyjfw(userName,token){
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
            dispatch(get_yjfw(date));
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

//获取服务展示服务
export const GET_YJSFW = 'GET_YJSFW';

function get_yjsfw(date) {
  return {
    type: GET_YJSFW,
    err:date.err,
    errMsg:date.errMsg,
    yjsser:date.rows
  }
}

export function getyjsfw(userName,token){
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
            dispatch(get_yjsfw(date));
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

//获取服务优势具体服务根据服务
export const GET_YJSJTFWW = 'GET_YJSJTFWW';

function get_yjsjtfww(date) {
  return {
    type: GET_YJSJTFWW,
    err:date.err,
    errMsg:date.errMsg,
    yjsjtfww:date.rows
  }
}

export function getyjsjtfww(userName,token,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/servOptis/?userName='+userName+'&token='+token+'&rowCount=0&serv='+serv,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yjsjtfww(date));
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

//获取特种货运价展示服务
export const GET_YPFW = 'GET_YPFW';

function get_ypfw(date) {
  return {
    type: GET_YPFW,
    err:date.err,
    errMsg:date.errMsg,
    ypser:date.rows
  }
}

export function getypfw(userName,token){
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
            dispatch(get_ypfw(date));
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

//运价滚动加载
export const GET_YJLISTGD = 'GET_YJLISTGD';

function get_yjlistgd(date) {
  return {
    type: GET_YJLISTGD,
    err:date.err,
    errMsg:date.errMsg,
    resultAll:date.resultAll,
    rowCount:date.rowCount,
    yjlists:date.rows
  }
}

export function getyjlistgd(userName,token,pageIndex,serv,depaPort,destPort,carr,booking,freight,qing,shipSpace){
  return function(dispatch) {
    fetch(HTTPED+'api/disps/?userName='+userName+'&token='+token+"&rowCount=10&isAdva=true&pageIndex="+pageIndex+"&serv="+serv+"&depaPort="+depaPort+"&destPort="+destPort+"&carr="+carr+"&booking="+booking+"&freight="+freight+"&qing="+qing+"&shipSpace="+shipSpace,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yjlistgd(date));
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

//特种滚动加载
export const GET_YPLISTGD = 'GET_YPLISTGD';

function get_yplistgd(date) {
  return {
    type: GET_YPLISTGD,
    err:date.err,
    errMsg:date.errMsg,
    resultAll:date.resultAll,
    rowCount:date.rowCount,
    yplists:date.rows
  }
}

export function getyplistgd(userName,token,pageIndex,serv,depaPort){
  return function(dispatch) {
    fetch(HTTPED+'api/disps/?userName='+userName+'&token='+token+"&rowCount=10&isAdva=true&advaType=1&pageIndex="+pageIndex+"&serv="+serv+"&depaPort="+depaPort,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yplistgd(date));
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

//服务滚动加载
export const GET_YJSLISTGD = 'GET_YJSLISTGD';

function get_yjslistgd(date) {
  return {
    type: GET_YJSLISTGD,
    err:date.err,
    errMsg:date.errMsg,
    resultAll:date.resultAll,
    rowCount:date.rowCount,
    yjslists:date.rows
  }
}

export function getyjslistgd(userName,token,pageIndex,serv,servOpti,port){
  return function(dispatch) {
    fetch(HTTPED+'api/disps/?userName='+userName+'&token='+token+"&rowCount=10&isCont=true&pageIndex="+pageIndex+"&serv="+serv+"&servOpti="+servOpti+"&port="+port,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yjslistgd(date));
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


//获取港口 根据服务
export const GET_YJPORTS = 'GET_YJPORTS';

function get_yjports(date) {
  return {
    type: GET_YJPORTS,
    err:date.err,
    errMsg:date.errMsg,
    yjports:date.rows
  }
}

export function getyjports(userName,token,serv){
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
            dispatch(get_yjports(date));
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
export const GET_YJPORTSN = 'GET_YJPORTSN';

function get_yjportsn(date) {
  return {
    type: GET_YJPORTSN,
    err:date.err,
    errMsg:date.errMsg,
    yjportsn:date.rows
  }
}

export function getyjportsn(userName,token,serv,name){
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
            dispatch(get_yjportsn(date));
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
export const GET_KANZS = 'GET_KANZS';

function get_kanzs(date) {
  return {
    type: GET_KANZS,
    err:date.err,
    errMsg:date.errMsg,
    kanzs:date.rows
  }
}

export function getkanzs(userName,token,serv){
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
            dispatch(get_kanzs(date));
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

//获取最近港口目的地 带服务
export const GET_KANZSM = 'GET_KANZSM';

function get_kanzsm(date) {
  return {
    type: GET_KANZSM,
    err:date.err,
    errMsg:date.errMsg,
    kanzsm:date.rows
  }
}

export function getkanzsm(userName,token,serv){
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
            dispatch(get_kanzsm(date));
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
export const GET_YJCARRS = 'GET_YJCARRS';

function get_yjcarrs(date) {
  return {
    type: GET_YJCARRS,
    err:date.err,
    errMsg:date.errMsg,
    yjcarrs:date.rows
  }
}

export function getyjcarrs(userName,token,serv){
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
            dispatch(get_yjcarrs(date));
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

//搜索运价展示厅列表
export const GET_YJLISTALL = 'GET_YJLISTALL';

function get_yjlist(date) {
  return {
    type: GET_YJLISTALL,
    err:date.err,
    errMsg:date.errMsg,
    resultAll:date.resultAll,
    rowCount:date.rowCount,
    yjlists:date.rows
  }
}

export function getyjlist(userName,token,pageIndex,serv,depaPort,destPort,carr,booking,freight,qing,shipSpace){
  return function(dispatch) {
    fetch(HTTPED+'api/disps/?userName='+userName+'&token='+token+"&rowCount=100&isAdva=true&pageIndex="+pageIndex+"&serv="+serv+"&depaPort="+depaPort+"&destPort="+destPort+"&carr="+carr+"&booking="+booking+"&freight="+freight+"&qing="+qing+"&shipSpace="+shipSpace,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yjlist(date));
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

//搜索特种展示厅列表
export const GET_YPLISTALL = 'GET_YPLISTALL';

function get_yplist(date) {
  return {
    type: GET_YPLISTALL,
    err:date.err,
    errMsg:date.errMsg,
    resultAll:date.resultAll,
    rowCount:date.rowCount,
    yplists:date.rows
  }
}

export function getyplist(userName,token,pageIndex,serv,depaPort){
  return function(dispatch) {
    fetch(HTTPED+'api/disps/?userName='+userName+'&token='+token+"&rowCount=100&isAdva=true&advaType=1&pageIndex="+pageIndex+"&serv="+serv+"&depaPort="+depaPort,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_yplist(date));
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

//搜索服务展示厅列表
export const GET_FWLISTALL = 'GET_FWLISTALL';

function get_fwlist(date) {
  return {
    type: GET_FWLISTALL,
    err:date.err,
    errMsg:date.errMsg,
    resultAll:date.resultAll,
    rowCount:date.rowCount,
    fwlists:date.rows
  }
}

export function getfwlist(userName,token,pageIndex,serv,servOpti,port){
  return function(dispatch) {
    fetch(HTTPED+'api/disps/?userName='+userName+'&token='+token+"&rowCount=100&isCont=true&pageIndex="+pageIndex+"&serv="+serv+"&servOpti="+servOpti+"&port="+port,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_fwlist(date));
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

//获取个人信息
export const GET_YJUINFO= 'GET_YJUINFO';

function get_yjuinfo(date,deposit) {
  return {
    type: GET_YJUINFO,
    err:date.err,
    errMsg:date.errMsg,
    yjuinfo:date.user,
    deposit:deposit
  }
}

export function getyjuinfo(userName,token,userid){
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
                    dispatch(get_yjuinfo(date,d3.deposit));
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

//新建供应商
export const POST_GYSNEWYJ = 'POST_GYSNEWYJ';

function post_gysnewyj(date) {
  return {
    type: POST_GYSNEWYJ,
    err:date.err,
    errMsg:date.errMsg,
    provids:date.prov
  }
}

export function postgysnewyj(userName,token,serv,port,cont,labe){
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
            dispatch(post_gysnewyj(date));
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

//搜索会员展示厅列表
export const GET_VIPS = 'GET_VIPS';

function get_vips(date) {
  return {
    type: GET_VIPS,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    vipl:date.rows
  }
}

export function getvips(userName,token,indu,port,compAlia,userAcco,certNo){
  let str='';
  if(indu!=''){
    str+='&indu='+indu;
  }
  if(port!=''){
    str+='&port='+port;
  }
  if(compAlia!=''){
    str+='&compAlia='+compAlia;
  }
  if(userAcco!=''){
    str+='&userAcco='+userAcco;
  }
  if(certNo!=''){
    str+='&certNo='+certNo;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/disps/?userName='+userName+'&token='+token+'&rowCount=0&isVip=true'+str,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_vips(date));
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
export const GET_WUMAOG = 'GET_WUMAOG';

function get_wumaoge(date) {
  return {
    type: GET_WUMAOG,
    err:date.err,
    errMsg:date.errMsg,
    wumaoge:date.user
  }
}

export function getwumaoge(userName,token,userid){
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
            dispatch(get_wumaoge(date));
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
export const GET_HOTJGYS= 'GET_HOTJGYS';

function get_hotjgys(date) {
  return {
    type: GET_HOTJGYS,
    err:date.err,
    errMsg:date.errMsg,
    tjgys:date.rows
  }
}

export function gethotjgys(userName,token,serv,name){
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
            dispatch(get_hotjgys(date));
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

//获取运价展示详情
export const GET_PTYJXQ= 'GET_PTYJXQ';

function get_ptyjxq(date) {
  return {
    type: GET_PTYJXQ,
    err:date.err,
    errMsg:date.errMsg,
    ptyjxq:date.adva,
    scors:date.adva.scors
  }
}

export function getptyjxq(userName,token,disp){
  return function(dispatch) {
    fetch(HTTPED+'api/disps/'+ disp +'/?userName='+userName+'&token='+token+'&isAdva=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ptyjxq(date));
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

//获取服务展示详情
export const GET_FWYJXQ= 'GET_FWYJXQ';

function get_fwyjxq(date) {
  return {
    type: GET_FWYJXQ,
    err:date.err,
    errMsg:date.errMsg,
    fwyjxq:date.cont,
    fwscors:date.cont.scors
  }
}

export function getfwyjxq(userName,token,disp){
  return function(dispatch) {
    fetch(HTTPED+'api/disps/'+ disp +'/?userName='+userName+'&token='+token+'&isCont=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_fwyjxq(date));
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

//获取验证是否正在认证
export const GET_SFZZRZ= 'GET_SFZZRZ';

function get_sfzzrz(date) {
  return {
    type: GET_SFZZRZ,
    err:date.err,
    errMsg:date.errMsg,
    isAudi:date.isAudi
  }
}

export function getsfzzrz(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/vips/?userName='+userName+'&token='+token+'&chkAudi=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_sfzzrz(date));
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

//申请认证
export const POST_SQRZ = 'POST_SQRZ';

function post_sqrz(date) {
    return {
        type: POST_SQRZ,
        err:date.err,
        errMsg:date.errMsg,
        memb:date.memb
    }
}

export function postsqrz(userName,token){
    return function(dispatch) {
        fetch(HTTPED+'api/vips/',{
            method: "post",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body:"userName="+userName+"&token="+token
        }).then(function(res){
            if(res.ok){
                res.json().then(function(date){
                    if(!date.err){
                        dispatch(post_sqrz(date));
                        message.success('申请成功，请等待认证');
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