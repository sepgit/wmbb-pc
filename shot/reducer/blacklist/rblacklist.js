/**
 * Created by Zing on 2017/1/11.
 */
import "babel-polyfill";
import {
    GET_BLL,
    GET_BLLS,
    GET_BLLG,
    GET_BKINFO
    } from '../../action/blacklist/ablacklist';

const initialState ={
    err:true,
    errMsg:"",
    bll:[],
    bkinfo:{},
    deposit:0
};
export default function rblacklist(state=initialState,action){
    switch (action.type){
        case GET_BLL:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                bll:action.bll
            });
        case GET_BLLS:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                bll:action.bll
            });
        case GET_BLLG:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                bll:action.bll
            });
        case GET_BKINFO:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                bkinfo:action.bkinfo,
                deposit:action.deposit
            });
        default:
            return state;
    }
}


