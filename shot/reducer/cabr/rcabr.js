/**
 * Created by Zing on 2017/4/25.
 */
import "babel-polyfill";
import {
  GET_CABRXQ,
  GET_FWLXR,
  GET_KOUANR,
  GET_GCLB,
  GET_SSGC,
  GET_GCGD,
  GET_HQXQR,
  GET_QRZJLVR,
  GET_QRDFLVR,
  GET_SCLVZMR,
  GET_KYYER,
  GET_CARINFO,
  GET_GCBZ,
  GET_QYDKAR,
  GET_MDDKAR,
  GET_CARRS
} from '../../action/cabr/acabr';

const initialState ={
  err:true,
  errMsg:"",
  cabEnqu:{},
  fwlxaryr:[],
  kouaryr:[],
  gcliL:[],
  cabReplr:{},
  cabReplzj:0,
  cabRepldf:0,
  cabReplsc:0,
  residual:0,
  carinfo:[],
  cabReplgcbz:0,
  qydkar:[],
  mddkar:[],
  carrs:[],
};
export default function rcabrs(state=initialState,action){
  switch (action.type){
    case GET_CARRS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        carrs:action.carrs
      });
    case GET_QYDKAR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        qydkar:action.qydkar
      });
    case GET_MDDKAR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mddkar:action.mddkar
      });
    case GET_CABRXQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabEnqu:action.cabEnqu
      });
    case GET_GCBZ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabReplgcbz:action.cabReplgcbz
      });
    case GET_CARINFO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        carinfo:action.carinfo
      });
    case GET_FWLXR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        fwlxaryr:action.fwlxaryr
      });
    case GET_KOUANR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kouaryr:action.kouaryr
      });
    case GET_GCLB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        gcliL:action.gcliL
      });
    case GET_SSGC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        gcliL:action.gcliL
      });
    case GET_GCGD:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        gcliL:action.gcliL
      });
    case GET_HQXQR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabReplr:action.cabReplr
      });
    case GET_QRZJLVR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabReplzj:action.cabReplzj
      });
    case GET_QRDFLVR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabRepldf:action.cabRepldf
      });
    case GET_SCLVZMR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabReplsc:action.cabReplsc
      });
    case GET_KYYER:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        residual:action.residual
      });
    default:
      return state;
  }
}


