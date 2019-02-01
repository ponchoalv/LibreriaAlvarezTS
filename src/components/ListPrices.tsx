import * as React from "react";
import { PriceRow, DateOfList } from 'src/types';
import PriceTable from "./TableComponents/PriceTable";
import SearchInput from "./TableComponents/SearchInput";
import { Container, Row, Col, Alert } from 'reactstrap';
import SelectList from './TableComponents/SelectList';
import SelectDate from './TableComponents/SelectDate';
import ExcelDownloadButton from './TableComponents/ExcelExportButton';
//@ts-ignore
import { Spinner } from 'reactstrap';

interface StateProps {
    prices: Array<PriceRow>;
    loading: boolean;
    error: Error;
    searchText: string;
    selectedList: string;
    selectOptions: Array<string>;
    selectedDate: DateOfList;
    datesLoaded: Array<DateOfList>;
}

interface DispatchProps {
    init: () => void;
    updateSearchText: (value: string) => void;
    selectedListChanged: (value: string) => void;
    selectedDateChanged: (value: DateOfList) => void;
}

export type Props = StateProps & DispatchProps;

class ListPrices extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.props.init();
    }

    render() {

        if (this.props.loading) {
            return ( <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" /> )
        }

        if (this.props.error) {
            return (<Alert color="danger">
                Ha Ocurrido un error: {this.props.error.message}
            </Alert>)
        }

        return (
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
                    <ExcelDownloadButton rows={this.props.prices} color="primary" buttonText="Descargar lista de precios completa" />
                </Container>
            </div>
        );
    }
}

export default ListPrices;