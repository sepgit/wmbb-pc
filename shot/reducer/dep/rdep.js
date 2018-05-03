/**
 * Created by Zing on 2017/6/2.
 */
import "babel-polyfill";
import {
    GET_DJGL,
    GET_SDJ,
    GET_DJGD,
    GET_KYYED
} from '../../action/dep/adep';

const initialState ={
    err:true,
    errMsg:"",
    rowCount:0,
    djlist:[],
    residual:0,
    resiUsd:0
};
export default function rdeps(state=initialState,action){
    switch (action.type){
        case GET_DJGL:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                rowCount:action.rowCount,
                djlist:action.djlist
            });
        case GET_SDJ:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                rowCount:action.rowCount,
                djlist:action.djlist
            });
        case GET_DJGD:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                rowCount:action.rowCount,
                djlist:action.djlist
            });
        case GET_KYYED:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                residual:action.residual,
                resiUsd:action.resiUsd
            });
        default:
            return state;
    }
}


