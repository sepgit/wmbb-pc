/*
 * @Author: sepgit 
 * @Date: 2018-07-25 11:46:54 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-08-03 14:39:46
 */

import "babel-polyfill";
import {
  GET_ALLMYREL
} from '../../action/myrelease/amyrelease';

const initialState ={
  err:true,
  errMsg:"",
  owntktLists:[],
  owntktDetail:'',
  tktRowCounts:'',
  allmyrel:[],
};
export default function myrelease(state=initialState,action){
  switch (action.type){
    case GET_ALLMYREL:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        // tktRowCounts:date.rowCount,
        allmyrel:action.allmyrel
      });
    
    default:
      return state;
  }
}