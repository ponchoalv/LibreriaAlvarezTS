import * as React from 'react';
import { PriceRow } from 'src/types';
import { Table } from 'reactstrap';
import TableRow from "./TableRow";

export interface Props {
    rows: Array<PriceRow>;
    searchText: string;
    selectedList: string;
}

function PriceTable({ rows, searchText, selectedList }: Props) {
    return (
        <Table responsive>
            <thead className="thead-dark">
                <tr>
                    <th>Descripción</th>
                    <th>Lista</th>
                    <th>Precio</th>
                    <th>Fecha de la Lista</th>
                </tr>
            </thead>
            <tbody>
                {rows.filter(rowData => rowData.desc.includes(searchText)  && (selectedList === "" || rowData.lista === selectedList))
                     .slice(0, 20)
                     .map((row, index) =>
                        <TableRow row={row} key={index} />)}
            </tbody>
        </Table>
    );
}

export default PriceTable;