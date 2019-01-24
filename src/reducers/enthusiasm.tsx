import { EnthusiasmAction } from '../actions';
import { EnthusiasmState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

export function enthusiasm(state: EnthusiasmState = { languageName: 'TypeScript', enthusiasmLevel: 1 }, action: EnthusiasmAction): EnthusiasmState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            {
                return { ...state, enthusiasmLevel: state.enthusiasmLevel + action.payload }
            };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    }
    return state;
}
