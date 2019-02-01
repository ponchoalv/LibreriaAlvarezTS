import * as React from 'react';
import { DateOfList, LoadedList } from 'src/types';
import { Container, Table } from "reactstrap";
import TableRow from './TableRow';
import UploadForm from './UploadForm';

interface StateProps {
    selectedDate: DateOfList;
    filteredlistOptions: Array<LoadedList>;
}

type Props = StateProps;

function UploadPrices(props: Props) {
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
                    {props.filteredlistOptions.map((row, index) => <TableRow row={row} key={index} />)}
                </tbody>
            </Table>
            <UploadForm fecha={props.selectedDate.fecha} />
        </Container>
    )
}
export default UploadPrices;