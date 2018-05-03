/**
 * Created by Zing on 2017/7/21.
 */
import "babel-polyfill";
import {
    GET_CABL,
    GET_CABLS,
    GET_CABLG
} from '../../action/cabsck/acabsck';

const initialState ={
    err:true,
    errMsg:"",
    cabck:[]
};
export default function rcabsck(state=initialState,action){
    switch (action.type){
        case GET_CABL:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                cabck:action.cabck
            });
        case GET_CABLS:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                cabck:action.cabck
            });
        case GET_CABLG:
            return Object.assign({}, state, {
                err:action.err,
                errMsg:action.errMsg,
                cabck:action.cabck
            });
        default:
            return state;
    }
}


