import * as React from 'react';
import { PriceRow } from 'src/types';
import { Table, Container } from 'reactstrap';
import TableRow from "./TableRow";
import ExcelDownloadButton from './ExcelExportButton';


export interface Props {
    rows: Array<PriceRow>;
    searchText: string;
    selectedList: string;
}

function PriceTable({ rows, searchText, selectedList }: Props) {
    const filteredRows: Array<PriceRow> = rows.filter(rowData => rowData.desc.includes(searchText) && (selectedList === "" || rowData.lista === selectedList))
        .slice(0, 20);

    return (
        <Container>
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
                    {filteredRows.map((row, index) => <TableRow row={row} key={index} />)}
                </tbody>
            </Table>

            <div className="d-flex flex-row-reverse">
                <div className="p-2"></div>
                <ExcelDownloadButton rows={filteredRows} color="info" buttonText="Descargar planilla con datos filtrados" />
            </div>
        </Container>

    );
}

export default PriceTable;