import * as React from 'react';
import { DateOfList, LoadedList } from 'src/types';
import { Table } from "reactstrap";
import TableRow from './TableRow';
import UploadForm from './UploadForm';

interface StateProps {
    selectedDate: DateOfList;
    filteredlistOptions: Array<LoadedList>;
}

type Props = StateProps;

function UploadPrices(props: Props) {
    return (
        <div>
            <h3>Planillas cargadas:</h3> 
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
            <br />
            <UploadForm fecha={props.selectedDate.fecha} />
        </div>
    )
}
export default UploadPrices;