import * as React from 'react';
import { PriceRow } from 'src/types';

export interface Props {
    row: PriceRow;
}

function TableRow({ row }: Props) {
     return (
            <tr>
                <td>{row.desc}</td>
                <td>{row.lista}</td>
                <td>{formatter.format(row.price)}</td>
                <td>{row.fecha}</td>
            </tr>
    );
}

export default TableRow;

const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
});