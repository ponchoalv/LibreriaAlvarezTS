import * as React from "react";
import './Hello.css';
import { PriceRow } from 'src/types';
import PriceTable from "./TableComponents/PriceTable";
import SearchInput  from "./TableComponents/SearchInput";
import { Container, Row, Col, Alert } from 'reactstrap';
import SelectList from './TableComponents/SelectList';

interface StateProps {
    prices: Array<PriceRow>;
    loading: boolean;
    error: Error;
    searchText: string;
    selectedList: string;
    selectOptions: Array<string>;
}

interface DispatchProps {
    init: () => void;
    updateSearchText: (value: string) => void;
    selectedListChanged: (value: string) => void;
}

export type Props = StateProps & DispatchProps;

class ListPrices extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    init = () => {
        this.props.init();
    };

    componentDidMount() {
        this.init();
    }

    render() {

        if (this.props.loading) {
            return (<div>Cargando...</div>);
        }

        if (this.props.error) {
            return (<Alert color="danger">
                        Ha Ocurrido un error: {this.props.error.message}
                    </Alert>)
        }

        return (
            <Container>
                <Row>
                    <Col>
                        <SearchInput searchText={this.props.searchText} updateSearch={this.props.updateSearchText}/>
                    </Col>
                    <Col>
                        <SelectList selectedList={this.props.selectedList} selectOptions={this.props.selectOptions} selectedListChanged={this.props.selectedListChanged} />
                    </Col>
                    <Col>

                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <PriceTable rows={this.props.prices} searchText={this.props.searchText}  selectedList={this.props.selectedList}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ListPrices;