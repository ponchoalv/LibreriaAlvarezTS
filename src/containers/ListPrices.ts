import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { PriceFetchAction } from '../actions';
import * as actions from '../actions/listPrices';
import ListPrices from '../components/ListPrices';
import { IDateOfList, IStoreState } from '../types';

export function mapStateToProps({ prices, login }: IStoreState) {
    return {
        datesLoaded: prices.datesLoaded,
        error: prices.error,
        loaded: prices.loaded,
        loading: prices.loading,
        prices: prices.prices,
        searchText: prices.searchText,
        selectOptions: prices.selectOptions,
        selectedDate: prices.selectedDate,
        selectedList: prices.selectedList,
        token: login.loginToken,
    }
}
    
export function mapDispatchToProps(dispatch: Dispatch<PriceFetchAction>) {
    return {
        init: () => dispatch(actions.FetchPrices()),
        selectedDateChanged: (value: IDateOfList) => dispatch(actions.UpdateSelectedDate(value)),
        selectedListChanged: (value: string) => dispatch(actions.UpdateSelectedList(value)),
        updateSearchText: (value: string) => dispatch(actions.OnSearchTextUpdate(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPrices);
