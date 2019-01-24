import * as actions from 'src/actions';
import { StoreState } from 'src/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ListPrices from 'src/components/ListPrices';

export function mapStateToProps({ prices }: StoreState) {
    return {
        prices: prices.prices,
        loading: prices.loading,
    }
}
    
export function mapDispatchToProps(dispatch: Dispatch<actions.PriceFetchAction>) {
    return {
        init: () => dispatch(actions.FetchPrices()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPrices);
