import * as actions from 'src/actions/listPrices';
import { PriceFetchAction } from 'src/actions';
import { StoreState, DateOfList } from 'src/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ListPrices from 'src/components/ListPrices';

export function mapStateToProps({ prices }: StoreState) {
    return {
        prices: prices.prices,
        loading: prices.loading,
        error: prices.error,
        searchText: prices.searchText,
        selectedList: prices.selectedList,
        selectOptions: prices.selectOptions,
        selectedDate: prices.selectedDate,
        datesLoaded: prices.datesLoaded,
    }
}
    
export function mapDispatchToProps(dispatch: Dispatch<PriceFetchAction>) {
    return {
        init: () => dispatch(actions.FetchPrices()),
        updateSearchText: (value: string) => dispatch(actions.OnSearchTextUpdate(value)),
        selectedListChanged: (value: string) => dispatch(actions.UpdateSelectedList(value)),
        selectedDateChanged: (value: DateOfList) => dispatch(actions.UpdateSelectedDate(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPrices);
