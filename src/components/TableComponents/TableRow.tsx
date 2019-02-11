import * as React from 'react';
import { IPriceRow } from '../../types';

export interface IProps {
    row: IPriceRow;
}

function TableRow({ row }: IProps) {
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
    currency: 'ARS',
    minimumFractionDigits: 2,
    style: 'currency' 
});