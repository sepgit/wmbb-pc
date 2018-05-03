/**
 * Created by Zing on 2016/10/20.
 */
import "babel-polyfill";
import {
  GET_YSPFW,
  GET_YSPPORTS,
  GET_YSPPORTSA,
  GET_YSPFBR,
  GET_YSPUSERS,
  GET_YSPXINJIAN,
  GET_YSPLISTC,
  GET_YSPLISTALL,
  GET_YSPLISTGD,
  GET_YSPDETL,
  GET_YSPZTGB,
  GET_YSSPZJ,
  GET_YSBZSP,
  GET_KANNOQTZ,
  GET_HOTPOSP,
  GET_PLXGSP,
  GET_PLXGSPJQ,
  GET_KANSP,
  PUT_VIPZSS
} from '../../action/Spfreight/aspfreight';


const initialState ={
  err:true,
  errMsg:"",
  ysper:[],
  yspports:[],
  yspportsa:[],
  yspfbr:[],
  yspusers:[],
  advaid:0,
  isshow:false,
  rowCount:0,
  ysplists:[],
  yspdetl:{},
  isc:false,
  ysspzj:[],
  advabzidsp:0,
  kannoqtz:[],
  hotposp:[],
  kansp:[],
  vipCount:0,
  platCount:0,
  pushCount:0,
  allVipCount:0,
  advazss:0
};
export default function yspreduer(state=initialState,action){
  switch (action.type){
    case PUT_VIPZSS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        advazss:action.advazss
      });
    case GET_KANSP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kansp:action.kansp
      });
    case GET_PLXGSPJQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg
      });
    case GET_YSPFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysper:action.ysper
      });
    case GET_YSPPORTS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yspports:action.yspports
      });
    case GET_YSPPORTSA:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yspportsa:action.yspportsa
      });
    case GET_YSPFBR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yspfbr:action.yspfbr
      });
    case GET_YSPUSERS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yspusers:action.yspusers
      });
    case GET_YSPXINJIAN:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        advaid:action.advaid,
        isshow:action.isshow
      });
    case GET_YSPLISTC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        ysplists:action.ysplists,
        vipCount:action.vipCount,
        platCount:action.platCount,
        pushCount:action.pushCount,
        allVipCount:action.allVipCount
      });
    case GET_YSPLISTALL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        ysplists:action.ysplists,
        vipCount:action.vipCount,
        platCount:action.platCount,
        pushCount:action.pushCount,
        allVipCount:action.allVipCount
      });
    case GET_YSPLISTGD:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        ysplists:action.ysplists,
        vipCount:action.vipCount,
        platCount:action.platCount,
        pushCount:action.pushCount,
        allVipCount:action.allVipCount
      });
    case GET_YSPDETL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yspdetl:action.yspdetl
      });
    case GET_YSPZTGB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        advaid:action.adva,
        isc:action.isc
      });
    case GET_YSSPZJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysspzj:action.ysspzj
      });
    case GET_YSBZSP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        advabzidsp:action.advabzidsp
      });
    case GET_KANNOQTZ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kannoqtz:action.kannoqtz
      });
    case GET_HOTPOSP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hotposp:action.hotposp
      });
    case GET_PLXGSP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg
      });
    default:
      return state;
  }
}


