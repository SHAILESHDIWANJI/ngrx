import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterModel } from "./counter.model";
import { state } from "@angular/animations";


const getCounterState=createFeatureSelector<CounterModel>('counter')

export const getCounter=createSelector(getCounterState,(state)=>{
    return state.counter
})

export const getChannelName=createSelector(getCounterState,(state)=>{
    return state.channelName
})