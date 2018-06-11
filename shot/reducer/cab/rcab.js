/**
 * Created by Zing on 2017/4/25.
 */
import "babel-polyfill";
import {
  GET_KYYE,
  GET_GYSFW,
  GET_GYSL,
  GET_GKFY,
  GET_QCLB,
  GET_SSQC,
  GET_QCGD,
  GET_HQXQ,
  GET_FWLX,
  GET_KOUAN,
  GET_QRZJLV,
  GET_QRDFLV,
  GET_SCLVZM,
  GET_XGZTQ,
  GET_CAINFO,
  GET_QCBZ,
  GET_QYDKA,
  GET_MDDKA,
  GET_CARRS
} from '../../action/cab/acab';

const initialState ={
  err:true,
  errMsg:"",
  residual:0,
  resiUsd:0,
  gysfw:[],
  gysl:[],
  cabFee:0,
  rowCount:0,
  qcliL:[],
  cabEnquL:{},
  fwlxary:[],
  kouary:[],
  cabEnquzj:0,
  cabEnqudf:0,
  cabEnqusc:0,
  cabEnquq:0,
  shutTime:'',
  cainfo:[],
  cabEnquqcbz:0,
  qydka:[],
  mddka:[],
  carrs:[],
};
export default function rcabs(state=initialState,action){
  switch (action.type){
    case GET_CARRS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        carrs:action.carrs
      });
    case GET_MDDKA:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mddka:action.mddka
      });
    case GET_QYDKA:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        qydka:action.qydka
      });
    case GET_CAINFO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cainfo:action.cainfo
      });
    case GET_QCBZ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabEnquqcbz:action.cabEnquqcbz
      });
    case GET_KYYE:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        residual:action.residual,
        resiUsd:action.resiUsd
      });
    case GET_XGZTQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabEnquq:action.cabEnquq,
        shutTime:action.shutTime
      });
    case GET_GYSFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        gysfw:action.gysfw
      });
    case GET_GYSL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        gysl:action.gysl
      });
    case GET_GKFY:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabFee:action.cabFee
      });
    case GET_QCLB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        qcliL:action.qcliL
      });
    case GET_SSQC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        qcliL:action.qcliL
      });
    case GET_QCGD:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        qcliL:action.qcliL
      });
    case GET_HQXQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabEnquL:action.cabEnquL
      });
    case GET_FWLX:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        fwlxary:action.fwlxary
      });
    case GET_KOUAN:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kouary:action.kouary
      });
    case GET_QRZJLV:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabEnquzj:action.cabEnquzj
      });
    case GET_QRDFLV:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabEnqudf:action.cabEnqudf
      });
    case GET_SCLVZM:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabEnqusc:action.cabEnqusc
      });
    default:
      return state;
  }
}

