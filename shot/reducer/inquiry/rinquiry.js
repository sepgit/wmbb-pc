/**
 * Created by Zing on 2016/7/19.
 */
import "babel-polyfill";
import {
  GET_XPPEOINFO,
  GET_XPDETIL,
  GET_XPHPLIST,
  GET_SER,
  GET_XPEO,
  GET_XPPORTS,
  GET_XPLISTC,
  GET_XSEACHS,
  GET_XLOADG,
  GET_PORTSZJ,
  GET_PORTSZJM,
  GET_XPPORTSF,
  GET_MHGK,
  GET_NEWQC,
  GET_XGZTC,
  GET_XPXQCW,
  GET_XGZTQ,
  GET_XPXQCH,
  GET_BZLB,
  GET_XJBZ,
  GET_XPCWB,
  GET_QYDXP,
  GET_MDDXP,
  GET_QYDKAIN,
  GET_MDDKAIN,
  GET_HPPJXQ,
  GET_HPCTSPJXQ,
  PUT_YSPJA,
  PUT_HPCYSPJA
} from '../../action/inquiry/ainquiry';


const initialState ={
  err:true,
  errMsg:"",
  enqu:{},
  enqusendTo:'',
  enquccto:'',
  enqucarrs:'',
  totalRows:0,
  rowCount:0,
  rows:[],
  xlist:[],
  xser:[{"serv":0,"servName":"服务"}],
  xrcount:1,
  xuser:[{"user":0,"userAcco":'0',"name":'0'}],
  xports:[],
  portszj:[],
  portszjm:[],
  iszb:false,
  iscz:false,
  xportsf:[],
  peohpinfo:{},
  deposit:0,
  mhgk:[],
  cabEnqu:0,
  cabEnquc:0,
  cabEnqucd:{},
  cabEnquq:0,
  cabReplrs:{},
  bzlist:[],
  cabEnqub:{},
  qydxp:[],
  mddxp:[],
  qydkaxp:[],
  mddkaxp:[],
  scor:0,
  scors:[],
  cysscor:0,
  cysscors:[],
  replpjid:0,
  replcpjid:0,
  allRepl:0,
  winRepl:0,
  scorNum:0,
  callRepl:0,
  cwinRepl:0,
  cscorNum:0
};
export default function getdetil(state=initialState,action){
  switch (action.type){
    case PUT_HPCYSPJA:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        replcpjid:action.replcpjid
      });
    case PUT_YSPJA:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        replpjid:action.replpjid
      });
    case GET_HPCTSPJXQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cysscor:action.cysscor,
        cysscors:action.cysscors,
        callRepl:action.callRepl,
        cwinRepl:action.cwinRepl,
        cscorNum:action.cscorNum
      });
    case GET_HPPJXQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        scor:action.scor,
        scors:action.scors,
        allRepl:action.allRepl,
        winRepl:action.winRepl,
        scorNum:action.scorNum
      });
    case GET_QYDKAIN:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        qydkaxp:action.qydkaxp
      });
    case GET_MDDKAIN:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mddkaxp:action.mddkaxp
      });
    case GET_QYDXP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        qydxp:action.qydxp
      });
    case GET_MDDXP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mddxp:action.mddxp
      });
    case GET_XPCWB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabEnqub:action.cabEnqub
      });
    case GET_XPDETIL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        enqu:action.enqu,
        enqusendTo:action.enqusendTo,
        enquccto:action.enquccto,
        enqucarrs:action.enqucarrs,
        iscz:action.iscz
      });
    case GET_XPHPLIST:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        totalRows:action.totalRows,
        rowCount:action.rowCount,
        rows:action.rows,
        iszb:action.iszb
      });
    case GET_SER:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        xser:action.xser
      });
    case GET_XPEO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        xuser:action.xuser
      });
    case GET_XPPORTS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        xports:action.xports
      });
    case GET_XPLISTC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        xlist:action.xlist
      });
    case GET_XSEACHS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        xlist:action.xlist
      });
    case GET_XLOADG:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        xlist:action.xlist
      });
    case GET_PORTSZJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        portszj:action.portszj
      });
    case GET_PORTSZJM:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        portszjm:action.portszjm
      });
    case GET_XPPORTSF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        xportsf:action.xportsf
      });
    case GET_XPPEOINFO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        peohpinfo:action.peohpinfo,
        deposit:action.deposit
      });
    case GET_MHGK:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mhgk:action.mhgk
      });
    case GET_NEWQC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabEnqu:action.cabEnqu
      });
    case GET_XGZTC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabEnquc:action.cabEnquc
      });
    case GET_XPXQCW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabEnqucd:action.cabEnqucd
      });
    case GET_XGZTQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabEnquq:action.cabEnquq
      });
    case GET_XPXQCH:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabReplrs:action.cabReplrs
      });
    case GET_BZLB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        bzlist:action.bzlist
      });
    case GET_XJBZ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg
      });
    default:
      return state;
  }
}


