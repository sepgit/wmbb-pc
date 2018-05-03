/**
 * Created by Zing on 2017/3/22.
 */
import "babel-polyfill";
import {
    GET_MEET,
    POST_MEETBM,
    PUT_MEETQX
    } from '../../action/meeting/ameeting';


const initialState ={
    err:true,
    errMsg:"",
    meetslist:[],
    meetChat:0
};
export default function rmeeting(state=initialState,action){
    switch (action.type){
        case GET_MEET:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                meetslist:action.meetslist
            });
        case POST_MEETBM:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                meetChat:action.meetChat
            });
        case PUT_MEETQX:
            return Object.assign({}, state, {
                err:action.err
            });
        default:
            return state;
    }
}


