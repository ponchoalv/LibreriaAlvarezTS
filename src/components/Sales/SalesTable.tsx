import * as React from 'react';
import { Container, Table } from 'reactstrap';
import { IVenta } from '../../types';
import TableRow from './TableRow';



export interface IProps {
    rows: IVenta[];
}

function PriceTable({ rows }: IProps) {

    return (
        <Container>
            <Table responsive={true}>
                <thead className="thead-dark">
                    <tr>
                        <th>Fecha</th>
                        <th>Usuario</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => <TableRow row={row} key={index} />)}
                </tbody>
            </Table>
        </Container>
    );
}

export default PriceTable;