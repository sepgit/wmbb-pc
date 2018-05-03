/**
 * Created by Zing on 2016/7/27.
 */
import "babel-polyfill";
import {
    GET_SENDTO,
    GET_GCCTO,
    GET_GCARRS,
    GET_XADDFCL,
    GET_XPXQZB,
    GET_XPXQTG,
    GET_XPXQZZ,
    GET_XPXQSC,
    GET_XADDLCL,
    GET_XADDAIR,
    GET_XADDHANG,
    GET_XADDREEFER,
    GET_CARRSCY,
    GET_GWTO,
    GET_XADDFR,
    GET_XADDDG,
    GET_XADDOT,
    GET_XADDBB,
    GET_XADDRORO,
    GET_GBTS,
    GET_TSPTYS,
    GET_TSTZX,
    GET_TSFW,
    GET_YSDEL,
    GET_USEDEL,
    GET_FWKAN,
    GET_XJGYS,
    GET_SERA
    } from '../../action/inquiry/ainquiry';

const initialState ={
    err:'',
    errMsg:'',
    provs:[],
    cctos:[],
    adminlinfo:'',
    carrs:[],
    enquid:0,
    isshow:false,
    replzbid:0,
    enqutgid:0,
    enquzzid:0,
    enquscid:0,
    isuploads:false,
    carrscy:[],
    wtuo:[],
    xpts:false,
    tspuys:[],
    tstzx:[],
    tsfw:[],
    yjdel:{},
    userdel:{},
    fwkan:[],
    provid:0,
    xjgys:'',
    xsera:[]
};
export default function getnewlist(state=initialState,action){
    switch (action.type){
        case GET_SENDTO:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                provs:action.provs
            });
        case GET_GCCTO:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                cctos:action.cctos,
                adminlinfo:action.adminlinfo
            });
        case GET_GCARRS:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                carrs:action.carrs
            });
        case GET_XADDFCL:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                enquid:action.enquid,
                isshow:action.isshow
            });
        case GET_XPXQZB:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                replzbid:action.replzbid
            });
        case GET_XPXQTG:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                enqutgid:action.enqutgid
            });
        case GET_XPXQZZ:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                enquzzid:action.enquzzid
            });
        case GET_XPXQSC:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                enquscid:action.enquscid,
                isuploads:action.isuploads
            });
        case GET_XADDLCL:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                enquid:action.enquid,
                isshow:action.isshow
            });
        case GET_XADDAIR:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                enquid:action.enquid,
                isshow:action.isshow
            });
        case GET_XADDHANG:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                enquid:action.enquid,
                isshow:action.isshow
            });
        case GET_XADDREEFER:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                enquid:action.enquid,
                isshow:action.isshow
            });
        case GET_CARRSCY:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                carrscy:action.carrscy
            });
        case GET_GWTO:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                wtuo:action.wtuo
            });
        case GET_XADDFR:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                enquid:action.enquid,
                isshow:action.isshow
            });
        case GET_XADDDG:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                enquid:action.enquid,
                isshow:action.isshow
            });
        case GET_XADDOT:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                enquid:action.enquid,
                isshow:action.isshow
            });
        case GET_XADDBB:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                enquid:action.enquid,
                isshow:action.isshow
            });
        case GET_XADDRORO:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                enquid:action.enquid,
                isshow:action.isshow
            });
        case GET_GBTS:
            return Object.assign({}, state, {
                xpts:action.xpts
            });
        case GET_TSPTYS:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                tspuys:action.tspuys
            });
        case GET_TSTZX:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                tstzx:action.tstzx
            });
        case GET_TSFW:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                tsfw:action.tsfw
            });
        case GET_YSDEL:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                yjdel:action.yjdel
            });
        case GET_USEDEL:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                userdel:action.userdel
            });
        case GET_FWKAN:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                fwkan:action.fwkan
            });
        case GET_XJGYS:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                provid:action.provid,
                xjgys:action.xjgys
            });
        case GET_SERA:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                xsera:action.xsera
            });
        default:
            return state;
    }
}


