import * as React from 'react';
import { DateOfList, LoadedList } from 'src/types';
import { Container, Table } from "reactstrap";
import TableRow from './TableRow';
import UploadForm from './UploadForm';

interface StateProps {
    selectedDate: DateOfList;
    filteredlistOptions: Array<LoadedList>;
}

interface DispatchProps {
    init(): () => void;
}

type Props = StateProps & DispatchProps;

class UploadPrices extends React.Component<Props, {}> {
    constructor(parameters: Props) {
        super(parameters)
    }
    componentDidMount(){
        this.props.init();
    }

    render() {
        return (
            <Container>
                <Table responsive>
                    <thead className="thead-dark">
                        <tr>
                            <th>Lista</th>
                            <th>Fecha</th>
                            <th># Registros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.filteredlistOptions.map((row, index) => <TableRow row={row} key={index} />)}
                    </tbody>
                </Table>
                <UploadForm fecha={this.props.selectedDate.fecha} />
            </Container>
        )
    }
}

export default UploadPrices;