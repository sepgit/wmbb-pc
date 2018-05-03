/**
 * Created by Zing on 2016/8/22.
 */
import "babel-polyfill";
import {
  GET_EMXJ,
  GET_EMCS,
  GET_EMGD,
  GET_EMDEL,
  GET_EMQX,
  PUT_EMLZ,
  PUT_EMUSE,
  PUT_EMSETQX
} from '../../action/employee/aemployee';


const initialState ={
  err:true,
  errMsg:"",
  userid:0,
  isfs:false,
  uerlist:[],
  userdx:{},
  privqx:{},
  userlzid:0,
  upis:false,
  userxgid:0,
  upisxg:false,
  userqxid:0,
  staffNum:0
};
export default function Remployee(state=initialState,action){
  switch (action.type){
    case GET_EMXJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        userid:action.userid,
        isfs:action.isfs
      });
    case GET_EMCS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        uerlist:action.uerlist,
        staffNum:action.staffNum
      });
    case GET_EMGD:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        uerlist:action.uerlist,
        staffNum:action.staffNum
      });
    case GET_EMDEL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        userdx:action.userdx
      });
    case GET_EMQX:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        privqx:action.privqx
      });
    case PUT_EMLZ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        userlzid:action.userlzid,
        upis:action.upis
      });
    case PUT_EMUSE:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        userxgid:action.userxgid,
        upisxg:action.upisxg
      });
    case PUT_EMSETQX:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        userqxid:action.userqxid
      });
    default:
      return state;
  }
}


