/**
 * Created by Chen on 2017/12/05.
 */
import "babel-polyfill";
import {
  GET_FWLXCWB,
  GET_QYDKACWB,
  GET_MDDKACWB,
  GET_CARRSCWB,
  GET_CABDISPS,
  GET_CABDISP,
  POST_CWBFB,
  POST_CWBFBDG,
  POST_CWBFBHG,
  POST_CWBFBFR,
  POST_CWBFBOT,
  GET_CARRSCWBA,
  PUT_CWBCX,
  GET_CABYUE,
  GET_SEARCHLISTS
} from '../../action/cabMy/acabMy';

const initialState ={
  err:true,
  errMsg:"",
  fwlxarycwb:[],     //服务类型
  kouary:[],      //口岸
  qydkacwb:[],      //启运地
  mddkacwb:[],       //目的地
  cabDispsList:[], //平台舱位列表
  cabDispdetail:{},
  cwbfb:0,
  carrscwb:[],
  cwbfbdg:0,
  cwbfbhg:0,
  cwbfbfr:0,
  cwbfbot:0,
  carrscwba:[],
  cwbcx:0,
  residual:0,
  resiUsd:0
};
export default function rcabMy(state=initialState,action){
  switch (action.type){
    case GET_CABYUE:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        residual:action.residual,
        resiUsd:action.resiUsd
      });
      case GET_SEARCHLISTS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabDispsList:action.cabDispsList
      });
    case GET_CARRSCWBA:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        carrscwba:action.carrscwba
      });
    case POST_CWBFBOT:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cwbfbot:action.cwbfbot
      });
    case POST_CWBFBFR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cwbfbfr:action.cwbfbfr
      });
    case POST_CWBFBHG:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cwbfbhg:action.cwbfbhg
      });
    case POST_CWBFBDG:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cwbfbdg:action.cwbfbdg
      });
    case POST_CWBFB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cwbfb:action.cwbfb
      });
    case GET_FWLXCWB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        fwlxarycwb:action.fwlxarycwb
      });
    case PUT_CWBCX:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cwbcx:action.cwbcx
      });
    case GET_QYDKACWB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        qydkacwb:action.qydkacwb
      });
    case GET_MDDKACWB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mddkacwb:action.mddkacwb
      });
    case GET_CARRSCWB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        carrscwb:action.carrscwb
      });
    case GET_CABDISPS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabDispsList:action.cabDispsList
      });
    case GET_CABDISP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabDispdetail:action.cabDispdetail
      });
    default:
      return state;
  }
}