/**
 * Created by Zing on 2016/8/16.
 */
import "babel-polyfill";
import {
  GET_YSSFW,
  GET_YSSJTFW,
  GET_YSSPORTS,
  GET_YSSFBR,
  GET_YSSPROV,
  GET_YSSUSERS,
  GET_YSSXINJIAN,
  GET_YSSJTFWW,
  GET_YSSLISTC,
  GET_YSSLISTALL,
  GET_YSSLISTGD,
  GET_YSSDETL,
  GET_YSSZTGB,
  GET_FWPORTSYS,
  GET_YSFWZJ,
  GET_YSBZFW,
  GET_KANFW,
  GET_HOTPOF,
  GET_PLXGSR,
  GET_PLXGSRJQ,
  GET_KANF,
  PUT_VIPZSF
} from '../../action/Adsertage/aadsertage';


const initialState ={
  err:true,
  errMsg:"",
  yssser:[],
  yssjtfw:[],
  yssports:[],
  yssfbr:[],
  yssprovs:[],
  yssusers:{},
  contid:0,
  isshow:false,
  yssjtfww:[],
  ysslists:[],
  yssdetl:{},
  isc:false,
  fwysports:[],
  ysfwzj:[],
  contfwid:0,
  kanfu:[],
  hotpof:[],
  kanf:[],
  vipCount:0,
  platCount:0,
  pushCount:0,
  allVipCount:0,
  contzs:0
};
export default function yssreduer(state=initialState,action){
  switch (action.type){
    case PUT_VIPZSF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        contzs:action.contzs
      });
    case GET_KANF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kanf:action.kanf
      });
    case GET_PLXGSRJQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg
      });
    case GET_YSSFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yssser:action.yssser
      });
    case GET_YSSJTFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yssjtfw:action.yssjtfw
      });
    case GET_YSSPORTS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yssports:action.yssports
      });
    case GET_YSSFBR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yssfbr:action.yssfbr
      });
    case GET_YSSPROV:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yssprovs:action.yssprovs
      });
    case GET_YSSUSERS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yssusers:action.yssusers
      });
    case GET_YSSXINJIAN:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        contid:action.contid,
        isshow:action.isshow
      });
    case GET_YSSJTFWW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        contid:action.contid,
        yssjtfww:action.yssjtfww
      });
    case GET_YSSLISTC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysslists:action.ysslists,
        vipCount:action.vipCount,
        platCount:action.platCount,
        pushCount:action.pushCount,
        allVipCount:action.allVipCount
      });
    case GET_YSSLISTALL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysslists:action.ysslists,
        vipCount:action.vipCount,
        platCount:action.platCount,
        pushCount:action.pushCount,
        allVipCount:action.allVipCount
      });
    case GET_YSSLISTGD:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysslists:action.ysslists,
        vipCount:action.vipCount,
        platCount:action.platCount,
        pushCount:action.pushCount,
        allVipCount:action.allVipCount
      });
    case GET_YSSDETL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yssdetl:action.yssdetl
      });
    case GET_YSSZTGB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        contid:action.cont,
        isc:action.isc
      });
    case GET_FWPORTSYS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        fwysports:action.fwysports
      });
    case GET_YSFWZJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ysfwzj:action.ysfwzj
      });
    case GET_YSBZFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        contfwid:action.contfwid
      });
    case GET_KANFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kanfu:action.kanfu
      });
    case GET_HOTPOF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hotpof:action.hotpof
      });
    case GET_PLXGSR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg
      });
    default:
      return state;
  }
}


