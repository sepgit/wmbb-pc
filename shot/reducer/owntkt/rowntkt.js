/*
 * @Author: sepgit 
 * @Date: 2018-07-25 11:46:54 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-08-03 13:15:19
 */

import "babel-polyfill";
import {
    GET_OWNTKT,
    GET_OWNTKTDETAIL,
    GET_USETKTS,
    GET_FINDUSER,
    GET_GIVEUSER
} from '../../action/owntkt/aowntkt';

const initialState ={
  err:true,
  errMsg:"",
  owntktLists:[],
  owntktDetail:'',
  tktRowCounts:'',
  userID:'',
  alluser:[],
  alluserNum:'',
  userID:''
};
export default function owntkt(state=initialState,action){
  switch (action.type){
    case GET_OWNTKT:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        // tktRowCounts:action.tktRowCounts,
        owntktLists:action.owntktLists,
      });
    case GET_OWNTKTDETAIL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        // tktRowCounts:action.tktRowCounts,
        owntktDetail:action.owntktDetail,
      });
    case GET_USETKTS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        userID:action.userID,
      });
    case GET_FINDUSER:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        alluserNum:action.alluserNum,
        alluser:action.alluser
      });
    case GET_GIVEUSER:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        userID:action.userID,
      });
    default:
      return state;
  }
}