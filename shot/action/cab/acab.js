/**
 * Created by Zing on 2017/4/25.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//求仓信用金额（可用余额）默认当前用户
export const GET_KYYE = 'GET_KYYE';

function get_gyye(date) {
  return {
    type: GET_KYYE,
    err:date.err,
    errMsg:date.errMsg,
    residual:date.residual,
    resiUsd:date.resiUsd
  }
}
//之上 的就是一个  Action   type  就是action 的名字 携带的信息 就是 下面的几个内容
 export function getgyye(userName,token){
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
            dispatch(get_gyye(date));
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

//请输选择平台供应商（服务）
export const GET_GYSFW = 'GET_GYSFW';

function get_gysfw(date) {
  return {
    type: GET_GYSFW,
    err:date.err,
    errMsg:date.errMsg,
    gysfw:date.rows
  }
}

export function getgysfw(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+'&rowCount=0'+'&servType=7',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_gysfw(date));
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

//请输选择平台供应商(列表)
export const GET_GYSL = 'GET_GYSL';

function get_gysl(date) {
  return {
    type: GET_GYSL,
    err:date.err,
    errMsg:date.errMsg,
    gysl:date.rows
  }
}

export function getgysl(userName,token,servCons,serv,depaPort){
  return function(dispatch) {
    fetch(HTTPED+'api/cabProvs/?userName='+userName+'&token='+token+'&rowCount=0'+'&servCons='+servCons+'&serv='+serv+'&depaPort='+depaPort,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_gysl(date));
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

//仓库费用
export const GET_GKFY = 'GET_GKFY';

function get_ckfy(date) {
  return {
    type: GET_GKFY,
    err:date.err,
    errMsg:date.errMsg,
    cabFee:date.cabFee
  }
}

export function getckfy(userName,token,servCons,serv,depaPort,curr){
  return function(dispatch) {
    fetch(HTTPED+'api/cabFees/?userName='+userName+'&token='+token+'&rowCount=0'+'&servCons='+servCons+'&serv='+serv+'&depaPort='+depaPort+'&curr='+curr,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ckfy(date));
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

//初始化求舱列表
export const GET_QCLB = 'GET_QCLB';

function get_qclb(date) {
  return {
    type: GET_QCLB,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    qcliL:date.rows
  }
}

export function getqclb(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/cabEnqus/?userName='+userName+'&token='+token+'&rowCount=10',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_qclb(date));
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

//搜索求舱列表
export const GET_SSQC = 'GET_SSQC';

function get_ssqc(date) {
  return {
    type: GET_SSQC,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    qcliL:date.rows
  }
}

export function getssqc(userName,token,pageIndex,serv,depaPort,destPort,cabSt,carr){
  return function(dispatch) {
    fetch(HTTPED+'api/cabEnqus/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&serv="+serv+"&depaPort="+depaPort+"&destPort="+destPort+"&cabSt="+cabSt+"&carr="+carr,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ssqc(date));
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

//滚动加载求舱列表
export const GET_QCGD = 'GET_QCGD';

function get_qcgd(date) {
  return {
    type: GET_QCGD,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    qcliL:date.rows
  }
}

export function getqcgd(userName,token,pageIndex,serv,depaPort,destPort,cabSt){
  return function(dispatch) {
    fetch(HTTPED+'api/cabEnqus/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&serv="+serv+"&depaPort="+depaPort+"&destPort="+destPort+"&cabSt="+cabSt,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_qcgd(date));
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

//获取详情
export const GET_HQXQ = 'GET_HQXQ';

function get_hqxq(date) {
  return {
    type: GET_HQXQ,
    err:date.err,
    errMsg:date.errMsg,
    cabEnquL:date.cabEnqu
  }
}

export function gethqxq(userName,token,cabEnqu,cabRepl){
  return function(dispatch) {
    fetch(HTTPED+'api/cabEnqus/'+cabEnqu+'/?userName='+userName+'&token='+token+"&cabRepl="+cabRepl,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hqxq(date));
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

//获取服务类型
export const GET_FWLX = 'GET_FWLX';

function get_fwlx(date) {
  return {
    type: GET_FWLX,
    err:date.err,
    errMsg:date.errMsg,
    fwlxary:date.rows
  }
}

export function getfwlx(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/servs/?userName='+userName+'&token='+token+"&rowCount=0&servType=1",{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_fwlx(date));
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
export const GET_KOUAN = 'GET_KOUAN';

function get_kouan(date) {
  return {
    type: GET_KOUAN,
    err:date.err,
    errMsg:date.errMsg,
    kouary:date.rows
  }
}

export function getkouan(userName,token){
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
            dispatch(get_kouan(date));
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

//确认自己是否履约
export const GET_QRZJLV = 'GET_QRZJLV';

function get_qrzjlv(date) {
  return {
    type: GET_QRZJLV,
    err:date.err,
    errMsg:date.errMsg,
    cabEnquzj:date.cabEnqu
  }
}

export function getqrzjlv(userName,token,cabEnqu,enquChkFin,enquChkFinDet,cabRepl){
  let str='';
  if(enquChkFin==2){
    str="&enquChkFinDet="+enquChkFinDet;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/cabEnqus/'+cabEnqu+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&checkFin=true&enquChkFin="+enquChkFin+str
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_qrzjlv(date));
            fetch(HTTPED+'api/cabEnqus/'+cabEnqu+'/?userName='+userName+'&token='+token+"&cabRepl="+cabRepl,{
              method: "get",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function(res){
              if(res.ok){
                res.json().then(function(date1){
                  if(!date1.err){
                    dispatch(get_hqxq(date1));
                  }else{
                    Backlogin(date1.errMsg)
                  }
                });
              }
            });
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

//确认对方是否履约
export const GET_QRDFLV = 'GET_QRDFLV';

function get_qrdflv(date) {
  return {
    type: GET_QRDFLV,
    err:date.err,
    errMsg:date.errMsg,
    cabEnqudf:date.cabEnqu
  }
}

export function getqrdflv(userName,token,cabEnqu,enquChecked,enquCheckDet,cabRepl){
  let str='';
  if(enquChecked==2){
    str="&enquCheckDet="+enquCheckDet;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/cabEnqus/'+cabEnqu+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&checkOt=true&enquChecked="+enquChecked+str
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_qrdflv(date));
            fetch(HTTPED+'api/cabEnqus/'+cabEnqu+'/?userName='+userName+'&token='+token+"&cabRepl="+cabRepl,{
              method: "get",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function(res){
              if(res.ok){
                res.json().then(function(date1){
                  if(!date1.err){
                    dispatch(get_hqxq(date1));
                  }else{
                    Backlogin(date1.errMsg)
                  }
                });
              }
            });
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

//上传求舱履约证明
export const GET_SCLVZM = 'GET_SCLVZM';

function get_sclvzm(date) {
  return {
    type: GET_SCLVZM,
    err:date.err,
    errMsg:date.errMsg,
    cabEnqusc:date.cabEnqu
  }
}

export function getsclvzm(cabEnqu,formdate){
  return function(dispatch) {
    fetch(HTTPED+'api/cabEnqus/'+cabEnqu+'/',{
      method: "put",
      body:formdate
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_sclvzm(date));
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

//修改状态（求舱）
export const GET_XGZTQ = 'GET_XGZTQ';

function get_xgztq(date) {
  return {
    type: GET_XGZTQ,
    err:date.err,
    errMsg:date.errMsg,
    cabEnquq:date.cabEnqu,
    shutTime:date.shutTime
  }
}

export function getxgztq(userName,token,cabEnqu,cabRepl){
  return function(dispatch) {
    fetch(HTTPED+'api/cabEnqus/'+cabEnqu+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&chgStat=true&stat=40"
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_xgztq(date));
            //重新获取详情
            fetch(HTTPED+'api/cabEnqus/'+cabEnqu+'/?userName='+userName+'&token='+token+"&cabRepl="+cabRepl,{
              method: "get",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function(res){
              if(res.ok){
                res.json().then(function(date){
                  if(!date.err){
                    dispatch(get_hqxq(date));
                  }else{
                    Backlogin(date.errMsg)
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

//获取个人信息（用户详情）
export const GET_CAINFO = 'GET_CAINFO';

function get_cainfo(date) {
  return {
    type: GET_CAINFO,
    err:date.err,
    errMsg:date.errMsg,
    cainfo:date.user
  }
}

export function getcainfo(userName,token,userid){
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
            dispatch(get_cainfo(date));
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

//流程记录备注（求舱）
export const GET_QCBZ = 'GET_QCBZ';

function get_qcbz(date) {
  return {
    type: GET_QCBZ,
    err:date.err,
    errMsg:date.errMsg,
    cabEnquqcbz:date.cabEnqu
  }
}

export function getqcbz(userName,token,cabEnqu,enquCLabe){
  return function(dispatch) {
    fetch(HTTPED+'api/cabEnqus/'+cabEnqu+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&isLabe=true&enquCLabe="+enquCLabe
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_qcbz(date));
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
export const GET_QYDKA = 'GET_QYDKA';

function get_qydka(date) {
  return {
    type: GET_QYDKA,
    err:date.err,
    errMsg:date.errMsg,
    qydka:date.rows
  }
}

export function getqydka(userName,token,serv,name){
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
            dispatch(get_qydka(date));
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
export const GET_MDDKA = 'GET_MDDKA';

function get_mddka(date) {
  return {
    type: GET_MDDKA,
    err:date.err,
    errMsg:date.errMsg,
    mddka:date.rows
  }
}

export function getmddka(userName,token,serv,name){
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
            dispatch(get_mddka(date));
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
export const GET_CARRS = 'GET_CARRS';

function get_carrs(date) {
  return {
    type: GET_CARRS,
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