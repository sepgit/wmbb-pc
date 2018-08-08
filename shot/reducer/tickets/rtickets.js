/*
 * @Author: sepgit 
 * @Date: 2018-07-18 09:49:01 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-08-01 14:02:52
 */

import "babel-polyfill";
import {
  GET_TKTLISTS,
  GET_TKTLISTSPRE,
  GET_GETTKTS,
} from '../../action/tickets/atickets';

const initialState ={
  err:true,
  errMsg:"",
  tktLists:[],
  tktListspre:[],
  tktRowCounts:'',
  getID:'',
};
export default function tickets(state=initialState,action){
  switch (action.type){
    case GET_TKTLISTS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        tktRowCounts:action.tktRowCounts,
        tktLists:action.tktLists
      });
    case GET_TKTLISTSPRE:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        tktListspre:action.tktListspre
      });
      case GET_GETTKTS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        getID:action.getID
      });
    default:
      return state;
  }
}