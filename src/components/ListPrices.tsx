import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { IDateOfList, IPriceRow, IToken } from '../types';
import { ActivityAndErrorIndicator } from './commons/ActivityAndErrorIndicator';
import LazyDownloadButton from './TableComponents/LazyDownloadButton';
import PriceTable from './TableComponents/PriceTable';
import SearchInput from './TableComponents/SearchInput';
import SelectDate from './TableComponents/SelectDate';
import SelectList from './TableComponents/SelectList';
import { SecuredComponent } from './commons/SecuredComponent';


interface IStateProps {
    prices: IPriceRow[];
    loaded: boolean;
    loading: boolean;
    error: Error | null;
    searchText: string;
    selectedList: string;
    selectOptions: string[];
    selectedDate: IDateOfList;
    datesLoaded: IDateOfList[];
    token: IToken | null;
}

interface IDispatchProps {
    init: () => void;
    updateSearchText: (value: string) => void;
    selectedListChanged: (value: string) => void;
    selectedDateChanged: (value: IDateOfList) => void;
}

export type IProps = IStateProps & IDispatchProps;

class ListPrices extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <SecuredComponent fallbackUrl="/" token={this.props.token}>
                <ActivityAndErrorIndicator loading={this.props.loading} error={this.props.error} initAction={this.props.init} loaded={this.props.loaded} >
                    <div>
                        <h1>Lista de Precios</h1>
                        <p>Buscar entre <b>{this.props.prices.length}</b> articulos de librería y juguetes.</p>
                        <Container>
                            <Row>
                                <Col sm={{ size: 4 }} >
                                    <SearchInput searchText={this.props.searchText} updateSearch={this.props.updateSearchText} />
                                </Col>
                                <Col sm={{ size: 4 }} >
                                    <SelectList selectedList={this.props.selectedList} selectOptions={this.props.selectOptions} selectedListChanged={this.props.selectedListChanged} />
                                </Col>
                                <Col sm={{ size: 4 }} >
                                    <SelectDate selectedDate={this.props.selectedDate} listsDateOptions={this.props.datesLoaded} selectedDateChanged={this.props.selectedDateChanged} />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <PriceTable rows={this.props.prices} searchText={this.props.searchText} selectedList={this.props.selectedList} />
                                </Col>
                            </Row>
                            <LazyDownloadButton fallback="Cargando..." rows={this.props.prices} colorBoton="primary" buttonText="Descargar lista de precios completa" />
                        </Container>
                    </div>
                </ActivityAndErrorIndicator>
            </SecuredComponent>
        );
    }

}

export default ListPrices;