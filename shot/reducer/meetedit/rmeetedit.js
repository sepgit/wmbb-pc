/**
 * Created by Zing on 2017/4/1.
 */
import "babel-polyfill";
import {
  GET_MBTXQ,
  GET_MBTXQZ,
  GET_MBTXQT,
  POST_XJXQ,
  GET_MYJFW,
  GET_CRA,
  GET_CRAH,
  GET_QYDA,
  GET_QYDAZ,
  GET_MDDA,
  GET_MDDAZ,
  GET_JTFW,
  GET_MEDKAN,
  GET_MEDKANZ,
  DEL_MDEL,
  GET_QYDM,
  GET_MDDM,
  GET_KANM
} from '../../action/meetedit/ameetedit';


const initialState ={
  err:true,
  errMsg:"",
  mbtxq:[],
  mbtxqz:[],
  mbtxqt:[],
  meetChat:0,
  qydzj:[],
  qydsy:[],
  mddzj:[],
  mddsy:[],
  kanzj:[],
  kansy:[],
  myjfw:[],
  crah:[],
  cra:[],
  mjtfw:[],
  qydm:[],
  mddm:[],
  kanm:[]
};
export default function rmeetedit(state=initialState,action){
  switch (action.type){
    case GET_QYDM:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        qydm:action.qydm
      });
    case GET_MDDM:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mddm:action.mddm
      });
    case GET_KANM:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kanm:action.kanm
      });
    case GET_MBTXQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mbtxq:action.mbtxq
      });
    case GET_MBTXQZ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mbtxqz:action.mbtxqz
      });
    case GET_MBTXQT:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mbtxqt:action.mbtxqt
      });
    case POST_XJXQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        meetChat:action.meetChat
      });
    case GET_MYJFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        myjfw:action.myjfw
      });
    case GET_CRA:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cra:action.cra
      });
    case GET_CRAH:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        crah:action.crah
      });
    case GET_QYDA:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        qydsy:action.qydsy
      });
    case GET_QYDAZ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        qydzj:action.qydzj
      });
    case GET_MDDA:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mddsy:action.mddsy
      });
    case GET_MDDAZ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mddzj:action.mddzj
      });
    case GET_JTFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mjtfw:action.mjtfw
      });
    case GET_MEDKAN:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kansy:action.kansy
      });
    case GET_MEDKANZ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kanzj:action.kanzj
      });
    case DEL_MDEL:
      return Object.assign({}, state, {
        err:action.err
      });
    default:
      return state;
  }
}


