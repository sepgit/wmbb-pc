/**
 * Created by Chen on 2017/12/05.
 */
import "babel-polyfill";
import {
  GET_FWLX,
  GET_KOUAN,
  GET_QYDKA,
  GET_MDDKA,
  GET_CARRSP,
  GET_CABDISPS,
  GET_CABDISP,
  PUT_CABDISPSBUY,
  GET_CABDEPOS,
  GET_NLFWLX
} from '../../action/cabPlatform/acabPlatform';

const initialState ={
  err:true,
  errMsg:"",
  fwlxary:[],     //服务类型
  kouary:[],      //口岸
  qydka:[],      //启运地
  mddka:[],       //目的地
  carrsp:[],       //承运商列表
  cabDispsList:[], //平台舱位列表
  cabDispdetail:{},
  cabDispID:0,
  residual:0,
  resiUsd:0,
  nlfw:[]
};
export default function rcabPlatform(state=initialState,action){
  switch (action.type){
    case GET_NLFWLX:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        nlfw:action.nlfw
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
    case GET_QYDKA:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        qydka:action.qydka
      });
    case GET_MDDKA:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mddka:action.mddka
      });
    case GET_CARRSP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        carrsp:action.carrsp
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
    case PUT_CABDISPSBUY:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabDispID:action.cabDisp
      });
    case GET_CABDEPOS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        residual:action.residual,
        resiUsd:action.resiUsd
      });
    default:
      return state;
  }
}