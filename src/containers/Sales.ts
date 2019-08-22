import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SalesActions } from '../actions';
import * as actions from '../actions/salesActions';
import Sales from '../components/Sales/Sales';
import { IDateOfList, IStoreState } from '../types';

export function mapStateToProps({ sales, login }: IStoreState) {
    return {
      sales: sales.sales,
      loaded: sales.loaded,
      loading: sales.loading,
      error: sales.error,
      selectedDate: {fecha: sales.selectedDate},
      datesLoaded: sales.datesLoaded,
      username: (login.username ? login.username : '')
    }
}
    
export function mapDispatchToProps(dispatch: Dispatch<SalesActions>) {
    return {
        init: () => dispatch(actions.FetchSales()),
        selectedDateChanged: (value: IDateOfList) => dispatch(actions.SelectDate(value.fecha)),
        addSale: (monto: number, username: string) => dispatch(actions.AddSale(monto,username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
