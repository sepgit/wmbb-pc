/**
 * Created by Zing on 2017/3/30.
 */
import { createSelector } from 'reselect'

export const getmeet = (state) => state.rmeeting;

export const getmeetWithdel= createSelector(
    [ getmeet ],
    (m) => {
        return m.meetslist;
    }
);