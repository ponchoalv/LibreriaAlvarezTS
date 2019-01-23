import { EnthusiasmAction } from '../actions';
import { EnthusiasmState, PriceRow } from '../types/index';
import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';
import api from "../api";

function enthusiasm(state: EnthusiasmState = { languageName: 'TypeScript', enthusiasmLevel: 1 }, action: EnthusiasmAction): EnthusiasmState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            {
                api<Array<PriceRow>>('api/prices-by-fecha?fecha=2019-01-18')
                .then((arrayList) => {
                    arrayList.forEach(element => {
                        console.log(element);
                    });
                })
                .catch(error => {
                   console.log(error);
                });

                return { ...state, enthusiasmLevel: state.enthusiasmLevel + action.payload }
            };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    }
    return state;
}

const rootReducer = (history: History) => combineReducers({
    enthusiasm: enthusiasm,
    router: connectRouter(history)
})

export interface StoreState {
    enthusiasm: EnthusiasmState;
    router: RouterState;
}

export default rootReducer