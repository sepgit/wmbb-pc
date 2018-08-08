/*
 * @Author: sepgit 
 * @Date: 2018-07-02 15:05:26 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-07-20 10:54:14
 */
import "babel-polyfill";
import {
  GET_SERLISTS
} from '../../action/share/aShare';

const initialState ={
  serLists:[]
};
export default function shareState(state=initialState,action){
  switch (action.type){
    case GET_SERLISTS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        serLists:action.serLists
      });
    default:
      return state;
  }
}


