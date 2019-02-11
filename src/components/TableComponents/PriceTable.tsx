import * as React from 'react';
import { Container, Table } from 'reactstrap';
import { IPriceRow } from '../../types';
import LazyDownloadButton from './LazyDownloadButton';
import TableRow from './TableRow';



export interface IProps {
    rows: IPriceRow[];
    searchText: string;
    selectedList: string;
}

function PriceTable({ rows, searchText, selectedList }: IProps) {
    const filteredRows: IPriceRow[] = rows.filter(rowData => rowData.desc.includes(searchText) && (selectedList === "" || rowData.lista === selectedList))
        .slice(0, 20);

    return (
        <Container>
            <Table responsive={true}>
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
                <div className="p-2" />
                <LazyDownloadButton fallback="Cargando..." rows={filteredRows} colorBoton="info" buttonText="Descargar planilla con datos filtrados" />
            </div>
        </Container>
    );
}

export default PriceTable;