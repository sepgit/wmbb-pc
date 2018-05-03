/**
 * Created by Zing on 2016/8/9.
 */
import "babel-polyfill";
import {
  GET_ZXFW,
  GET_ZXKA,
  GET_ZXJTFW,
  GET_ZXSENDTO,
  GET_ZXGCCTO,
  GET_ZXJTSER,
  GET_ZXADDNEW,
  GET_ZXXZSC,
  GET_ZXLISTC,
  GET_ZXLISTALL,
  GET_ZXLISTGD,
  GET_ZXHF,
  GET_ZXXQS,
  GET_ZXHFSC,
  GET_ZXZTGB,
  GET_ZXPORTSZJ,
  GET_ZXGWTO,
  GET_ZXPORTSF,
  GET_ZXPEOINFO,
  GET_FWYS,
  GET_GBTSFW,
  GET_FWDEL,
  GET_USEDELFW,
  GET_FWKANF,
  GET_XJGYSF,
  GET_SERAF,
  GET_BZLBZ,
  GET_XJBZZ,
  GET_KANZX
} from '../../action/Advisory/aadvisory';


const initialState ={
  err:true,
  errMsg:"",
  zxlist:[],
  ports:[],
  servOptis:[],
  zxprovs:[],
  zxcctos:[],
  serJser:[],
  consid:0,
  isshow:false,
  isuploads:false,
  rowCount:0,
  zxlists:[],
  zxhflist:[],
  zxdetl:[],
  conssendTo:'',
  consccto:'',
  consfile:'',
  respid:0,
  consztid:0,
  isc:false,
  portszj:[],
  zxwtuo:[],
  iscz:false,
  zxportsf:[],
  peoinfozx:{},
  adminlinfozx:'',
  fwys:[],
  xptsfw:false,
  fwdel:{},
  userdelfw:{},
  fwkanf:[],
  providf:0,
  xjgysf:'',
  xseraf:[],
  deposit:0,
  bzlistz:[],
  kanzx:[]
};
export default function zxreduer(state=initialState,action){
  switch (action.type){
    case GET_KANZX:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kanzx:action.kanzx
      });
    case GET_BZLBZ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        bzlistz:action.bzlistz
      });
    case GET_XJBZZ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg
      });
    case GET_ZXFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        zxlist:action.zxlist
      });
    case GET_ZXKA:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ports:action.ports
      });
    case GET_ZXJTFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        servOptis:action.servOptis
      });
    case GET_ZXSENDTO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        zxprovs:action.zxprovs
      });
    case GET_ZXGCCTO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        zxcctos:action.zxcctos,
        adminlinfozx:action.adminlinfozx
      });
    case GET_ZXJTSER:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        serJser:action.serJser
      });
    case GET_ZXADDNEW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        consid:action.consid,
        isshow:action.isshow
      });
    case GET_ZXXZSC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        consid:action.consid,
        isuploads:action.isuploads
      });
    case GET_ZXLISTC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        zxlists:action.zxlists
      });
    case GET_ZXLISTALL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        zxlists:action.zxlists
      });
    case GET_ZXLISTGD:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        zxlists:action.zxlists
      });
    case GET_ZXHF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        zxhflist:action.zxhflist
      });
    case GET_ZXXQS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        zxdetl:action.zxdetl,
        conssendTo:action.conssendTo,
        consccto:action.consccto,
        consfile:action.consfile,
        iscz:action.iscz
      });
    case GET_ZXHFSC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        respid:action.respid
      });
    case GET_ZXZTGB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        consztid:action.consztid,
        isc:action.isc
      });
    case GET_ZXPORTSZJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        portszj:action.portszj
      });
    case GET_ZXGWTO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        zxwtuo:action.zxwtuo
      });
    case GET_ZXPORTSF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        zxportsf:action.zxportsf
      });
    case GET_ZXPEOINFO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        peoinfozx:action.peoinfozx,
        deposit:action.deposit
      });
    case GET_FWYS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        fwys:action.fwys
      });
    case GET_GBTSFW:
      return Object.assign({}, state, {
        xptsfw:action.xptsfw
      });
    case GET_FWDEL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        fwdel:action.fwdel
      });
    case GET_USEDELFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        userdelfw:action.userdelfw
      });
    case GET_FWKANF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        fwkanf:action.fwkanf
      });
    case GET_XJGYSF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        providf:action.providf,
        xjgysf:action.xjgysf
      });
    case GET_SERAF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        xseraf:action.xseraf
      });
    default:
      return state;
  }
}


