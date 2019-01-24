import * as React from "react";
import './Hello.css';
import { PriceRow } from 'src/types';
import { Table } from 'reactstrap';
import TableRow from "./TableRow";

interface StateProps {
    prices: Array<PriceRow>;
    loading: boolean;
}

interface DispatchProps {
    init: () => void;
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

        return (
            <div className="table-responsive">
                <Table>
                    <thead className="thead-dark">
                        <tr>
                            <th>Descripción</th>
                            <th>Lista</th>
                            <th>Precio</th>
                            <th>Fecha de la Lista</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.prices.map((row, index) =>
                            <TableRow row={row} index={index} />
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ListPrices;