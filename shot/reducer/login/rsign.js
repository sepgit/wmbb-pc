/**
 * Created by Zing on 2016/6/28.
 */
import "babel-polyfill";
import {
  LOGIN_DL,
  CODES_REFRESH,
  SIGN_ZC,
  SIGN_JHYJ,
  SIGN_JH,
  LOG_WJMM,
  LOG_CZMM,
  LOGIN_DLURL,
  GET_DLXP,
  GET_DLZX,
  GET_DLYJ,
  GET_DLFW,
  GET_DLCW
} from '../../action/login/asign';

const initialState ={
  err:true,
  errMsg:'',
  token:'',
  user:0,
  capi:0,
  pic:'',
  userid:0,
  uac:'',
  dlxp:[],
  dlzx:[],
  dlyj:[],
  dlfw:[],
  dlcw:[],
  signjh:false
};
export default function login(state=initialState,action){
  switch (action.type){
    case GET_DLCW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        dlcw:action.dlcw
      });
    case GET_DLFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        dlfw:action.dlfw
      });
    case GET_DLYJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        dlyj:action.dlyj
      });
    case GET_DLZX:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        dlzx:action.dlzx
      });
    case GET_DLXP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        dlxp:action.dlxp
      });
    case LOGIN_DL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        token:action.token,
        user:action.user
      });
    case CODES_REFRESH:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        capi:action.capi,
        pic:action.pic
      });
    case SIGN_ZC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        userid:action.userid,
        uac:action.uac
      });
    case SIGN_JHYJ:
      return Object.assign({}, state, {
        err:action.err,
        signjh:action.signjh
      });
    case SIGN_JH:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg
      });
    case LOG_WJMM:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg
      });
    case LOG_CZMM:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg
      });
    case LOGIN_DLURL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        token:action.token,
        user:action.user
      });
    default:
      return state;
  }
}