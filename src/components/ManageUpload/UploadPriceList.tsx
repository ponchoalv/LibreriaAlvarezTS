import * as React from 'react';
import { Button, Table } from 'reactstrap';
import { IDateOfList, IDeleteListData, ILoadedList } from 'src/types';
import TableRow from './TableRow';
import UploadForm from './UploadForm';

interface IStateProps {
    selectedDate: IDateOfList;
    filteredlistOptions: ILoadedList[];
    listTypeOptions: string[];
    nuevaPlanilla: boolean;
}

interface IDispatchProps {
    uploadForm: (form: FormData) => void;
    deleteList: (list: IDeleteListData) => void;
    toggleNuevaPlanilla: () => void;
}

type IProps = IStateProps & IDispatchProps;

function UploadPrices(props: IProps) {
    return (
        <div>
            <h3>Planillas cargadas:</h3>
            <Table responsive={true}>
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
            {props.nuevaPlanilla ?
                (
                    <UploadForm uploadForm={props.uploadForm} fecha={props.selectedDate.fecha} listTypeOptions={props.listTypeOptions} toggleNuevaPlanilla={props.toggleNuevaPlanilla} />
                ) : (
                    <Button color="success" onClick={props.toggleNuevaPlanilla}>Cargar nueva planilla</Button>
                )}
        </div>
    )
}

export default UploadPrices;
