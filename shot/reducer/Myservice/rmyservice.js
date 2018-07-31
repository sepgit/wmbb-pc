/**
 * Created by Zing on 2017/4/25.
 */
import "babel-polyfill";
import {
  GET_SERLISTS,
} from '../../action/Myservice/amyservice';

const initialState ={
  err:true,
  errMsg:"",
  serRowCounts:'',
  serLists:[],
};
export default function myserver(state=initialState,action){
  switch (action.type){
    case GET_SERLISTS:
      return Object.assign({}, state, {
        err:action.err,
        errMsg:action.errMsg,
        serRowCounts:action.rowCount,
        serLists:action.rows
      });
    default:
      return state;
  }
}

