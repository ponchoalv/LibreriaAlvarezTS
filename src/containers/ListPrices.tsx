import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { PriceFetchAction } from 'src/actions';
import * as actions from 'src/actions/listPrices';
import ListPrices from 'src/components/ListPrices';
import { IDateOfList, IStoreState } from 'src/types';

export function mapStateToProps({ prices }: IStoreState) {
    return {
        datesLoaded: prices.datesLoaded,
        error: prices.error,
        loading: prices.loading,
        prices: prices.prices,
        searchText: prices.searchText,
        selectOptions: prices.selectOptions,
        selectedDate: prices.selectedDate,
        selectedList: prices.selectedList,
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
