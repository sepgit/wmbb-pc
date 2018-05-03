/**
 * Created by Zing on 2017/6/6.
 */
import "babel-polyfill";
import {
    GET_CZL,
    GET_SCZ,
    GET_CZGD,
    GET_KYYEC
} from '../../action/regr/aregr';

const initialState ={
    err:true,
    errMsg:"",
    rowCount:0,
    czlist:[],
    residual:0,
    resiUsd:0
};
export default function rregr(state=initialState,action){
    switch (action.type){
        case GET_CZL:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                rowCount:action.rowCount,
                czlist:action.czlist
            });
        case GET_SCZ:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                rowCount:action.rowCount,
                czlist:action.czlist
            });
        case GET_CZGD:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                rowCount:action.rowCount,
                czlist:action.czlist
            });
        case GET_KYYEC:
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


