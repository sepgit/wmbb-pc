/**
 * Created by Administrator on 2016/12/1.
 */
import "babel-polyfill";
import {
    GET_BHFWH,
    GET_BHRH,
    GET_CKLCH,
    GET_CKLSH,
    GET_CKLGH,
    GET_BHXQH,
    GET_XGZTH,
    GET_FPSCH,
    GET_QRLVH,
    GET_YIH,
    GET_PAINFO
    } from '../../action/Paymenth/aPaymenth';


const initialState ={
    err:true,
    errMsg:"",
    bhfwh:[],
    bhrh:[],
    sklisth:[],
    bhxqh:{},
    guarzth:0,
    guarfksd:0,
    guaryih:0,
    guarqr:0,
    painfo:{}
};
export default function rpaymentgsh(state=initialState,action){
    switch (action.type){
        case GET_BHFWH:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                bhfwh:action.bhfwh
            });
        case GET_BHRH:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                bhrh:action.bhrh
            });
        case GET_CKLCH:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                sklisth:action.sklisth
            });
        case GET_CKLSH:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                sklisth:action.sklisth
            });
        case GET_CKLGH:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                sklisth:action.sklisth
            });
        case GET_BHXQH:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                bhxqh:action.bhxqh
            });
        case GET_XGZTH:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                guarzth:action.guarzth
            });
        case GET_FPSCH:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                guarfksd:action.guarfksd
            });
        case GET_QRLVH:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                guarqr:action.guarqr
            });
        case GET_YIH:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                guaryih:action.guaryih
            });
        case GET_PAINFO:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                painfo:action.painfo
            });
        default:
            return state;
    }
}


