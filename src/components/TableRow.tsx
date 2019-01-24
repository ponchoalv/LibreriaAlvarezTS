import * as React from 'react';
import { PriceRow } from 'src/types';

export interface Props {
    row: PriceRow;
    index: number;
}

function TableRow({ row, index }: Props) {
     return (
            <tr key={index}>
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