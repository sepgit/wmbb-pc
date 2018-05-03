/**
 * Created by Zing on 2016/7/19.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';


//循环获取该询盘的回盘列表中标
function getzb(arr){
  var c=false;
  for(let v of arr) {
    if(v.replStat==30){
      c=true;
    }
  }
  return c;
}
//循环获取该公司用户下管理员账号信息
function getadmininfo(arr){
  var d=sessionStorage.getItem("SESSIONADMIACCO");
  var admininfos='';
  for(let v of arr) {
    if(v.userAcco==d){
      admininfos='{"user":"' + v.user + '","userAcco":"' + v.userAcco + '","name":"' + v.name + '"}';
    }
  }
  return admininfos;
}
//获取询盘详情
export const GET_XPDETIL = 'GET_XPDETIL';

function get_xpdetil(date,enqusendTo,enquccto,enqucarrs,iscz) {
  return {
    type: GET_XPDETIL,
    err:date.err,
    errMsg:date.errMsg,
    enqu:date.enqu,
    enqusendTo:enqusendTo,
    enquccto:enquccto,
    enqucarrs:enqucarrs,
    iscz:iscz
  }
}

export function getxpdetil(enquid,userName,token,userid){
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
            let str1='',str2='',str3='',iscz=false;
            if(date.enqu.sendTo!=null){
              let issj=JSON.parse(date.enqu.sendTo);
              for(let i of issj){
                str1+=i.name+',';
              }
              str1=str1.substring(0,str1.length-1);
            }
            if(date.enqu.ccto!=null&&date.enqu.ccto!='[,]'){
              let cctor=date.enqu.ccto;
              let cctors='';
              if(cctor.indexOf(',]')<0){
                cctors=cctor;
              }else{
                cctors=cctor.replace(',]',']');
              }
              let iscs=JSON.parse(cctors);
              for(let v of iscs){
                if(v.name!='null'&&v.name!=''&&v.admi>0){
                  str2+=v.name+',';
                }
                if(v.user==userid){
                  iscz=true;
                }
              }
              str2=str2.substring(0,str2.length-1);
            }
            if(date.enqu.carrs!=null){
              let iscr=JSON.parse(date.enqu.carrs);
              for(let k of iscr){
                str3+=k.carrName+',';
              }
              str3=str3.substring(0,str3.length-1);
            }

            dispatch(get_xpdetil(date,str1,str2,str3,iscz));
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

//获取该询盘的回盘列表
export const GET_XPHPLIST = 'GET_XPHPLIST';

function get_xphplist(date,iszb) {
  return {
    type: GET_XPHPLIST,
    err:date.err,
    errMsg:date.errMsg,
    rows:date.rows,
    rowCount:date.rowCount,
    totalRows:date.totalRows,
    iszb:iszb
  }
}

export function getxphplist(userName,token,enquid){
  return function(dispatch) {
    fetch(HTTPED+'api/repls/?userName='+userName+'&token='+token+'&rowCount=0&enqu='+enquid,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_xphplist(date,getzb(date.rows)));
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
export const GET_SER = 'GET_SER';

function get_ser(date) {
  return {
    type: GET_SER,
    err:date.err,
    errMsg:date.errMsg,
    xser:date.rows
  }
}

export function getser(userName,token,servType){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+'&rowCount=0&servType='+servType,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ser(date));
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

//获取询盘人
export const GET_XPEO = 'GET_XPEO';

function get_xpeo(date) {
  return {
    type: GET_XPEO,
    err:date.err,
    errMsg:date.errMsg,
    xuser:date.rows
  }
}

export function getxpeo(userName,token,user,comp){
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
            dispatch(get_xpeo(date));
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
export const GET_XPPORTS = 'GET_XPPORTS';

function get_ports(date) {
  return {
    type: GET_XPPORTS,
    err:date.err,
    errMsg:date.errMsg,
    xports:date.rows
  }
}

export function getports(userName,token){
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

//初始化列表
export const GET_XPLISTC = 'GET_XPLISTC';

function get_xplistc(date) {
  return {
    type: GET_XPLISTC,
    err:date.err,
    errMsg:date.errMsg,
    xlist:date.rows
  }
}

export function getxplistc(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/?userName='+userName+'&token='+token+'&rowCount=10',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_xplistc(date));
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

//搜索
export const GET_XSEACHS = 'GET_XSEACHS';

function get_xseachs(date) {
  return {
    type: GET_XSEACHS,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    xlist:date.rows
  }
}

export function getxseachs(userName,token,pageIndex,serv,enquer,depaPort,destPort,enquTimeFrom,enquTimeTo,enquStat,unreadOnly){
  let str='';
  if(enquStat!=0){
    str='&enquStat='+enquStat
  }
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/?userName='+userName+'&token='+token+'&rowCount=10&pageIndex='+pageIndex+'&serv='+serv+'&enquer='+enquer+'&depaPort='+depaPort+'&destPort='+destPort+'&enquTimeFrom='+enquTimeFrom+'&enquTimeTo='+enquTimeTo+'&unreadOnly='+unreadOnly+str,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_xseachs(date));
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
export const GET_XLOADG = 'GET_XLOADG';

function get_xloadg(date) {
  return {
    type: GET_XLOADG,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    xlist:date.rows
  }
}

export function getxloadg(userName,token,pageIndex,serv,enquer,depaPort,destPort,enquTimeFrom,enquTimeTo,enquStat,unreplOnly){
  let str='';
  if(enquStat!=0){
    str='&enquStat='+enquStat;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/?userName='+userName+'&token='+token+'&rowCount=10&pageIndex='+pageIndex+'&serv='+serv+'&enquer='+enquer+'&depaPort='+depaPort+'&destPort='+destPort+'&enquTimeFrom='+enquTimeFrom+'&enquTimeTo='+enquTimeTo+'&unreplOnly='+unreplOnly+str,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_xloadg(date));
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
export const GET_SENDTO = 'GET_SENDTO';

function get_sendto(date) {
  return {
    type: GET_SENDTO,
    err:date.err,
    errMsg:date.errMsg,
    provs:date.rows
  }
}

export function getsendto(userName,token,serv,depaPort,destPort){
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
            dispatch(get_sendto(date));
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
export const GET_GCCTO = 'GET_GCCTO';

function get_ccto(date,adminlinfo) {
  return {
    type: GET_GCCTO,
    err:date.err,
    errMsg:date.errMsg,
    cctos:date.rows,
    adminlinfo:adminlinfo
  }
}

export function getccto(userName,token,comp){
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
            let adminlinfo=getadmininfo(date.rows);
            dispatch(get_ccto(date,adminlinfo));
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
export const GET_GWTO = 'GET_GWTO';

function get_wtuo(date) {
  return {
    type: GET_GWTO,
    err:date.err,
    errMsg:date.errMsg,
    wtuo:date.rows
  }
}

export function getwtuo(userName,token,comp){
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
            dispatch(get_wtuo(date));
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
export const GET_GCARRS = 'GET_GCARRS';

function get_carrs(date) {
  return {
    type: GET_GCARRS,
    err:date.err,
    errMsg:date.errMsg,
    carrs:date.rows
  }
}

export function getcarrs(userName,token,serv){
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
            dispatch(get_carrs(date));
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

//发送（新增询盘普箱）
export const GET_XADDFCL = 'GET_XADDFCL';

function get_xaddfcl(date,isshow) {
  return {
    type: GET_XADDFCL,
    err:date.err,
    errMsg:date.errMsg,
    enquid:date.enqu,
    isshow:isshow
  }
}
//新建求仓
export const GET_NEWQC = 'GET_NEWQC';

function get_newqc(date) {
  return {
    type: GET_NEWQC,
    err:date.err,
    errMsg:date.errMsg,
    cabEnqu:date.cabEnqu
  }
}

export function getxaddfcl(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,GP20,GP20Wate,GP40,NOR40,HQ40,HQ45,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr){
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
            dispatch(get_xaddfcl(date,false));
            dispatch(get_gbts(true));
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

//询盘详情回盘中标
export const GET_XPXQZB = 'GET_XPXQZB';

function get_xpxqzb(date) {
  return {
    type: GET_XPXQZB,
    err:date.err,
    errMsg:date.errMsg,
    replzbid:date.repl
  }
}

export function putxpxqzb(userName,token,replStat,replid){
  return function(dispatch) {
    fetch(HTTPED+'api/repls/'+replid+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&replStat="+replStat
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_xpxqzb(date));
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

//询盘详情退关
export const GET_XPXQTG = 'GET_XPXQTG';

function get_xpxqtg(date) {
  return {
    type: GET_XPXQTG,
    err:date.err,
    errMsg:date.errMsg,
    enqutgid:date.enqu
  }
}

export function putxpxqtg(userName,token,enquStat,enquid){
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/'+enquid+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&enquStat="+enquStat
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_xpxqtg(date));
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

//询盘详情终止
export const GET_XPXQZZ = 'GET_XPXQZZ';

function get_xpxqzz(date) {
  return {
    type: GET_XPXQZZ,
    err:date.err,
    errMsg:date.errMsg,
    enquzzid:date.enqu
  }
}

export function putxpxqzz(userName,token,enquStat,enquid){
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/'+enquid+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&enquStat="+enquStat
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_xpxqzz(date));
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

//询盘详情上传
export const GET_XPXQSC = 'GET_XPXQSC';

function get_xpxqsc(date,isuploads) {
  return {
    type: GET_XPXQSC,
    err:date.err,
    errMsg:date.errMsg,
    enquscid:date.enqu,
    isuploads:isuploads
  }
}

export function putxpxqsc(enquid,formdate){
  return function(dispatch) {
    fetch(HTTPED+'api/enqus/'+enquid+'/',{
      method: "put",
      body:formdate
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_xpxqsc(date,true));
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

//开关闭推送
export const GET_GBTS = 'GET_GBTS';

function get_gbts(isgbts) {
  return {
    type: GET_GBTS,
    xpts:isgbts
  }
}

export function getgbts(){
  return function(dispatch) {
    dispatch(get_gbts(false));
  }
}

//发送（新增询盘拼箱）
export const GET_XADDLCL = 'GET_XADDLCL';

function get_xaddlcl(date,isshow) {
  return {
    type: GET_XADDLCL,
    err:date.err,
    errMsg:date.errMsg,
    enquid:date.enqu,
    isshow:isshow
  }
}


export function getxaddlcl(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,packType,recr,wate,bulk,itemName,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr,teamAnge){
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
            dispatch(get_xaddlcl(date,false));
            dispatch(get_gbts(true));
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


//发送（新增询盘空运）
export const GET_XADDAIR = 'GET_XADDAIR';

function get_xaddair(date,isshow) {
  return {
    type: GET_XADDAIR,
    err:date.err,
    errMsg:date.errMsg,
    enquid:date.enqu,
    isshow:isshow
  }
}

export function getxaddair(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,packType,wate,bulk,itemName,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr,teamAnge){
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
            dispatch(get_xaddair(date,false));
            dispatch(get_gbts(true));
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
export const GET_XADDHANG = 'GET_XADDHANG';

function get_xaddhang(date,isshow) {
  return {
    type: GET_XADDHANG,
    err:date.err,
    errMsg:date.errMsg,
    enquid:date.enqu,
    isshow:isshow
  }
}

export function getxaddhang(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,GP20,GP20Wate,GP40,HQ40,HQ45,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr){
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
            dispatch(get_xaddhang(date,false));
            dispatch(get_gbts(true));
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

//发送（新增询盘冷冻箱）
export const GET_XADDREEFER = 'GET_XADDREEFER';

function get_xaddreefer(date,isshow) {
  return {
    type: GET_XADDREEFER,
    err:date.err,
    errMsg:date.errMsg,
    enquid:date.enqu,
    isshow:isshow
  }
}

export function getxaddreefer(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,RF20,RF20Wate,RF40,RF40Wate,shpr,temp,itemName,expiDate,enquMemo){
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
            dispatch(get_xaddreefer(date,false));
            dispatch(get_gbts(true));
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
export const GET_PORTSZJ = 'GET_PORTSZJ';

function get_portszj(date) {
  return {
    type: GET_PORTSZJ,
    err:date.err,
    errMsg:date.errMsg,
    portszj:date.rows
  }
}

export function getportszj(userName,token,serv){
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
            dispatch(get_portszj(date));
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
export const GET_PORTSZJM = 'GET_PORTSZJM';

function get_portszjm(date) {
  return {
    type: GET_PORTSZJM,
    err:date.err,
    errMsg:date.errMsg,
    portszjm:date.rows
  }
}

export function getportszjm(userName,token,serv){
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
            dispatch(get_portszjm(date));
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
export const GET_CARRSCY = 'GET_CARRSCY';

function get_carrscy(date) {
  return {
    type: GET_CARRSCY,
    err:date.err,
    errMsg:date.errMsg,
    carrscy:date.rows
  }
}

export function getcarrscy(userName,token,serv){
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
            dispatch(get_carrscy(date));
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
export const GET_XPPORTSF = 'GET_XPPORTSF';

function get_portsf(date) {
  return {
    type: GET_XPPORTSF,
    err:date.err,
    errMsg:date.errMsg,
    xportsf:date.rows
  }
}

export function getportsf(userName,token,serv){
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
            dispatch(get_portsf(date));
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
export const GET_XPPEOINFO = 'GET_XPPEOINFO';

function get_peohpinfo(date,deposit) {
  return {
    type: GET_XPPEOINFO,
    err:date.err,
    errMsg:date.errMsg,
    peohpinfo:date.user,
    deposit:deposit
  }
}

export function getpeohpinfod(userName,token,userid){
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
                    dispatch(get_peohpinfo(date,d3.deposit));
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

//发送（新增询盘FR）
export const GET_XADDFR = 'GET_XADDFR';

function get_xaddfr(date,isshow) {
  return {
    type: GET_XADDFR,
    err:date.err,
    errMsg:date.errMsg,
    enquid:date.enqu,
    isshow:isshow
  }
}

export function getxaddfr(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,FR20,FR20Wate,FR40,FR40Wate,leng,widt,high,itemName,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr){
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
            dispatch(get_xaddfr(date,false));
            dispatch(get_gbts(true));
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

//发送（新增询盘DG）
export const GET_XADDDG = 'GET_XADDDG';

function get_xadddg(date,isshow) {
  return {
    type: GET_XADDDG,
    err:date.err,
    errMsg:date.errMsg,
    enquid:date.enqu,
    isshow:isshow
  }
}

export function getxadddg(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,GP20,GP20Wate,GP40,HQ40,clas,unno,itemName,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr){
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
            dispatch(get_xadddg(date,false));
            dispatch(get_gbts(true));
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

//发送（新增询盘OT）
export const GET_XADDOT = 'GET_XADDOT';

function get_xaddot(date,isshow) {
  return {
    type: GET_XADDOT,
    err:date.err,
    errMsg:date.errMsg,
    enquid:date.enqu,
    isshow:isshow
  }
}

export function getxaddot(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,OT20,OT20Wate,OT40,OT40Wate,leng,widt,high,itemName,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr){
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
            dispatch(get_xaddot(date,false));
            dispatch(get_gbts(true));
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

//发送（新增询盘BB）
export const GET_XADDBB = 'GET_XADDBB';

function get_xaddbb(date,isshow) {
  return {
    type: GET_XADDBB,
    err:date.err,
    errMsg:date.errMsg,
    enquid:date.enqu,
    isshow:isshow
  }
}

export function getxaddbb(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,tranship,item,leng,widt,high,itemName,expiDate,enquMemo,wate){
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
            dispatch(get_xaddbb(date,false));
            dispatch(get_gbts(true));
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
export const GET_XADDRORO = 'GET_XADDRORO';

function get_xaddroro(date,isshow) {
  return {
    type: GET_XADDRORO,
    err:date.err,
    errMsg:date.errMsg,
    enquid:date.enqu,
    isshow:isshow
  }
}

export function getxaddroro(user,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,tranship,item,leng,widt,high,itemName,expiDate,enquMemo,wate){
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
            dispatch(get_xaddroro(date,false));
            dispatch(get_gbts(true));
            message.success('发送成功');
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

//获取普通优势列表推送
export const GET_TSPTYS = 'GET_TSPTYS';

function get_tspuys(date) {
  return {
    type: GET_TSPTYS,
    err:date.err,
    errMsg:date.errMsg,
    tspuys:date.rows
  }
}

export function gettspuys(userName,token,carr,depaPort,destPort,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/pushAdvas/?userName='+userName+'&token='+token+'&carr='+carr+'&depaPort='+depaPort+'&destPort='+destPort+'&serv='+serv,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_tspuys(date));
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

//获取特种箱优势推送
export const GET_TSTZX = 'GET_TSTZX';

function get_tstzx(date) {
  return {
    type: GET_TSTZX,
    err:date.err,
    errMsg:date.errMsg,
    tstzx:date.rows
  }
}

export function gettstzx(userName,token,depaPort,destPort,serv){
  return function(dispatch) {
    fetch(HTTPED+'api/pushAdvas/?userName='+userName+'&token='+token+'&depaPort='+depaPort+'&destPort='+destPort+'&isSpec=true&serv='+serv,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_tstzx(date));
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

//获取运价优势详情 特种货
export const GET_YSDEL = 'GET_YSDEL';

function get_ysdel(date) {
  return {
    type: GET_YSDEL,
    err:date.err,
    errMsg:date.errMsg,
    yjdel:date.adva
  }
}

export function getysdel(userName,token,advaid){
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
            dispatch(get_ysdel(date));
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
export const GET_USEDEL = 'GET_USEDEL';

function get_usedel(date) {
  return {
    type: GET_USEDEL,
    err:date.err,
    errMsg:date.errMsg,
    userdel:date.user
  }
}

export function getusedel(userName,token,user){
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
            dispatch(get_usedel(date));
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
export const GET_FWKAN = 'GET_FWKAN';

function get_fwkan(date) {
  return {
    type: GET_FWKAN,
    err:date.err,
    errMsg:date.errMsg,
    fwkan:date.rows
  }
}

export function getfwkan(userName,token,sevr){
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
            dispatch(get_fwkan(date));
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
export const GET_XJGYS = 'GET_XJGYS';

function post_xjgys(date) {
  return {
    type: GET_XJGYS,
    err:date.err,
    errMsg:date.errMsg,
    provid:date.prov,
    xjgys:date.acco
  }
}

export function postxjgys(userName,token,serv,port,cont,labe){
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
            dispatch(post_xjgys(date));
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
export const GET_SERA = 'GET_SERA';

function get_sera(date) {
  return {
    type: GET_SERA,
    err:date.err,
    errMsg:date.errMsg,
    xsera:date.rows
  }
}

export function getsera(userName,token){
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
            dispatch(get_sera(date));
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

//获取模糊港口
export const GET_MHGK = 'GET_MHGK';

function get_mhgk(date) {
  return {
    type: GET_MHGK,
    err:date.err,
    errMsg:date.errMsg,
    mhgk:date.rows
  }
}

export function getmhgk(userName,token,name){
  return function(dispatch) {
    fetch(HTTPED+'api/ports/?userName='+userName+'&token='+token+'&rowCount=0&name='+name,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_mhgk(date));
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


//修改状态（求舱）
export const GET_XGZTC = 'GET_XGZTC';

function get_xgztc(date) {
  return {
    type: GET_XGZTC,
    err:date.err,
    errMsg:date.errMsg,
    cabEnquc:date.cabEnqu
  }
}

export function getxgztc(userName,token,cabEnqu){
  return function(dispatch) {
    fetch(HTTPED+'api/cabEnqus/'+cabEnqu+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&chgStat=true&stat=50"
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_xgztc(date));
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

//修改状态（供舱）
export const GET_XGZTQ = 'GET_XGZTQ';

function get_xgztq(date) {
  return {
    type: GET_XGZTQ,
    err:date.err,
    errMsg:date.errMsg,
    cabEnquq:date.cabEnqu
  }
}

export function getxgztq(userName,token,cabRepl){
  return function(dispatch) {
    fetch(HTTPED+'api/cabRepls/'+cabRepl+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&chgStat=true&stat=30"
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_xgztq(date));
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

//询盘详情的舱位部分
export const GET_XPXQCW = 'GET_XPXQCW';

function get_xpxqcw(date) {
  return {
    type: GET_XPXQCW,
    err:date.err,
    errMsg:date.errMsg,
    cabEnqucd:date.cabEnqu
  }
}

export function getxpxqcw(userName,token,enqu){
  return function(dispatch) {
    fetch(HTTPED+'api/cabEnqus/'+enqu+'/?userName='+userName+'&token='+token+'&enqu=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_xpxqcw(date));
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

//回盘详情的舱位部分
export const GET_XPXQCH = 'GET_XPXQCH';

function get_xpxqch(date) {
  return {
    type: GET_XPXQCH,
    err:date.err,
    errMsg:date.errMsg,
    cabReplrs:date.cabRepl
  }
}

export function getxpxqch(userName,token,repl){
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
            dispatch(get_xpxqch(date));
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

//获取该询盘标注列表
export const GET_BZLB = 'GET_BZLB';

function get_bzlb(date) {
  return {
    type: GET_BZLB,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    bzlist:date.rows
  }
}

export function getbzlb(userName,token,enquid){
  return function(dispatch) {
    fetch(HTTPED+'api/enquComms/?userName='+userName+'&token='+token+'&enqu='+enquid,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_bzlb(date));
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

//新建询盘标注
export const GET_XJBZ = 'GET_XJBZ';

function post_xjbz(date) {
  return {
    type: GET_XJBZ,
    err:date.err,
    errMsg:date.errMsg
  }
}

export function postxjbz(userName,token,enqu,comm){
  return function(dispatch) {
    fetch(HTTPED+'api/enquComms/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&enqu="+enqu+"&comm="+comm
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_xjbz(date));
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

//询盘详情的舱位部分
export const GET_XPCWB = 'GET_XPCWB';

function get_xpcwb(date) {
  return {
    type: GET_XPCWB,
    err:date.err,
    errMsg:date.errMsg,
    cabEnqub:date.cabEnqu
  }
}

export function getxpcwb(userName,token,enqu){
  return function(dispatch) {
    fetch(HTTPED+'api/cabEnqus/'+enqu+'/?userName='+userName+'&token='+token+'&enqu=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_xpcwb(date));
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
export const GET_QYDXP = 'GET_QYDXP';

function get_qydxp(date) {
  return {
    type: GET_QYDXP,
    err:date.err,
    errMsg:date.errMsg,
    qydxp:date.rows
  }
}

export function getqydxp(userName,token,serv,name){
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
            dispatch(get_qydxp(date));
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
export const GET_MDDXP = 'GET_MDDXP';

function get_mddxp(date) {
  return {
    type: GET_MDDXP,
    err:date.err,
    errMsg:date.errMsg,
    mddxp:date.rows
  }
}

export function getmddxp(userName,token,serv,name){
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
            dispatch(get_mddxp(date));
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
export const GET_QYDKAIN = 'GET_QYDKAIN';

function get_qydkain(date) {
  return {
    type: GET_QYDKAIN,
    err:date.err,
    errMsg:date.errMsg,
    qydkaxp:date.rows
  }
}

export function getqydkain(userName,token,serv,name){
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
            dispatch(get_qydkain(date));
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
export const GET_MDDKAIN = 'GET_MDDKAIN';

function get_mddkain(date) {
  return {
    type: GET_MDDKAIN,
    err:date.err,
    errMsg:date.errMsg,
    mddkaxp:date.rows
  }
}

export function getmddkain(userName,token,serv,name){
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
            dispatch(get_mddkain(date));
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

//获取回盘评价详情
export const GET_HPPJXQ = 'GET_HPPJXQ';

function get_hppjxq(date) {
  return {
    type: GET_HPPJXQ,
    err:date.err,
    errMsg:date.errMsg,
    scor:date.scor,
    scors:date.scors,
    allRepl:date.allRepl,
    winRepl:date.winRepl,
    scorNum:date.scorNum
  }
}

export function gethppjxq(userName,token,repl){
  return function(dispatch) {
    fetch(HTTPED+'api/scors/'+repl+'/?userName='+userName+'&token='+token+'&isRepl=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hppjxq(date));
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

//获取回盘承运商评价详情
export const GET_HPCTSPJXQ = 'GET_HPCTSPJXQ';

function get_hpcyspjxq(date) {
  return {
    type: GET_HPCTSPJXQ,
    err:date.err,
    errMsg:date.errMsg,
    cysscor:date.scor,
    cysscors:date.scors,
    callRepl:date.allRepl,
    cwinRepl:date.winRepl,
    cscorNum:date.scorNum
  }
}

export function gethpcyspjxq(userName,token,repl){
  return function(dispatch) {
    fetch(HTTPED+'api/scors/'+repl+'/?userName='+userName+'&token='+token+'&isRepl=true&isCarr=true',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hpcyspjxq(date));
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

//回盘评价
export const PUT_YSPJA = 'PUT_YSPJA';

function put_yspja(date) {
  return {
    type: PUT_YSPJA,
    err:date.err,
    errMsg:date.errMsg,
    replpjid:date.repl
  }
}

export function putyspja(userName,token,scor,scorDet,repl){
  return function(dispatch) {
    fetch(HTTPED+'api/repls/'+ repl,{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&scor="+scor+"&scorDet="+scorDet
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_yspja(date));
            message.success('评价完成');
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

//回盘承运商评价
export const PUT_HPCYSPJA = 'PUT_HPCYSPJA';

function put_hpcyspja(date) {
  return {
    type: PUT_HPCYSPJA,
    err:date.err,
    errMsg:date.errMsg,
    replcpjid:date.repl
  }
}

export function puthpcyspja(userName,token,carrScor,carrScorDet,repl){
  return function(dispatch) {
    fetch(HTTPED+'api/repls/'+ repl,{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&carrScor="+carrScor+"&carrScorDet="+carrScorDet
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_hpcyspja(date));
            message.success('评价完成');
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
