/**
 * Created by Zing on 2017/3/22.
 */
import "babel-polyfill";
import {
    GET_MEETQT,
    POST_MCT,
    GET_PINFO
    } from '../../action/meetqt/ameetqt';


const initialState ={
    err:true,
    errMsg:"",
    meetqtlist:[],
    meetChat:0,
    pinfo:{}
};
export default function rmeetqt(state=initialState,action){
    switch (action.type){
        case GET_MEETQT:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                meetqtlist:action.meetqtlist
            });
        case POST_MCT:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                meetChat:action.meetChat
            });
        case GET_PINFO:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                pinfo:action.pinfo
            });
        default:
            return state;
    }
}


