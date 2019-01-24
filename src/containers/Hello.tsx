import Hello from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ enthusiasm }: StoreState) {
    return {
        enthusiasmLevel: enthusiasm.enthusiasmLevel,
        name: enthusiasm.languageName,
    }
}
    
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm(5)),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
