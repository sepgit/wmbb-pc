/**
 * Created by Zing on 2016/8/22.
 */
import "babel-polyfill";
import {
  GET_HPSER,
  GET_HPPEO,
  GET_HPXPPEO,
  GET_HPKA,
  GET_HPLISTC,
  GET_HPLISTALL,
  GET_HPLISTGD,
  GET_HPXPXQ,
  GET_HPHPXQ,
  GET_HPXJ,
  GET_HPCARRS,
  GET_HPPORTSZJ,
  GET_HPPORTSZJM,
  GET_HPCARRSCY,
  GET_HPSENDTO,
  GET_HPGCCTO,
  GET_HPGWTO,
  GET_HPXADDAIR,
  GET_HPXADDFCL,
  GET_HPXADDLCL,
  GET_HPXADDHANG,
  GET_HPXADDREEFER,
  GET_HPHL,
  GET_HPHF,
  GET_HPPEOINFO,
  GET_HPPORTSF,
  GET_XADDHPFR,
  GET_XADDHPDG,
  GET_XADDHPOT,
  GET_XADDHPBB,
  GET_XADDHPRORO,
  GET_NEWQCB,
  GET_GCXJ,
  GET_BZLBH,
  GET_XJBZH,
  GET_HPDJ,
  GET_CWHPS,
  GET_QYDHP,
  GET_MDDHP,
  GET_ZZDHP
} from '../../action/backplate/abackplate';


const initialState ={
  err:true,
  errMsg:"",
  hser:[],
  hppeo:[],
  hpxppeo:[],
  ports:[],
  hplists:[],
  enqudx:{},
  repldx:{},
  cctoary:'',
  carrsary:'',
  filename:'',
  replid:0,
  isshow:false,
  carrs:[],
  hpportszj:[],
  hpportszjm:[],
  hpcarrscy:[],
  hpprovs:[],
  hpcctos:[],
  adminlinfohp:'',
  hpwtuo:[],
  hpenquid:0,
  hlreplid:0,
  hfreplid:0,
  peoinfo:{},
  hportsf:[],
  iscz:false,
  deposit:0,
  cabEnqu:0,
  cabRepl:0,
  bzlisth:[],
  residual:0,
  resiUsd:0,
  cabReplb:{},
  qydhp:[],
  mddhp:[],
  zzdhp:[]
};
export default function Rbackplate(state=initialState,action){
  switch (action.type){
    case GET_ZZDHP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        zzdhp:action.zzdhp
      });
    case GET_QYDHP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        qydhp:action.qydhp
      });
    case GET_MDDHP:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        mddhp:action.mddhp
      });
    case GET_XJBZH:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg
      });
    case GET_CWHPS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabReplb:action.cabReplb
      });
    case GET_HPDJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        residual:action.residual,
        resiUsd:action.resiUsd
      });
    case GET_BZLBH:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        bzlisth:action.bzlisth
      });
    case GET_HPSER:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hser:action.hser
      });
    case GET_HPPEO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hppeo:action.hppeo
      });
    case GET_HPXPPEO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpxppeo:action.hpxppeo
      });
    case GET_HPKA:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        ports:action.ports
      });
    case GET_HPLISTC:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        hplists:action.hplists
      });
    case GET_HPLISTALL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        hplists:action.hplists
      });
    case GET_HPLISTGD:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        rowCount:action.rowCount,
        hplists:action.hplists
      });
    case GET_HPXPXQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        enqudx:action.enqudx,
        carrsary:action.carrsary,
        filename:action.filename
      });
    case GET_HPHPXQ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        repldx:action.repldx,
        cctoary:action.cctoary,
        iscz:action.iscz
      });
    case GET_HPXJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        replid:action.replid,
        isshow:action.isshow
      });
    case GET_HPCARRS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        carrs:action.carrs
      });
    case GET_HPPORTSZJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpportszj:action.hpportszj
      });
    case GET_HPPORTSZJM:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpportszjm:action.hpportszjm
      });
    case GET_HPCARRSCY:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpcarrscy:action.hpcarrscy
      });
    case GET_HPSENDTO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpprovs:action.hpprovs
      });
    case GET_HPGCCTO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpcctos:action.hpcctos,
        adminlinfohp:action.adminlinfohp
      });
    case GET_HPGWTO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpwtuo:action.hpwtuo
      });
    case GET_HPXADDAIR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpenquid:action.hpenquid
      });
    case GET_HPXADDFCL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpenquid:action.hpenquid
      });
    case GET_HPXADDLCL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpenquid:action.hpenquid
      });
    case GET_HPXADDHANG:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpenquid:action.hpenquid
      });
    case GET_HPXADDREEFER:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpenquid:action.hpenquid
      });
    case GET_HPHL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hlreplid:action.hlreplid
      });
    case GET_HPHF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hfreplid:action.hfreplid
      });
    case GET_HPPEOINFO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        peoinfo:action.peoinfo,
        deposit:action.deposit
      });
    case GET_HPPORTSF:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hportsf:action.hportsf
      });
    case GET_XADDHPFR:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpenquid:action.hpenquid
      });
    case GET_XADDHPDG:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpenquid:action.hpenquid
      });
    case GET_XADDHPOT:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpenquid:action.hpenquid
      });
    case GET_XADDHPBB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpenquid:action.hpenquid
      });
    case GET_XADDHPRORO:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        hpenquid:action.hpenquid
      });
    case GET_NEWQCB:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabEnqu:action.cabEnqu
      });
    case GET_GCXJ:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        cabRepl:action.cabRepl
      });
    default:
      return state;
  }
}


