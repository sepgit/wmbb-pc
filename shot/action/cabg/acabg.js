/**
 * Created by Chen on 2017/12/11.
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
    cabDispLc:date.cabDisp
  }
}

export function getqcbz(userName,token,cabDisp,Labe){
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
    let path= HTTPED+'api/cabDisps/?userName='+userName+'&token='+token+'&rowCount=10&listType=4&cabSt='+cabSt;  //1看别人的；2看自己发布未成交；3看自己发布已成交；4看购买。
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


export const GET_GTGTQ = 'GET_GTGTQ';

function get_gtgtq(date) {
  return {
    type: GET_GTGTQ,
    err:date.err,
    errMsg:date.errMsg,
    cabEnquq:date.cabEnqu,
  }
}

// 供舱方 发起的 求舱列表 退关
export function getgtgtq(userName,token,cabDisp){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDisps/chgStat/'+cabDisp+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "userName="+userName+"&token="+token+"&stat=40"
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date) {
          if(!date.err){
            dispatch(get_gtgtq(date));
            //重新获取详情
            fetch(HTTPED+'api/cabDisps/'+cabDisp+'/?userName='+userName+'&token='+token,{
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
            console.log(date);
            Backlogin(date.errMsg)
          }
        });
      }
    }, function(e) {
      message.error("连接服务器失败，请联系管理员！");
    });
  }
}