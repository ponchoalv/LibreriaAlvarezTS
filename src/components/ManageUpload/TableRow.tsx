import * as React from 'react';
import { LoadedList, DeleteListData } from 'src/types';
import { Button } from 'reactstrap';

interface StateProps {
    row: LoadedList;
}

interface DispatchProps {
    deleteList: (list: DeleteListData) => void;
} 

type Props = StateProps & DispatchProps;

function TableRow({ row, deleteList }: Props) {

     return (
            <tr>
                <td>{row.lista}</td>
                <td>{row.fecha}</td>
                <td>{row.registros}</td>
                <td><Button color="danger" aria-label="Eliminar" onClick={() => deleteList({lista: row.lista, fecha: row.fecha})} ><span>x</span></Button></td>
            </tr>
    );
}

export default TableRow;
