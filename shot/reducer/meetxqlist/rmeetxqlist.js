/**
 * Created by Zing on 2017/3/31.
 */
import "babel-polyfill";
import {
    GET_MEETLXQ,
    GET_MEETLXQZ,
    GET_MEETLXQT
    } from '../../action/meetxqlist/ameetxqlist';


const initialState ={
    err:true,
    errMsg:"",
    meetxqlist:[],
    meetxqlistz:[],
    meetxqlistt:[]
};
export default function rmeetxqlist(state=initialState,action){
    switch (action.type){
        case GET_MEETLXQ:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                meetxqlist:action.meetxqlist
            });
        case GET_MEETLXQZ:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                meetxqlistz:action.meetxqlistz
            });
        case GET_MEETLXQT:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                meetxqlistt:action.meetxqlistt
            });
        default:
            return state;
    }
}


