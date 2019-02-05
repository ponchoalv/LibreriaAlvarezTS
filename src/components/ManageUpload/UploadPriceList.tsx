import * as React from 'react';
import { DateOfList, LoadedList, DeleteListData } from 'src/types';
import { Table } from "reactstrap";
import TableRow from './TableRow';
import UploadForm from './UploadForm';

interface StateProps {
    selectedDate: DateOfList;
    filteredlistOptions: Array<LoadedList>;
}

interface DispatchProps {
    uploadForm: (form: FormData) => void;
    deleteList: (list: DeleteListData) => void;
}

type Props = StateProps & DispatchProps;

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
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {props.filteredlistOptions.map((row, index) => <TableRow row={row} key={index} deleteList={props.deleteList} />)}
                </tbody>
            </Table>
            <br />
            <UploadForm uploadForm={props.uploadForm} fecha={props.selectedDate.fecha} />
        </div>
    )
}
export default UploadPrices;