/**
 * Created by Zing on 2016/11/18.
 */
import "babel-polyfill";
import {
  GET_BHFW,
  GET_PAYR,
  GET_NEWBH,
  GET_BHR,
  GET_CKLC,
  GET_CKLS,
  GET_CKLG,
  GET_BHXQ,
  GET_LYSC,
  GET_LYQR,
  GET_FPSC,
  GET_XGZT,
  GET_REINFO,
  GET_PRIVS,
  GET_DELBH,
  GET_USERMHP,
  GET_USERLBP,
  GET_ZJUSRF,
  GET_NOW,
} from '../../action/Paymentg/aPaymentg';


const initialState ={
  err:true,
  errMsg:"",
  bhfw:[],
  payr:{},
  xyye:[],
  guarid:0,
  bhr:[],
  sklist:[],
  bhxq:[],
  guarly:0,
  guarfp:0,
  guarzt:0,
  enab:2,
  resiEnab:2,
  reinfo:{},
  privs:{},
  guarde:0,
  usermhp:[],
  userlbp:[],
  zjusrf:[],
  now:''
};
export default function rpaymentgs(state=initialState,action){
  switch (action.type){
    case GET_ZJUSRF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        zjusrf:action.zjusrf
      });

    case GET_USERLBP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        userlbp:action.userlbp
      });
    case GET_USERMHP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        usermhp:action.usermhp
      });
    case GET_BHFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        bhfw:action.bhfw
      });
    case GET_PAYR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        payr:action.payr,
        xyye:action.xyye,
        enab:action.enab,
        resiEnab:action.resiEnab
      });
    case GET_NEWBH:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        guarid:action.guarid
      });
    case GET_BHR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        bhr:action.bhr
      });
    case GET_CKLC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        sklist:action.sklist
      });
    case GET_CKLS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        sklist:action.sklist
      });
    case GET_CKLG:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        sklist:action.sklist
      });
    case GET_BHXQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        bhxq:action.bhxq
      });
    case GET_LYSC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        guarly:action.guarly
      });
    case GET_LYQR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        guarly:action.guarly
      });
    case GET_FPSC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        guarfp:action.guarfp
      });
    case GET_XGZT:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        guarzt:action.guarzt
      });
    case GET_REINFO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        reinfo:action.reinfo
      });
    case GET_PRIVS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        privs:action.privs
      });
    case GET_DELBH:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        guarde:action.guarzt
      });
    default:
      return state;
  }
}


