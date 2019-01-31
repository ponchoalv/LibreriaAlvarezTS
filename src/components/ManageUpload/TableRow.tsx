import * as React from 'react';
import { LoadedList } from 'src/types';

export interface Props {
    row: LoadedList;
}

function TableRow({ row }: Props) {
     return (
            <tr>
                <td>{row.lista}</td>
                <td>{row.fecha}</td>
                <td>{row.registros}</td>
            </tr>
    );
}

export default TableRow;
