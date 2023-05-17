import {combineReducers} from '@reduxjs/toolkit';
import datas, {State as Datas_State, Action as Datas_Action} from './Reducers/datas';
import { Reducer, CombinedState } from 'redux';

export interface RootState{
    datas:Datas_State
}

export interface RootActions extends Datas_Action {};


const rootReducer: Reducer<CombinedState<RootState>, RootActions> = 
combineReducers({
    datas:datas as Reducer<Datas_State, Datas_Action>
});

export default rootReducer;