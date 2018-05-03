/**
 * Created by Zing on 2016/8/22.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//循环获取该公司用户下管理员账号信息
function getadmininfohp(arr){
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
export const GET_HPSER = 'GET_HPSER';

function get_hpser(date) {
  return {
    type: GET_HPSER,
    err:date.err,
    errMsg:date.errMsg,
    hser:date.rows
  }
}

export function gethpser(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+'&rowCount=0&servType=1',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hpser(date));
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

//获取回盘人（公司用户）
export const GET_HPPEO = 'GET_HPPEO';

function get_hppeo(date) {
  return {
    type: GET_HPPEO,
    err:date.err,
    errMsg:date.errMsg,
    hppeo:date.rows
  }
}

export function gethppeos(userName,token,user,comp){
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
            dispatch(get_hppeo(date));
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

//获取询盘人详情
export const GET_HPXPPEO = 'GET_HPXPPEO';

function get_hpxppeo(date) {
  return {
    type: GET_HPXPPEO,
    err:date.err,
    errMsg:date.errMsg,
    hpxppeo:date.rows
  }
}

export function gethpxppeo(userName,token,userAcco){
  return function(dispatch) {
    fetch(HTTPED+'api/users/?userName='+userName+'&token='+token+'&rowCount=0&userAcco='+userAcco,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hpxppeo(date));
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
export const GET_HPKA = 'GET_HPKA';

function get_hpka(date) {
  return {
    type: GET_HPKA,
    err:date.err,
    errMsg:date.errMsg,
    ports:date.rows
  }
}

export function gethpka(userName,token){
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
            dispatch(get_hpka(date));
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

//初始化回盘列表
export const GET_HPLISTC = 'GET_HPLISTC';

function get_hplistc(date) {
  return {
    type: GET_HPLISTC,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    hplists:date.rows
  }
}

export function gethplistc(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/repls/?userName='+userName+'&token='+token+'&rowCount=10',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hplistc(date));
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
export const GET_HPLISTALL = 'GET_HPLISTALL';

function get_hplist(date) {
  return {
    type: GET_HPLISTALL,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    hplists:date.rows
  }
}

export function gethplist(userName,token,pageIndex,serv,unreplOnly,depaPort,destPort,skipOnly,enquStat,enquer,repler,replTimeFrom,replTimeTo){
  let str='',str1='',str2='',str3='';
  if(unreplOnly){
    str="&unreplOnly=true";
  }
  if(skipOnly){
    str1="&skipOnly=true";
  }
  if(enquer!=''){
    str2="&enquer="+enquer;
  }
  if(enquStat!=0){
    str3="&enquStat="+enquStat;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/repls/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&serv="+serv+"&depaPort="+depaPort+"&destPort="+destPort+"&repler="+repler+"&replTimeFrom="+replTimeFrom+"&replTimeTo="+replTimeTo+str+str1+str2+str3,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hplist(date));
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
export const GET_HPLISTGD = 'GET_HPLISTGD';

function get_hplistgd(date) {
  return {
    type: GET_HPLISTGD,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    hplists:date.rows
  }
}

export function gethplistgd(userName,token,pageIndex,serv,unreplOnly,depaPort,destPort,skipOnly,enquStat,enquer,repler,replTimeFrom,replTimeTo){
  let str='',str1='',str2='',str3='';
  if(unreplOnly){
    str="&unreplOnly=true";
  }
  if(skipOnly){
    str1="&skipOnly=true";
  }
  if(enquer!=''){
    str2="&enquer="+enquer;
  }
  if(enquStat!=0){
    str3="&enquStat="+enquStat;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/repls/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&serv="+serv+"&depaPort="+depaPort+"&destPort="+destPort+"&repler="+repler+"&replTimeFrom="+replTimeFrom+"&replTimeTo="+replTimeTo+str+str1+str2+str3,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hplistgd(date));
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

//获取询盘详情
export const GET_HPXPXQ = 'GET_HPXPXQ';

function get_hpxpxq(date,str1,str3) {
  return {
    type: GET_HPXPXQ,
    err:date.err,
    errMsg:date.errMsg,
    enqudx:date.enqu,
    carrsary:str1,
    filename:str3
  }
}

export function gethpxpxq(userName,token,enquid){
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/'+enquid+'/?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            let str1='',str3='';
            if(date.enqu.carrs!=null){
              if(date.enqu.carrs!='[]'){
                let issj=JSON.parse(date.enqu.carrs);
                for(let i of issj){
                  str1+=i.carrName+',';
                }
                str1=str1.substring(0,str1.length-1);
              }else{
                str1='不限';
              }
            }
            str3=HTTPED.substring(0,HTTPED.length-1)+date.enqu.file;
            dispatch(get_hpxpxq(date,str1,str3));
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

//获取回盘详情
export const GET_HPHPXQ = 'GET_HPHPXQ';

function get_hphpxq(date,str2,iscz) {
  return {
    type: GET_HPHPXQ,
    err:date.err,
    errMsg:date.errMsg,
    repldx:date.repl,
    cctoary:str2,
    iscz:iscz
  }
}

export function gethphpxq(userName,token,replid,userid){
  return function(dispatch) {
    fetch(HTTPED+'api/repls/'+replid+'/?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            let str2='',iscz=false;
            if(date.repl.ccto!=null&&date.repl.ccto!='[,]'){
              let cctor=date.repl.ccto;
              let cctors='';
              if(cctor.indexOf('[,')<0){
                cctors=cctor;
              }else{
                cctors=cctor.replace('[,','[');
              }
              let iscs=JSON.parse(cctors);
              for(let v of iscs){
                str2+=v.name+',';
                if(v.user==userid){
                  iscz=true;
                }
              }
              str2=str2.substring(0,str2.length-1);
            }
            dispatch(get_hphpxq(date,str2,iscz));
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


//获取承运商（承运商）
export const GET_HPCARRS = 'GET_HPCARRS';

function get_hpcarrs(date) {
  return {
    type: GET_HPCARRS,
    err:date.err,
    errMsg:date.errMsg,
    carrs:date.rows
  }
}

export function gethpcarrs(userName,token,serv){
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
            dispatch(get_hpcarrs(date));
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

//发送（重回）(新建)
export const GET_HPXJ= 'GET_HPXJ';

function get_hpxj(date,isshow) {
  return {
    type: GET_HPXJ,
    err:date.err,
    errMsg:date.errMsg,
    replid:date.repl,
    isshow:isshow
  }
}

//供舱新建
export const GET_GCXJ= 'GET_GCXJ';

function get_gcxj(date) {
  return {
    type: GET_GCXJ,
    err:date.err,
    errMsg:date.errMsg,
    cabRepl:date.cabRepl
  }
}

export function gethpxj(user,userName,token,repl,carr,tranPort,sailTime,closTime,sailDays,freiCurr,GP20,GP40,NOR40,HQ40,HQ45,RTMi,KGAi,RF20,RF40,FR20,FR40,replMemo,expiDate,ccto,replT,cabEnqu,trans,voyage,sailTimeT,lastShutTime,lastCabTime,cabAddr){
  return function(dispatch) {
    fetch(HTTPED+'api/repls/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&user="+user+"&repl="+repl+"&carr="+carr+"&tranPort="+tranPort+"&sailTime="+sailTime+"&closTime="+closTime+"&sailDays="+sailDays+"&freiCurr="+freiCurr+"&GP20="+GP20+"&GP40="+GP40+"&NOR40="+NOR40+"&HQ40="+HQ40+"&HQ45="+HQ45+"&RTMi="+RTMi+"&KGAi="+KGAi+"&RF20="+RF20+"&RF40="+RF40+"&FR20="+FR20+"&FR40="+FR40+"&replMemo="+replMemo+"&expiDate="+expiDate+"&ccto="+ccto+ "&cabEnqu=" + cabEnqu
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hpxj(date,false));
            if(cabEnqu>0) {
              fetch(HTTPED + 'api/cabRepls/', {
                method: "post",
                headers: {
                  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body: "userName=" + userName + "&token=" + token + "&repl=" + replT + "&cabEnqu=" + cabEnqu + "&trans=" + trans + "&voyage=" + voyage + "&sailTime=" + sailTimeT + "&lastShutTime=" + lastShutTime+ "&lastCabTime=" + lastCabTime+ "&cabAddr=" + cabAddr
              }).then(function (res) {
                if (res.ok) {
                  res.json().then(function (date1) {
                    if (!date1.err) {
                      get_gcxj(get_hpxj(date1, false));
                    } else {
                      Backlogin(date1.errMsg)
                    }
                  });
                }
              });
            }
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

//获取最近港口起运地
export const GET_HPPORTSZJ = 'GET_HPPORTSZJ';

function get_hpportszj(date) {
  return {
    type: GET_HPPORTSZJ,
    err:date.err,
    errMsg:date.errMsg,
    hpportszj:date.rows
  }
}

export function gethpportszj(userName,token,serv){
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
            dispatch(get_hpportszj(date));
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

//获取最近港口目的地
export const GET_HPPORTSZJM = 'GET_HPPORTSZJM';

function get_hpportszjm(date) {
  return {
    type: GET_HPPORTSZJM,
    err:date.err,
    errMsg:date.errMsg,
    hpportszjm:date.rows
  }
}

export function gethpportszjm(userName,token,serv){
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
            dispatch(get_hpportszjm(date));
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
export const GET_HPCARRSCY = 'GET_HPCARRSCY';

function get_hpcarrscy(date) {
  return {
    type: GET_HPCARRSCY,
    err:date.err,
    errMsg:date.errMsg,
    hpcarrscy:date.rows
  }
}

export function gethpcarrscy(userName,token,serv){
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
            dispatch(get_hpcarrscy(date));
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
export const GET_HPSENDTO = 'GET_HPSENDTO';

function get_hpsendto(date) {
  return {
    type: GET_HPSENDTO,
    err:date.err,
    errMsg:date.errMsg,
    hpprovs:date.rows
  }
}

export function gethpsendto(userName,token,serv,depaPort,destPort){
  return function(dispatch) {
    fetch(HTTPED+'api/provs/?userName='+userName+'&token='+token+'&rowCount=0&serv='+serv+'&depaPort='+depaPort+'&destPort='+destPort+'&useProv=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hpsendto(date));
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
export const GET_HPGCCTO = 'GET_HPGCCTO';

function get_hpccto(date,adminlinfo) {
  return {
    type: GET_HPGCCTO,
    err:date.err,
    errMsg:date.errMsg,
    hpcctos:date.rows,
    adminlinfohp:adminlinfo
  }
}

export function gethpccto(userName,token,comp){
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
            let adminlinfo=getadmininfohp(date.rows);
            dispatch(get_hpccto(date,adminlinfo));
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
export const GET_HPGWTO = 'GET_HPGWTO';

function get_hpwtuo(date) {
  return {
    type: GET_HPGWTO,
    err:date.err,
    errMsg:date.errMsg,
    hpwtuo:date.rows
  }
}

export function gethpwtuo(userName,token,comp){
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
            dispatch(get_hpwtuo(date));
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

//发送（新增询盘空运）
export const GET_HPXADDAIR = 'GET_HPXADDAIR';

function get_hpxaddair(date) {
  return {
    type: GET_HPXADDAIR,
    err:date.err,
    errMsg:date.errMsg,
    hpenquid:date.enqu
  }
}

export function gethpxaddair(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,packType,wate,bulk,itemName,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr,teamAnge){
  let str='';
  if(provType=='1'){
    str="&cabServ="+cabServ+"&cabProv="+cabProv;
  }else{
    str="&cabEnqu="+cabEnqu;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&user="+user+"&depaPort="+depaPort+"&destPort="+destPort+"&sendTo="+sendTo+"&ccto="+ccto+"&mngr="+mngr+"&match="+match+"&compDate="+compDate+"&carrs="+carrs+"&tranship="+tranship+"&packType="+packType+"&wate="+wate+"&bulk="+bulk+"&itemName="+itemName+"&expiDate="+expiDate+"&enquMemo="+enquMemo
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hpxaddair(date));
            //新建求仓
            if(isbh){
              fetch(HTTPED+'api/cabEnqus/',{
                method: "post",
                headers: {
                  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body:"userName="+userName+"&token="+token+"&enqu="+date.enqu+"&depo="+depo+"&cabFee="+cabFee+"&enquTar="+enquTar+"&replTar="+replTar+"&provType="+provType+"&curr="+curr+"&teamAnge="+teamAnge+str
              }).then(function(res){
                if(res.ok){
                  res.json().then(function(date1){
                    if(!date1.err){
                      dispatch(get_newqc(date1));
                    }else{
                      message.error(date1.errMsg);
                    }
                  });
                }
              });
            }
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

//新建求仓
export const GET_NEWQCB = 'GET_NEWQCB';

function get_newqcb(date) {
  return {
    type: GET_NEWQCB,
    err:date.err,
    errMsg:date.errMsg,
    cabEnqu:date.cabEnqu
  }
}


//发送（新增询盘普箱）
export const GET_HPXADDFCL = 'GET_HPXADDFCL';

function get_hpxaddfcl(date) {
  return {
    type: GET_HPXADDFCL,
    err:date.err,
    errMsg:date.errMsg,
    hpenquid:date.enqu
  }
}

export function gethpxaddfcl(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,GP20,GP20Wate,GP40,NOR40,HQ40,HQ45,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr){
  let str='';
  if(provType=='1'){
    str="&cabServ="+cabServ+"&cabProv="+cabProv;
  }else{
    str="&cabEnqu="+cabEnqu;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&user="+user+"&depaPort="+depaPort+"&destPort="+destPort+"&sendTo="+sendTo+"&ccto="+ccto+"&mngr="+mngr+"&match="+match+"&compDate="+compDate+"&carrs="+carrs+"&tranship="+tranship+"&GP20="+GP20+"&GP20Wate="+GP20Wate+"&GP40="+GP40+"&NOR40="+NOR40+"&HQ40="+HQ40+"&HQ45="+HQ45+"&expiDate="+expiDate+"&enquMemo="+enquMemo
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hpxaddfcl(date));
            //新建求仓
            if(isbh){
              fetch(HTTPED+'api/cabEnqus/',{
                method: "post",
                headers: {
                  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body:"userName="+userName+"&token="+token+"&enqu="+date.enqu+"&depo="+depo+"&cabFee="+cabFee+"&enquTar="+enquTar+"&replTar="+replTar+"&provType="+provType+"&curr="+curr+str
              }).then(function(res){
                if(res.ok){
                  res.json().then(function(date1){
                    if(!date1.err){
                      dispatch(get_newqcb(date1));
                    }else{
                      message.error(date1.errMsg);
                    }
                  });
                }
              });
            }
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

//发送（新增询盘拼箱）
export const GET_HPXADDLCL = 'GET_HPXADDLCL';

function get_hpxaddlcl(date) {
  return {
    type: GET_HPXADDLCL,
    err:date.err,
    errMsg:date.errMsg,
    hpenquid:date.enqu
  }
}

export function gethpxaddlcl(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,packType,recr,wate,bulk,itemName,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr,teamAnge){
  let str='';
  if(provType=='1'){
    str="&cabServ="+cabServ+"&cabProv="+cabProv;
  }else{
    str="&cabEnqu="+cabEnqu;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&user="+user+"&depaPort="+depaPort+"&destPort="+destPort+"&sendTo="+sendTo+"&ccto="+ccto+"&mngr="+mngr+"&match="+match+"&compDate="+compDate+"&carrs="+carrs+"&tranship="+tranship+"&packType="+packType+"&recr="+recr+"&wate="+wate+"&bulk="+bulk+"&itemName="+itemName+"&expiDate="+expiDate+"&enquMemo="+enquMemo
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hpxaddlcl(date));
            //新建求仓
            if(isbh){
              fetch(HTTPED+'api/cabEnqus/',{
                method: "post",
                headers: {
                  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body:"userName="+userName+"&token="+token+"&enqu="+date.enqu+"&depo="+depo+"&cabFee="+cabFee+"&enquTar="+enquTar+"&replTar="+replTar+"&provType="+provType+"&curr="+curr+"&teamAnge="+teamAnge+str
              }).then(function(res){
                if(res.ok){
                  res.json().then(function(date1){
                    if(!date1.err){
                      dispatch(get_newqc(date1));
                    }else{
                      message.error(date1.errMsg);
                    }
                  });
                }
              });
            }
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


//发送（新增询盘挂衣箱）
export const GET_HPXADDHANG = 'GET_HPXADDHANG';

function get_hpxaddhang(date) {
  return {
    type: GET_HPXADDHANG,
    err:date.err,
    errMsg:date.errMsg,
    hpenquid:date.enqu
  }
}

export function gethpxaddhang(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,GP20,GP20Wate,GP40,HQ40,HQ45,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr){
  let str='';
  if(provType=='1'){
    str="&cabServ="+cabServ+"&cabProv="+cabProv;
  }else{
    str="&cabEnqu="+cabEnqu;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&user="+user+"&depaPort="+depaPort+"&destPort="+destPort+"&sendTo="+sendTo+"&ccto="+ccto+"&mngr="+mngr+"&match="+match+"&compDate="+compDate+"&carrs="+carrs+"&tranship="+tranship+"&GP20="+GP20+"&GP20Wate="+GP20Wate+"&GP40="+GP40+"&HQ40="+HQ40+"&HQ45="+HQ45+"&expiDate="+expiDate+"&enquMemo="+enquMemo
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hpxaddhang(date));
            //新建求仓
            if(isbh){
              fetch(HTTPED+'api/cabEnqus/',{
                method: "post",
                headers: {
                  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body:"userName="+userName+"&token="+token+"&enqu="+date.enqu+"&depo="+depo+"&cabFee="+cabFee+"&enquTar="+enquTar+"&replTar="+replTar+"&provType="+provType+"&curr="+curr+str
              }).then(function(res){
                if(res.ok){
                  res.json().then(function(date1){
                    if(!date1.err){
                      dispatch(get_newqcb(date1));
                    }else{
                      message.error(date1.errMsg);
                    }
                  });
                }
              });
            }
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

//发送（新增询盘冷冻箱）
export const GET_HPXADDREEFER = 'GET_HPXADDREEFER';

function get_hpxaddreefer(date) {
  return {
    type: GET_HPXADDREEFER,
    err:date.err,
    errMsg:date.errMsg,
    hpenquid:date.enqu
  }
}

export function gethpxaddreefer(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,RF20,RF20Wate,RF40,RF40Wate,shpr,temp,itemName,expiDate,enquMemo){
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&user="+user+"&depaPort="+depaPort+"&destPort="+destPort+"&sendTo="+sendTo+"&ccto="+ccto+"&mngr="+mngr+"&match="+match+"&compDate="+compDate+"&carrs="+carrs+"&tranship="+tranship+"&RF20="+RF20+"&RF20Wate="+RF20Wate+"&RF40="+RF40+"&RF40Wate="+RF40Wate+"&shpr="+shpr+"&temp="+temp+"&itemName="+itemName+"&expiDate="+expiDate+"&enquMemo="+enquMemo
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hpxaddreefer(date));
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

//回盘忽略
export const GET_HPHL = 'GET_HPHL';

function get_hphl(date) {
  return {
    type: GET_HPHL,
    err:date.err,
    errMsg:date.errMsg,
    hlreplid:date.repl
  }
}

export function gethphl(userName,token,replid){
  return function(dispatch) {
    fetch(HTTPED+'api/repls/'+replid+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&skip=true"
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_hphl(date));
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

//回盘恢复
export const GET_HPHF = 'GET_HPHF';

function get_hphf(date) {
  return {
    type: GET_HPHF,
    err:date.err,
    errMsg:date.errMsg,
    hfreplid:date.repl
  }
}

export function gethphf(userName,token,replid){
  return function(dispatch) {
    fetch(HTTPED+'api/repls/'+replid+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&reco=true"
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_hphf(date));
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

//获取个人信息（用户详情）
export const GET_HPPEOINFO = 'GET_HPPEOINFO';

function get_peoinfo(date,deposit) {
  return {
    type: GET_HPPEOINFO,
    err:date.err,
    errMsg:date.errMsg,
    peoinfo:date.user,
    deposit:deposit
  }
}

export function getpeoinfo(userName,token,userid){
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
                    dispatch(get_peoinfo(date,d3.deposit));
                  }
                });
              }
            }, function(e) {
              message.error("连接服务器失败，请联系管理员！");
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

//获取该服务港口
export const GET_HPPORTSF = 'GET_HPPORTSF';

function get_portshf(date) {
  return {
    type: GET_HPPORTSF,
    err:date.err,
    errMsg:date.errMsg,
    hportsf:date.rows
  }
}

export function getportshf(userName,token,serv){
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
            dispatch(get_portshf(date));
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

//发送（新增询盘FR）
export const GET_XADDHPFR = 'GET_XADDHPFR';

function get_xaddfrhp(date) {
  return {
    type: GET_XADDHPFR,
    err:date.err,
    errMsg:date.errMsg,
    hpenquid:date.enqu
  }
}

export function getxaddfrhp(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,FR20,FR20Wate,FR40,FR40Wate,leng,widt,high,itemName,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr){
  let str='';
  if(provType=='1'){
    str="&cabServ="+cabServ+"&cabProv="+cabProv;
  }else{
    str="&cabEnqu="+cabEnqu;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&user="+user+"&depaPort="+depaPort+"&destPort="+destPort+"&sendTo="+sendTo+"&ccto="+ccto+"&mngr="+mngr+"&match="+match+"&compDate="+compDate+"&carrs="+carrs+"&tranship="+tranship+"&FR20="+FR20+"&FR20Wate="+FR20Wate+"&FR40="+FR40+"&FR40Wate="+FR40Wate+"&leng="+leng+"&widt="+widt+"&high="+high+"&itemName="+itemName+"&expiDate="+expiDate+"&enquMemo="+enquMemo
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_xaddfrhp(date));
            //新建求仓
            if(isbh){
              fetch(HTTPED+'api/cabEnqus/',{
                method: "post",
                headers: {
                  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body:"userName="+userName+"&token="+token+"&enqu="+date.enqu+"&depo="+depo+"&cabFee="+cabFee+"&enquTar="+enquTar+"&replTar="+replTar+"&provType="+provType+"&curr="+curr+str
              }).then(function(res){
                if(res.ok){
                  res.json().then(function(date1){
                    if(!date1.err){
                      dispatch(get_newqcb(date1));
                    }else{
                      message.error(date1.errMsg);
                    }
                  });
                }
              });
            }
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

//发送（新增询盘DG）
export const GET_XADDHPDG = 'GET_XADDHPDG';

function get_xaddhpdg(date) {
  return {
    type: GET_XADDHPDG,
    err:date.err,
    errMsg:date.errMsg,
    hpenquid:date.enqu
  }
}

export function getxaddhpdg(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,GP20,GP20Wate,GP40,HQ40,clas,unno,itemName,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr){
  let str='';
  if(provType=='1'){
    str="&cabServ="+cabServ+"&cabProv="+cabProv;
  }else{
    str="&cabEnqu="+cabEnqu;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&user="+user+"&depaPort="+depaPort+"&destPort="+destPort+"&sendTo="+sendTo+"&ccto="+ccto+"&mngr="+mngr+"&match="+match+"&compDate="+compDate+"&carrs="+carrs+"&tranship="+tranship+"&GP20="+GP20+"&GP20Wate="+GP20Wate+"&GP40="+GP40+"&HQ40="+HQ40+"&clas="+clas+"&unno="+unno+"&itemName="+itemName+"&expiDate="+expiDate+"&enquMemo="+enquMemo
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_xaddhpdg(date));
            //新建求仓
            if(isbh){
              fetch(HTTPED+'api/cabEnqus/',{
                method: "post",
                headers: {
                  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body:"userName="+userName+"&token="+token+"&enqu="+date.enqu+"&depo="+depo+"&cabFee="+cabFee+"&enquTar="+enquTar+"&replTar="+replTar+"&provType="+provType+"&curr="+curr+str
              }).then(function(res){
                if(res.ok){
                  res.json().then(function(date1){
                    if(!date1.err){
                      dispatch(get_newqcb(date1));
                    }else{
                      message.error(date1.errMsg);
                    }
                  });
                }
              });
            }
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

//发送（新增询盘OT）
export const GET_XADDHPOT = 'GET_XADDHPOT';

function get_xaddhpot(date) {
  return {
    type: GET_XADDHPOT,
    err:date.err,
    errMsg:date.errMsg,
    hpenquid:date.enqu
  }
}

export function getxaddhpot(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,OT20,OT20Wate,OT40,OT40Wate,leng,widt,high,itemName,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr){
  let str='';
  if(provType=='1'){
    str="&cabServ="+cabServ+"&cabProv="+cabProv;
  }else{
    str="&cabEnqu="+cabEnqu;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&user="+user+"&depaPort="+depaPort+"&destPort="+destPort+"&sendTo="+sendTo+"&ccto="+ccto+"&mngr="+mngr+"&match="+match+"&compDate="+compDate+"&carrs="+carrs+"&tranship="+tranship+"&FR20="+OT20+"&FR20Wate="+OT20Wate+"&FR40="+OT40+"&FR40Wate="+OT40Wate+"&leng="+leng+"&widt="+widt+"&high="+high+"&itemName="+itemName+"&expiDate="+expiDate+"&enquMemo="+enquMemo
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_xaddhpot(date));
            //新建求仓
            if(isbh){
              fetch(HTTPED+'api/cabEnqus/',{
                method: "post",
                headers: {
                  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body:"userName="+userName+"&token="+token+"&enqu="+date.enqu+"&depo="+depo+"&cabFee="+cabFee+"&enquTar="+enquTar+"&replTar="+replTar+"&provType="+provType+"&curr="+curr+str
              }).then(function(res){
                if(res.ok){
                  res.json().then(function(date1){
                    if(!date1.err){
                      dispatch(get_newqcb(date1));
                    }else{
                      message.error(date1.errMsg);
                    }
                  });
                }
              });
            }
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

//发送（新增询盘BB）
export const GET_XADDHPBB = 'GET_XADDHPBB';

function get_xaddhpbb(date) {
  return {
    type: GET_XADDHPBB,
    err:date.err,
    errMsg:date.errMsg,
    hpenquid:date.enqu
  }
}

export function getxaddhpbb(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,tranship,item,leng,widt,high,itemName,expiDate,enquMemo,wate){
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&user="+user+"&depaPort="+depaPort+"&destPort="+destPort+"&sendTo="+sendTo+"&ccto="+ccto+"&mngr="+mngr+"&match="+match+"&compDate="+compDate+"&tranship="+tranship+"&item="+item+"&leng="+leng+"&widt="+widt+"&high="+high+"&itemName="+itemName+"&expiDate="+expiDate+"&enquMemo="+enquMemo+"&wate="+wate
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_xaddhpbb(date,false));
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

//发送（新增询盘RORO）
export const GET_XADDHPRORO = 'GET_XADDHPRORO';

function get_xaddhproro(date) {
  return {
    type: GET_XADDHPRORO,
    err:date.err,
    errMsg:date.errMsg,
    hpenquid:date.enqu
  }
}

export function getxaddhproro(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,tranship,item,leng,widt,high,itemName,expiDate,enquMemo,wate){
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&user="+user+"&depaPort="+depaPort+"&destPort="+destPort+"&sendTo="+sendTo+"&ccto="+ccto+"&mngr="+mngr+"&match="+match+"&compDate="+compDate+"&tranship="+tranship+"&item="+item+"&leng="+leng+"&widt="+widt+"&high="+high+"&itemName="+itemName+"&expiDate="+expiDate+"&enquMemo="+enquMemo+"&wate="+wate
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_xaddhproro(date,false));
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

//获取该回盘标注列表
export const GET_BZLBH = 'GET_BZLBH';

function get_bzlbh(date) {
  return {
    type: GET_BZLBH,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    bzlisth:date.rows
  }
}

export function getbzlbh(userName,token,replid){
  return function(dispatch) {
    fetch(HTTPED+'api/replComms/?userName='+userName+'&token='+token+'&repl='+replid,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_bzlbh(date));
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

//新建回盘标注
export const GET_XJBZH = 'GET_XJBZH';

function post_xjbzh(date) {
  return {
    type: GET_XJBZH,
    err:date.err,
    errMsg:date.errMsg
  }
}

export function postxjbzh(userName,token,repl,comm){
  return function(dispatch) {
    fetch(HTTPED+'api/replComms/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&repl="+repl+"&comm="+comm
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_xjbzh(date));
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

//获取定金
export const GET_HPDJ = 'GET_HPDJ';

function get_hpdj(date) {
  return {
    type: GET_HPDJ,
    err:date.err,
    errMsg:date.errMsg,
    residual:date.residual,
    resiUsd:date.resiUsd
  }
}

export function gethpdj(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDepos/?userName='+userName+'&token='+token+'&resi=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hpdj(date));
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

//获取回盘详情的舱位部分
export const GET_CWHPS = 'GET_CWHPS';

function get_cwhps(date) {
  return {
    type: GET_CWHPS,
    err:date.err,
    errMsg:date.errMsg,
    cabReplb:date.cabRepl,
  }
}

export function getcwhps(userName,token,repl){
  return function(dispatch) {
    fetch(HTTPED+'api/cabRepls/'+repl+'/?userName='+userName+'&token='+token+'&repl=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_cwhps(date));
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
export const GET_QYDHP = 'GET_QYDHP';

function get_qydhp(date) {
  return {
    type: GET_QYDHP,
    err:date.err,
    errMsg:date.errMsg,
    qydhp:date.rows
  }
}

export function getqydhp(userName,token,serv,name){
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
            dispatch(get_qydhp(date));
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
export const GET_MDDHP = 'GET_MDDHP';

function get_mddhp(date) {
  return {
    type: GET_MDDHP,
    err:date.err,
    errMsg:date.errMsg,
    mddhp:date.rows
  }
}

export function getmddhp(userName,token,serv,name){
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
            dispatch(get_mddhp(date));
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

//获取中转地 根据服务 名称
export const GET_ZZDHP = 'GET_ZZDHP';

function get_zzdhp(date) {
  return {
    type: GET_ZZDHP,
    err:date.err,
    errMsg:date.errMsg,
    zzdhp:date.rows
  }
}

export function getzzdhp(userName,token,name){
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
            dispatch(get_zzdhp(date));
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