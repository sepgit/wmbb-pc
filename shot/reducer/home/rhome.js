/**
 * Created by Zing on 2016/6/20.
 */
import "babel-polyfill";
import {GET_EMPLOYEES,
  GET_PRIV,
  GET_INQUIRY,
  GET_BACKPLATE,
  GET_ADVISORY,
  GET_REPLY,
  GET_HGERXX,
  GET_PORTS,
  GET_INDUS,
  GET_HTCDL,
  GET_HXGMM,
  GET_HCOMPS,
  GET_HXJQY,
  GET_HCJQY,
  GET_PRIVXP,
  GET_XYYE,
  GET_XXTXXG,
  GET_YJFW,
  GET_YJSFW,
  GET_YJSJTFWW,
  GET_YPFW,
  GET_YJLISTGD,
  GET_YPLISTGD,
  GET_YJSLISTGD,
  GET_YJPORTS,
  GET_YJPORTSN,
  GET_KANZS,
  GET_KANZSM,
  GET_YJCARRS,
  GET_YJLISTALL,
  GET_YPLISTALL,
  GET_FWLISTALL,
  GET_YJUINFO,
  POST_GYSNEWYJ,
  GET_VIPS,
  GET_WUMAOG,
  GET_HOTJGYS,
  GET_SERVSALL,
  POST_CABDISPS,
  GET_PTYJXQ,
  GET_FWYJXQ,
  GET_SFZZRZ,
  POST_SQRZ,
  PUT_HGERXXGS,
  PUT_HGERXXYG
} from '../../action/home/ahome';

const initialState ={
  err:true,
  errMsg:"",
  resultAll:0,
  user:{},
  priv:{},
  quiry:[],
  backlate:[],
  advisory:[],
  reply:[],
  usergrid:0,
  isshow:false,
  xports:[],
  indus:[],
  comps:{},
  compsid:0,
  compcid:0,
  privxt:{},
  residual:0,
  xxtxxg:0,
  yjser:[],
  yjsser:[],
  yjsjtfww:[],
  yjportsn:[],
  yjports:[],
  kanzs:[],
  kanzsm:[],
  yjcarrs:[],
  ypser:[],
  yjlists:[],
  yplists:[],
  vipl:[],
  fwlists:[],
  provids:0,
  yjuinfo:{},
  wumaoge:{},
  tjgys:[],
  cabDisp:0,
  servsall:[],
  ptyjxq:{},
  fwyjxq:{},
  scors:[],
  fwscors:[],
  isAudi:false,
  isshowgs:false,
  isshowyg:false,
  putcompid:0
};
export default function homeinfo(state=initialState,action){
  switch (action.type){
    case POST_SQRZ:
        return Object.assign({}, state, {
            err:action.err,
            errMsg:action.errMsg,
            memb:action.memb
        });
    case GET_SFZZRZ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        isAudi:action.isAudi
      });
    case GET_FWYJXQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        fwyjxq:action.fwyjxq,
        fwscors:action.fwscors
      });
    case GET_PTYJXQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ptyjxq:action.ptyjxq,
        scors:action.scors
      });
    case GET_HOTJGYS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        tjgys:action.tjgys
      });
    case GET_WUMAOG:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        wumaoge:action.wumaoge
      });
    case GET_VIPS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        vipl:action.vipl
      });
    case GET_YJFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yjser:action.yjser
      });
    case GET_YJSFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yjsser:action.yjsser
      });
    case GET_YJSJTFWW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yjsjtfww:action.yjsjtfww
      });
    case GET_YPFW:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ypser:action.ypser
      });
    case GET_YJLISTGD:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yjlists:action.yjlists,
        resultAll:action.resultAll
      });
    case GET_YPLISTGD:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        resultAll:action.resultAll,
        rowCount:action.rowCount,
        yplists:action.yplists
      });
    case GET_YJSLISTGD:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yjslists:action.yjslists,
        resultAll:action.resultAll
      });
    case GET_YJPORTS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yjports:action.yjports
      });
    case GET_YJPORTSN:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yjportsn:action.yjportsn
      });
    case GET_KANZS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kanzs:action.kanzs
      });
    case GET_KANZSM:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        kanzsm:action.kanzsm
      });
    case GET_YJCARRS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yjcarrs:action.yjcarrs
      });
    case GET_YJLISTALL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        resultAll:action.resultAll,
        yjlists:action.yjlists
      });
    case GET_YPLISTALL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        resultAll:action.resultAll,
        rowCount:action.rowCount,
        yplists:action.yplists
      });
    case GET_FWLISTALL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        resultAll:action.resultAll,
        fwlists:action.fwlists
      });
    case GET_YJUINFO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        yjuinfo:action.yjuinfo,
        deposit:action.deposit
      });
    case POST_GYSNEWYJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        provids:action.provids
      });
    case GET_XXTXXG:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        xxtxxg:action.xxtxxg
      });
    case GET_EMPLOYEES:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        user:action.user
      });
    case GET_PRIV:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        priv:action.priv
      });
    case GET_INQUIRY:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        quiry:action.quiry
      });
    case GET_BACKPLATE:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        totalRows:action.totalRows,
        rowCount:action.rowCount,
        backlate:action.backlate
      });
    case GET_ADVISORY:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        advisory:action.advisory
      });
    case GET_REPLY:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        reply:action.reply
      });
    case GET_HGERXX:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        usergrid:action.user,
        isshow:action.isshow
      });
    case PUT_HGERXXGS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        putcompid:action.comp,
        isshowgs:action.isshowgs
      });
    case PUT_HGERXXYG:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        usergrid:action.user,
        isshowyg:action.isshowyg
      });
    case GET_PORTS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        xports:action.xports
      });
    case GET_INDUS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        indus:action.indus
      });
    case GET_HTCDL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg
      });
    case GET_HXGMM:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg
      });
    case GET_HCOMPS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        comps:action.comps
      });
    case GET_HXJQY:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        compsid:action.compsid
      });
    case GET_HCJQY:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        compcid:action.compcid
      });
    case GET_PRIVXP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        privxt:action.privxt
      });
    case GET_XYYE:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        residual:action.residual
      });
    case GET_SERVSALL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        servsall:action.servsall
      });
    case POST_CABDISPS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabDisp:action.cabDisp
      });
    default:
      return state;
  }
}


