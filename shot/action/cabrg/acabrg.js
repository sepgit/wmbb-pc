/**
 * Created by Chen on 2017/12/13.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'
import {message} from 'antd';

//询盘详情的舱位部分
export const GET_CABRXQ = 'GET_CABRXQ';

function get_cabrxq(date) {
  return {
    type: GET_CABRXQ,
    err:date.err,
    errMsg:date.errMsg,
    cabEnqu:date.cabEnqu
  }
}

export function getcabrxq(userName,token,enqu){
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
            dispatch(get_cabrxq(date));
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

//获取服务类型
export const GET_FWLXR = 'GET_FWLXR';

function get_fwlxr(date) {
  return {
    type: GET_FWLXR,
    err:date.err,
    errMsg:date.errMsg,
    fwlxaryr:date.rows
  }
}

export function getfwlxr(userName,token){
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
            dispatch(get_fwlxr(date));
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
export const GET_KOUANR = 'GET_KOUANR';

function get_kouanr(date) {
  return {
    type: GET_KOUANR,
    err:date.err,
    errMsg:date.errMsg,
    kouaryr:date.rows
  }
}

export function getkouanr(userName,token){
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
            dispatch(get_kouanr(date));
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

//初始化供舱列表
export const GET_GCLB = 'GET_GCLB';

function get_gclb(date) {
  return {
    type: GET_GCLB,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    gcliL:date.rows
  }
}

export function getgclb(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/cabRepls/?userName='+userName+'&token='+token+'&rowCount=10',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_gclb(date));
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

//搜索供舱列表
export const GET_SSGC = 'GET_SSGC';

function get_ssgc(date) {
  return {
    type: GET_SSGC,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    gcliL:date.rows
  }
}

export function getssgc(userName,token,pageIndex,serv,depaPort,destPort,cabSt){
  return function(dispatch) {
    fetch(HTTPED+'api/cabRepls/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&serv="+serv+"&depaPort="+depaPort+"&destPort="+destPort+"&cabSt="+cabSt,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_ssgc(date));
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

//滚动加载供舱列表
export const GET_GCGD = 'GET_GCGD';

function get_gcgd(date) {
  return {
    type: GET_GCGD,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    gcliL:date.rows
  }
}

export function getgcgd(userName,token,pageIndex,serv,depaPort,destPort,cabSt){
  return function(dispatch) {
    fetch(HTTPED+'api/cabRepls/?userName='+userName+'&token='+token+"&rowCount=10&pageIndex="+pageIndex+"&serv="+serv+"&depaPort="+depaPort+"&destPort="+destPort+"&cabSt="+cabSt,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_gcgd(date));
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

//获取供舱详情
export const GET_HQXQR = 'GET_HQXQR';

function get_hqxqr(date) {
  return {
    type: GET_HQXQR,
    err:date.err,
    errMsg:date.errMsg,
    cabReplr:date.cabRepl
  }
}

export function gethqxqr(userName,token,cabRepl,cabEnqu){
  return function(dispatch) {
    fetch(HTTPED+'api/cabRepls/'+cabRepl+'/?userName='+userName+'&token='+token+'&cabEnqu='+cabEnqu,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_hqxqr(date));
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

//确认自己是否履约(供舱)
export const GET_QRZJLVR = 'GET_QRZJLVR';

function get_qrzjlvr(date) {
  return {
    type: GET_QRZJLVR,
    err:date.err,
    errMsg:date.errMsg,
    cabReplzj:date.cabRepl
  }
}

export function getqrzjlvr(userName,token,cabRepl,replChkFin,replChkFinDet,cabEnqu){
  let str='';
  if(replChkFin==2){
    str="&replChkFinDet="+replChkFinDet;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/cabRepls/'+cabRepl+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&checkFin=true&replChkFin="+replChkFin+str
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_qrzjlvr(date));
            fetch(HTTPED+'api/cabRepls/'+cabRepl+'/?userName='+userName+'&token='+token+'&cabEnqu='+cabEnqu,{
              method: "get",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function(res){
              if(res.ok){
                res.json().then(function(date1){
                  if(!date1.err){
                    dispatch(get_hqxqr(date1));
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

//确认对方是否履约(供舱)
export const GET_QRDFLVR = 'GET_QRDFLVR';

function get_qrdflvr(date) {
  return {
    type: GET_QRDFLVR,
    err:date.err,
    errMsg:date.errMsg,
    cabRepldf:date.cabRepl
  }
}

export function getqrdflvr(userName,token,cabRepl,replChecked,replCheckDet,cabEnqu){
  let str='';
  if(replChecked==2){
    str="&replCheckDet="+replCheckDet;
  }
  return function(dispatch) {
    fetch(HTTPED+'api/cabRepls/'+cabRepls+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&checkOt=true&replCheckDet="+replCheckDet+str
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_qrdflvr(date));
            fetch(HTTPED+'api/cabRepls/'+cabRepl+'/?userName='+userName+'&token='+token+'&cabEnqu='+cabEnqu,{
              method: "get",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function(res){
              if(res.ok){
                res.json().then(function(date1){
                  if(!date1.err){
                    dispatch(get_hqxqr(date1));
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

//上传求舱履约证明(供舱)
export const GET_SCLVZMR = 'GET_SCLVZMR';

function get_sclvzmr(date) {
  return {
    type: GET_SCLVZMR,
    err:date.err,
    errMsg:date.errMsg,
    cabReplsc:date.cabRepl
  }
}

export function getsclvzmr(cabRepl,formdate){
  return function(dispatch) {
    fetch(HTTPED+'api/cabRepls/'+cabRepl+'/',{
      method: "put",
      body:formdate
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_sclvzmr(date));
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

//求仓信用金额（可用余额）默认当前用户
export const GET_KYYER = 'GET_KYYER';

function get_gyyer(date) {
  return {
    type: GET_KYYER,
    err:date.err,
    errMsg:date.errMsg,
    residual:date.residual
  }
}

export function getgyyer(userName,token){
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
            dispatch(get_gyyer(date));
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

//获取个人信息（用户详情）
export const GET_CARINFO = 'GET_CARINFO';

function get_carinfo(date) {
  return {
    type: GET_CARINFO,
    err:date.err,
    errMsg:date.errMsg,
    carinfo:date.user
  }
}

export function getcarinfo(userName,token,userid){
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
            dispatch(get_carinfo(date));
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

//流程记录备注（供舱）
export const GET_GCBZ = 'GET_GCBZ';

function get_gcbz(date) {
  return {
    type: GET_GCBZ,
    err:date.err,
    errMsg:date.errMsg,
    cabDispLc:date.cabDisp
  }
}

export function getgcbz(userName,token,cabDisp,Labe){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDisps/labe/'+cabDisp+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&labe="+Labe
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_gcbz(date));
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
export const GET_QYDKAR = 'GET_QYDKAR';

function get_qydkar(date) {
  return {
    type: GET_QYDKAR,
    err:date.err,
    errMsg:date.errMsg,
    qydkar:date.rows
  }
}

export function getqydkar(userName,token,serv,name){
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
            dispatch(get_qydkar(date));
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
export const GET_MDDKAR = 'GET_MDDKAR';

function get_mddkar(date) {
  return {
    type: GET_MDDKAR,
    err:date.err,
    errMsg:date.errMsg,
    mddkar:date.rows
  }
}

export function getmddkar(userName,token,serv,name){
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
            dispatch(get_mddkar(date));
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

//搜索供舱方提供求舱列表
export const GET_CABDISPS = 'GET_CABDISPS';

function get_cabDisps(date) {
  return {
    type: GET_CABDISPS,
    err:date.err,
    errMsg:date.errMsg,
    rowCount:date.rowCount,
    cabDispsList:date.rows
  }
}

export function getcabDisps(userName,token,pageIndex,serv,depaPort,destPort,carr,resAcco,cabSt){
  return function(dispatch) {
    let path= HTTPED+'api/cabDisps/?userName='+userName+'&token='+token+'&rowCount=10&listType=3&cabSt='+cabSt;  //1看别人的；2看自己发布未成交；3看自己发布已成交；4看购买。
    if (pageIndex>0){
      path = path + '&pageIndex='+pageIndex;
    }
    if (serv>0&&serv!=''){
      path = path + '&serv='+serv;
    }
    if (depaPort>0&&depaPort!=''){
      path = path + '&depaPort='+depaPort;
    }
    if (destPort>0&&destPort!=''){
      path = path + '&destPort='+destPort;
    }
    if (carr>0&&carr!=''){
      path = path + '&carr='+carr;
    }
    if (resAcco!=''){
      path = path + '&resAcco='+resAcco;
    }

    fetch(path,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_cabDisps(date));
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
export const GET_CABDISP = 'GET_CABDISP';

function get_cabDisp(date) {
  return {
    type: GET_CABDISP,
    err:date.err,
    errMsg:date.errMsg,
    cabDispdetail:date.cabDisp
  }
}

export function getcabDisp(userName,token,cabDisp){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDisps/'+cabDisp+'/?userName='+userName+'&token='+token,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_cabDisp(date));
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
export const PUT_SCLVZM = 'PUT_SCLVZM';

function put_sclvzm(date) {
  return {
    type: PUT_SCLVZM,
    err:date.err,
    errMsg:date.errMsg,
    cabDispup:date.cabDisp
  }
}

export function putsclvzm(cabDisp,formdate){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDisps/upFile/'+cabDisp+'/',{
      method: "put",
      body:formdate
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(put_sclvzm(date));
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
