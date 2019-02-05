import * as React from 'react';
import { Button } from 'reactstrap';
import { IDeleteListData, ILoadedList } from 'src/types';

interface IStateProps {
    row: ILoadedList;
}

interface IDispatchProps {
    deleteList: (list: IDeleteListData) => void;
} 

type IProps = IStateProps & IDispatchProps;

function TableRow({ row, deleteList }: IProps) {
    const deleteListLocal = () =>  deleteList({lista: row.lista, fecha: row.fecha});

     return (
            <tr>
                <td>{row.lista}</td>
                <td>{row.fecha}</td>
                <td>{row.registros}</td>
                <td><Button color="danger" aria-label="Eliminar" onClick={deleteListLocal} >Eliminar</Button></td>
            </tr>
    );
}

export default TableRow;
