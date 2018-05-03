/**
 * Created by Chen on 2017/12/08.
 */
import 'fetch-detector';
import 'fetch-ie8';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import {message} from 'antd';
import HTTPED from '../../date/address';
import {Backlogin} from '../../devtools/Autotoken.js'

//获取服务类型
export const GET_FWLXCWB = 'GET_FWLXCWB';

function get_fwlxcwb(date) {
  return {
    type: GET_FWLXCWB,
    err:date.err,
    errMsg:date.errMsg,
    fwlxarycwb:date.rows
  }
}

export function getfwlxcwb(userName,token){
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
            dispatch(get_fwlxcwb(date));
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
export const GET_QYDKACWB = 'GET_QYDKACWB';

function get_qydkacwb(date) {
  return {
    type: GET_QYDKACWB,
    err:date.err,
    errMsg:date.errMsg,
    qydkacwb:date.rows
  }
}

export function getqydkacwb(userName,token,serv,name){
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
            dispatch(get_qydkacwb(date));
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
export const GET_MDDKACWB = 'GET_MDDKACWB';

function get_mddkacwb(date) {
  return {
    type: GET_MDDKACWB,
    err:date.err,
    errMsg:date.errMsg,
    mddkacwb:date.rows
  }
}

export function getmddkacwb(userName,token,serv,name){
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
            dispatch(get_mddkacwb(date));
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

//根据服务获取承运商
export const GET_CARRSCWB = 'GET_CARRSCWB';

function get_carrscwb(date) {
  return {
    type: GET_CARRSCWB,
    err:date.err,
    errMsg:date.errMsg,
    carrscwb:date.rows
  }
}

export function getcarrscwb(userName,token,serv){
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
            dispatch(get_carrscwb(date));
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

//搜索平台舱位列表
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

export function getcabDisps(userName,token,pageIndex,serv,depaPort,destPort,carr){
  return function(dispatch) {
    let path= HTTPED+'api/cabDisps/?userName='+userName+'&token='+token+'&rowCount=10&listType=2';   //1看别人的；2看自己发布未成交；3看自己发布已成交；4看购买。
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

//发布供舱FCL
export const POST_CWBFB = 'POST_CWBFB';

function post_cwbfb(date) {
  return {
    type: POST_CWBFB,
    err:date.err,
    errMsg:date.errMsg,
    cwbfb:date.cabDisp
  }
}

export function postcwbfb(userName,token,serv,carr,depaPort,destPort,curr,resPref,reqPref,closTime,sailTime,expiTime,lastShutTime,GP20,GP20Fee,GP20Cos,GP40,GP40Fee,GP40Cos,NOR40,NOR40Fee,NOR40Cos,HQ40,HQ40Fee,HQ40Cos,HQ45,HQ45Fee,HQ45Cos,currCos){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDisps/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&carr="+carr+"&depaPort="+depaPort+"&destPort="+destPort
      +"&reqPref="+reqPref+"&resPref="+resPref+"&curr="+curr
      +"&closTime="+closTime+"&sailTime="+sailTime+"&expiTime="+expiTime+"&lastShutTime="+lastShutTime
      +"&GP20="+GP20+"&GP20Fee="+GP20Fee+"&GP20Cos="+GP20Cos
      +"&GP40="+GP40+"&GP40Fee="+GP40Fee+"&GP40Cos="+GP40Cos
      +"&NOR40="+NOR40+"&NOR40Fee="+NOR40Fee+"&NOR40Cos="+NOR40Cos
      +"&HQ40="+HQ40+"&HQ40Fee="+HQ40Fee+"&HQ40Cos="+HQ40Cos
      +"&HQ45="+HQ45+"&HQ45Fee="+HQ45Fee+"&HQ45Cos="+HQ45Cos+"&currCos="+currCos
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_cwbfb(date));
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

//发布供舱DG
export const POST_CWBFBDG = 'POST_CWBFBDG';

function post_cwbfbdg(date) {
  return {
    type: POST_CWBFBDG,
    err:date.err,
    errMsg:date.errMsg,
    cwbfbdg:date.cabDisp
  }
}

export function postcwbfbdg(userName,token,serv,carr,depaPort,destPort,curr,resPref,reqPref,closTime,sailTime,expiTime,lastShutTime,GP20,GP20Fee,GP20Cos,GP40,GP40Fee,GP40Cos,HQ40,HQ40Fee,HQ40Cos,unno,clas,currCos){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDisps/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&carr="+carr+"&depaPort="+depaPort+"&destPort="+destPort
      +"&reqPref="+reqPref+"&resPref="+resPref+"&curr="+curr
      +"&closTime="+closTime+"&sailTime="+sailTime+"&expiTime="+expiTime+"&lastShutTime="+lastShutTime
      +"&GP20="+GP20+"&GP20Fee="+GP20Fee+"&GP20Cos="+GP20Cos
      +"&GP40="+GP40+"&GP40Fee="+GP40Fee+"&GP40Cos="+GP40Cos
      +"&HQ40="+HQ40+"&HQ40Fee="+HQ40Fee+"&HQ40Cos="+HQ40Cos+"&clas="+clas+"&unno="+unno+"&currCos="+currCos
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_cwbfbdg(date));
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

//发布供舱HG
export const POST_CWBFBHG = 'POST_CWBFBHG';

function post_cwbfbhg(date) {
  return {
    type: POST_CWBFBHG,
    err:date.err,
    errMsg:date.errMsg,
    cwbfbhg:date.cabDisp
  }
}

export function postcwbfbhg(userName,token,serv,carr,depaPort,destPort,curr,resPref,reqPref,closTime,sailTime,expiTime,lastShutTime,GP20,GP20Fee,GP20Cos,GP40,GP40Fee,GP40Cos,HQ40,HQ40Fee,HQ40Cos,HQ45,HQ45Fee,HQ45Cos,currCos){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDisps/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&carr="+carr+"&depaPort="+depaPort+"&destPort="+destPort
      +"&reqPref="+reqPref+"&resPref="+resPref+"&curr="+curr
      +"&closTime="+closTime+"&sailTime="+sailTime+"&expiTime="+expiTime+"&lastShutTime="+lastShutTime
      +"&GP20="+GP20+"&GP20Fee="+GP20Fee+"&GP20Cos="+GP20Cos
      +"&GP40="+GP40+"&GP40Fee="+GP40Fee+"&GP40Cos="+GP40Cos
      +"&HQ40="+HQ40+"&HQ40Fee="+HQ40Fee+"&HQ40Cos="+HQ40Cos
      +"&HQ45="+HQ45+"&HQ45Fee="+HQ45Fee+"&HQ45Cos="+HQ45Cos+"&currCos="+currCos
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_cwbfbhg(date));
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

//发布供舱FR
export const POST_CWBFBFR = 'POST_CWBFBFR';

function post_cwbfbfr(date) {
  return {
    type: POST_CWBFBFR,
    err:date.err,
    errMsg:date.errMsg,
    cwbfbfr:date.cabDisp
  }
}

export function postcwbfbfr(userName,token,serv,carr,depaPort,destPort,curr,resPref,reqPref,closTime,sailTime,expiTime,lastShutTime,FR20,FR20Fee,FR20Cos,FR40,FR40Fee,FR40Cos,leng,widt,high,currCos){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDisps/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&carr="+carr+"&depaPort="+depaPort+"&destPort="+destPort
      +"&reqPref="+reqPref+"&resPref="+resPref+"&curr="+curr
      +"&closTime="+closTime+"&sailTime="+sailTime+"&expiTime="+expiTime+"&lastShutTime="+lastShutTime
      +"&FR20="+FR20+"&FR20Fee="+FR20Fee+"&FR20Cos="+FR20Cos
      +"&FR40="+FR40+"&FR40Fee="+FR40Fee+"&FR40Cos="+FR40Cos
      +"&leng="+leng+"&widt="+widt+"&high="+high+"&currCos="+currCos
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_cwbfbfr(date));
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

//发布供舱OT
export const POST_CWBFBOT = 'POST_CWBFBOT';

function post_cwbfbot(date) {
  return {
    type: POST_CWBFBOT,
    err:date.err,
    errMsg:date.errMsg,
    cwbfbot:date.cabDisp
  }
}

export function postcwbfbot(userName,token,serv,carr,depaPort,destPort,curr,resPref,reqPref,closTime,sailTime,expiTime,lastShutTime,RF20,RF20Fee,RF20Cos,RF40,RF40Fee,RF40Cos,leng,widt,high,currCos){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDisps/',{
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&serv="+serv+"&carr="+carr+"&depaPort="+depaPort+"&destPort="+destPort
      +"&reqPref="+reqPref+"&resPref="+resPref+"&curr="+curr
      +"&closTime="+closTime+"&sailTime="+sailTime+"&expiTime="+expiTime+"&lastShutTime="+lastShutTime
      +"&RF20="+RF20+"&RF20Fee="+RF20Fee+"&RF20Cos="+RF20Cos
      +"&RF40="+RF40+"&RF40Fee="+RF40Fee+"&RF40Cos="+RF40Cos
      +"&leng="+leng+"&widt="+widt+"&high="+high+"&currCos="+currCos
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(post_cwbfbot(date));
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

//获取承运商
export const GET_CARRSCWBA = 'GET_CARRSCWBA';

function get_carrscwba(date) {
  return {
    type: GET_CARRSCWBA,
    err:date.err,
    errMsg:date.errMsg,
    carrscwba:date.rows
  }
}

export function getcarrscwba(userName,token){
  return function(dispatch) {
    fetch(HTTPED+'api/carrs/?userName='+userName+'&token='+token+'&rowCount=0',{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_carrscwba(date));
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

//撤销舱位
export const PUT_CWBCX = 'PUT_CWBCX';

function put_cwbcx(date) {
  return {
    type: PUT_CWBCX,
    err:date.err,
    errMsg:date.errMsg,
    cwbcx:date.cabDisp
  }
}

export function putcwbcx(userName,token,cabDisp,stat){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDisps/chgStat/'+cabDisp+'/',{
      method: "put",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body:"userName="+userName+"&token="+token+"&stat="+stat
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(put_cwbcx(date));
            message.success('撤销成功');
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


//获取余额
export const GET_CABYUE = 'GET_CABYUE';

function get_cabyue(date) {
  return {
    type: GET_CABYUE,
    err:date.err,
    errMsg:date.errMsg,
    residual:date.residual,
    resiUsd:date.resiUsd
  }
}

export function getcabyue(userName,token,user){
  return function(dispatch) {
    fetch(HTTPED+'api/cabDepos/?userName='+userName+'&token='+token+'&resi=true'+'&user='+user,{
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(function(res){
      if(res.ok){
        res.json().then(function(date){
          if(!date.err){
            dispatch(get_cabyue(date));
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