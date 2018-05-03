/**
 * Created by Zing on 2016/8/4.
 */
import "babel-polyfill";
import {
  GET_HFKA,
  GET_HFJTFW,
  GET_HFLISTALL,
  GET_HFLISTC,
  GET_HFLISTGD,
  GET_HFREDE,
  GET_ZXXQ,
  GET_HFXQHL,
  GET_FSHFL,
  GET_HFZJKAN,
  GET_HFSENDTO,
  GET_HFGCCTO,
  GET_HFGWTO,
  GET_HFJTSER,
  GET_HFPORTSF,
  GET_HFPEOINFO,
  GET_HFFW,
  GET_BZLBF,
  GET_XJBZF,
  GET_KANHF
} from '../../action/reply/areply';


const initialState ={
  err:true,
  errMsg:"",
  ports:[],
  servOptis:[],
  hflist:[],
  hfdetl:[],
  respccto:'',
  zxdetl:[],
  conssendTo:'',
  consccto:'',
  consfile:'',
  respid:0,
  isshow:false,
  respidhl:0,
  portszj:[],
  hfprovs:[],
  hfwtuo:[],
  serJser:[],
  hfcctos:[],
  hfportsf:[],
  peoinfohf:{},
  adminlinfohf:'',
  iscz:false,
  hfser:[],
  deposit:0,
  bzlistf:[],
  kanhf:[]
};
export default function Rreplys(state=initialState,action){
  switch (action.type){
    case GET_KANHF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kanhf:action.kanhf
      });
    case GET_HFKA:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ports:action.ports
      });
    case GET_BZLBF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        bzlistf:action.bzlistf
      });
    case GET_XJBZF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg
      });
    case GET_HFJTFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        servOptis:action.servOptis
      });
    case GET_HFLISTALL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        hflist:action.hflist
      });
    case GET_HFLISTC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        hflist:action.hflist
      });
    case GET_HFLISTGD:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        hflist:action.hflist
      });
    case GET_HFREDE:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hfdetl:action.hfdetl,
        respccto:action.respccto,
        iscz:action.iscz
      });
    case GET_ZXXQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        zxdetl:action.zxdetl,
        conssendTo:action.conssendTo,
        consccto:action.consccto,
        consfile:action.consfile
      });
    case GET_HFXQHL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        respidhl:action.respidhl
      });
    case GET_FSHFL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        respid:action.respid,
        isshow:action.isshow
      });
    case GET_HFZJKAN:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        portszj:action.portszj
      });
    case GET_HFSENDTO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hfprovs:action.hfprovs
      });
    case GET_HFGCCTO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hfcctos:action.hfcctos,
        adminlinfohf:action.adminlinfohf
      });
    case GET_HFGWTO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hfwtuo:action.hfwtuo
      });
    case GET_HFJTSER:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        serJser:action.serJser
      });
    case GET_HFPORTSF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hfportsf:action.hfportsf
      });
    case GET_HFPEOINFO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        peoinfohf:action.peoinfohf,
        deposit:action.deposit
      });
    case GET_HFFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hfser:action.hfser
      });
    default:
      return state;
  }
}


