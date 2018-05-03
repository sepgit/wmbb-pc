/**
 * Created by Zing on 2017/4/1.
 */
import "babel-polyfill";
import {
    GET_MEETYS,
    GET_MEETYST,
    GET_MEETYSF
    } from '../../action/meetyslist/ameetyslist';


const initialState ={
    err:true,
    errMsg:"",
    meetys:[],
    meetyst:[],
    meetysf:[]
};
export default function rmeetyslist(state=initialState,action){
    switch (action.type){
        case GET_MEETYS:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                meetys:action.meetys
            });
        case GET_MEETYST:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                meetyst:action.meetyst
            });
        case GET_MEETYSF:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                meetysf:action.meetysf
            });
        default:
            return state;
    }
}


