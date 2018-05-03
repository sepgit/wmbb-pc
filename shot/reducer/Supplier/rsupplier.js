/**
 * Created by Zing on 2016/8/12.
 */
import "babel-polyfill";
import {
  GET_LIANXIR,
  GET_GYSSER,
  GET_GYSJTSER,
  GET_GYSHFKA,
  GET_GYSNEW,
  GET_GYSLISTC,
  GET_GYSLISTALL,
  GET_GYSLISTGD,
  GET_GYSDEL,
  GET_GYSDET,
  GET_GYSUPD,
  GET_GYSPORTSZJ,
  GET_KANSU,
  GET_USERMH,
  GET_USERLB,
  GET_ZJUSR,
  GET_KANSUP
} from '../../action/Supplier/asupplier';


const initialState ={
  err:true,
  errMsg:"",
  lianuser:{},
  gysser:[],
  gyjtsser:[],
  gyskan:[],
  provid:0,
  acco:'',
  isshow:false,
  gyslist:[],
  deisshow:false,
  provdel:{},
  upprovid:0,
  upacco:'',
  upisshow:false,
  portszj:[],
  kansu:[],
  usermh:[],
  userlb:[],
  zjusr:[],
  kansup:[]
};
export default function rsupplier(state=initialState,action){
  switch (action.type){
    case GET_KANSUP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kansup:action.kansup
      });
    case GET_ZJUSR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        zjusr:action.zjusr
      });
    case GET_USERLB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        userlb:action.userlb
      });
    case GET_USERMH:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        usermh:action.usermh
      });
    case GET_KANSU:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kansu:action.kansu
      });
    case GET_LIANXIR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        lianuser:action.lianuser
      });
    case GET_GYSSER:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        gysser:action.gysser
      });
    case GET_GYSJTSER:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        gyjtsser:action.gyjtsser
      });
    case GET_GYSHFKA:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        gyskan:action.gyskan
      });
    case GET_GYSNEW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        provid:action.provid,
        acco:action.acco,
        isshow:action.isshow
      });
    case GET_GYSLISTC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        gyslist:action.gyslist
      });
    case GET_GYSLISTALL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        gyslist:action.gyslist
      });
    case GET_GYSLISTGD:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        gyslist:action.gyslist
      });
    case GET_GYSDEL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        deisshow:action.deisshow
      });
    case GET_GYSDET:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        provdel:action.provdel
      });
    case GET_GYSUPD:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        upprovid:action.upprovid,
        upacco:action.upacco,
        upisshow:action.upisshow
      });
    case GET_GYSPORTSZJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        portszj:action.portszj
      });
    default:
      return state;
  }
}


