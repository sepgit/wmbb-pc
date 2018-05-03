/**
 * Created by Zing on 2016/7/14.
 */
import "babel-polyfill";
import {
    BOOM_XPSHOW,
    BOOM_HFSHOW,
    BOOM_ZXSHOW,
    BOOM_GYSSHOW,
    BOOM_YSSHOW,
    BOOM_YSSSHOW,
    BOOM_PMSHOW,
    BOOM_PMSHOWFW,
    BOOM_EMSHOW,
    BOOM_HPSHOW,
    BOOM_TZHSHOW,
    BOOM_PMSHOWSP,
    BOOM_CKLXQ,
    BOOM_FKLXQ
    } from '../../action/home/ahome';

const initialState ={
    text:false,
    keys:'',
    textxp:false,
    keysxp:'',
    texthp:false,
    keyshp:'',
    textzx:false,
    keyszx:'',
    texthf:false,
    keyshf:'',
    textck:false,
    keysck:'',
    textfk:false,
    keysfk:''
};
export default function homeshow(state=initialState,action){
    switch (action.type){
        case BOOM_XPSHOW:
            return Object.assign({}, state, {
                textxp:action.textxp,
                keysxp:action.keysxp
            });
        case BOOM_HFSHOW:
            return Object.assign({}, state, {
                texthf:action.texthf,
                keyshf:action.keyshf
            });
        case BOOM_ZXSHOW:
            return Object.assign({}, state, {
                textzx:action.textzx,
                keyszx:action.keyszx
            });
        case BOOM_GYSSHOW:
            return Object.assign({}, state, {
                text:action.text,
                keys:action.keys
            });
        case BOOM_YSSHOW:
            return Object.assign({}, state, {
                text:action.text,
                keys:action.keys
            });
        case BOOM_YSSSHOW:
            return Object.assign({}, state, {
                text:action.text,
                keys:action.keys
            });
        case BOOM_PMSHOW:
            return Object.assign({}, state, {
                text:action.text,
                keys:action.keys
            });
        case BOOM_PMSHOWFW:
            return Object.assign({}, state, {
                text:action.text,
                keys:action.keys
            });
        case BOOM_EMSHOW:
            return Object.assign({}, state, {
                text:action.text,
                keys:action.keys
            });
        case BOOM_HPSHOW:
            return Object.assign({}, state, {
                texthp:action.texthp,
                keyshp:action.keyshp
            });
        case BOOM_TZHSHOW:
            return Object.assign({}, state, {
                text:action.text,
                keys:action.keys
            });
        case BOOM_PMSHOWSP:
            return Object.assign({}, state, {
                text:action.text,
                keys:action.keys
            });
        case BOOM_CKLXQ:
            return Object.assign({}, state, {
                textck:action.textck,
                keysck:action.keysck
            });
        case BOOM_FKLXQ:
            return Object.assign({}, state, {
                textfk:action.textfk,
                keysfk:action.keysfk
            });
        default:
            return state;
    }
}