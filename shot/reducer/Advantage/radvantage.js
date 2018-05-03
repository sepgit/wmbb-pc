/**
 * Created by Zing on 2016/8/16.
 */
import "babel-polyfill";
import {
  GET_YSFW,
  GET_YSPORTS,
  GET_YSCARRS,
  GET_YSPROV,
  GET_YSUSERS,
  GET_YSXINJIAN,
  GET_YSFBR,
  GET_YSLISTC,
  GET_YSLISTALL,
  GET_YSLISTGD,
  GET_YSDETL,
  GET_YSZTGB,
  GET_YSCARRSCY,
  GET_YSLINE,
  GET_YSPORTSM,
  GET_YJPORTSYS,
  GET_YSQPORTSZJ,
  GET_YSMPORTSZJM,
  GET_YSGFWPORTSF,
  GET_HXPORTSMZJ,
  GET_HXPORTSZJ,
  GET_YSCARRSALL,
  GET_YSBZ,
  GET_KANNOQ,
  GET_KANNOM,
  GET_HOTPO,
  GET_HOTPOL,
  GET_PLXG,
  GET_PLXGJQ,
  GET_QYDYJ,
  GET_MDDYJ,
  PUT_VIPZS
} from '../../action/Advantage/aadvantage';


const initialState ={
  err:true,
  errMsg:"",
  ysser:[],
  ysports:[],
  yscarrs:[],
  ysprovs:[],
  ysusers:{},
  advaid:0,
  isshow:false,
  ysfbr:[],
  yslists:[],
  ysdetl:{},
  isc:false,
  carrscy:[],
  ysline:[],
  ysportsm:[],
  yjysports:[],
  ysqportszj:[],
  ysmportszjm:[],
  ysgfwportsf:[],
  hxportszjm:[],
  hxportszj:[],
  yscarrsall:[],
  advabzid:0,
  kannoq:[],
  kannom:[],
  hotpo:[],
  hotpol:[],
  qydyj:[],
  mddyj:[],
  vipCount:0,
  platCount:0,
  pushCount:0,
  allVipCount:0,
  advazs:0
};
export default function ysreduer(state=initialState,action){
  switch (action.type){
    case PUT_VIPZS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        advazs:action.advazs
      });
    case GET_QYDYJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        qydyj:action.qydyj
      });
    case GET_MDDYJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mddyj:action.mddyj
      });
    case GET_PLXGJQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg
      });
    case GET_YSFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysser:action.ysser
      });
    case GET_YSPORTS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysports:action.ysports
      });
    case GET_YSCARRS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yscarrs:action.yscarrs
      });
    case GET_YSPROV:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysprovs:action.ysprovs
      });
    case GET_YSUSERS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysusers:action.ysusers
      });
    case GET_YSXINJIAN:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        advaid:action.advaid,
        isshow:action.isshow
      });
    case GET_YSFBR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysfbr:action.ysfbr
      });
    case GET_YSLISTC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yslists:action.yslists,
        vipCount:action.vipCount,
        platCount:action.platCount,
        pushCount:action.pushCount,
        allVipCount:action.allVipCount
      });
    case GET_YSLISTALL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yslists:action.yslists,
        vipCount:action.vipCount,
        platCount:action.platCount,
        pushCount:action.pushCount,
        allVipCount:action.allVipCount
      });
    case GET_YSLISTGD:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yslists:action.yslists,
        vipCount:action.vipCount,
        platCount:action.platCount,
        pushCount:action.pushCount,
        allVipCount:action.allVipCount
      });
    case GET_YSDETL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysdetl:action.ysdetl
      });
    case GET_YSZTGB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        advaid:action.advaid,
        isc:action.isc
      });
    case GET_YSCARRSCY:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        carrscy:action.carrscy
      });
    case GET_YSLINE:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysline:action.ysline
      });
    case GET_YSPORTSM:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysportsm:action.ysportsm
      });
    case GET_YJPORTSYS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yjysports:action.yjysports
      });
    case GET_YSQPORTSZJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysqportszj:action.ysqportszj
      });
    case GET_YSMPORTSZJM:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysmportszjm:action.ysmportszjm
      });
    case GET_YSGFWPORTSF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysgfwportsf:action.ysgfwportsf
      });
    case GET_HXPORTSMZJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hxportszjm:action.hxportszjm
      });
    case GET_HXPORTSZJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hxportszj:action.hxportszj
      });
    case GET_YSCARRSALL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yscarrsall:action.yscarrsall
      });
    case GET_YSBZ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        advabzid:action.advabzid
      });
    case GET_KANNOQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kannoq:action.kannoq
      });
    case GET_KANNOM:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kannom:action.kannom
      });
    case GET_HOTPO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hotpo:action.hotpo
      });
    case GET_HOTPOL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hotpol:action.hotpol
      });
    case GET_PLXG:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg
      });
    default:
      return state;
  }
}


