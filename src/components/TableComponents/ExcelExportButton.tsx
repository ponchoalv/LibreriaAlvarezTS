import * as React from 'react';
import ReactExport, { ExcelBorderStyle, ExcelCellData } from 'react-data-export';
import { Button } from 'reactstrap';
import { IPriceRow } from '../../types';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

export interface IProps {
    rows: IPriceRow[];
    buttonText: string;
    colorBoton: string;
}

function ExcelDownloadButton({ rows, buttonText, colorBoton }: IProps) {
    const mapedData: ExcelCellData[] = 
        rows.map(row =>  [   
                { value:row.desc, style: {border: {style: "medium" as ExcelBorderStyle, color: {}}}},
                { value: row.code, style: {border: {style: "medium" as ExcelBorderStyle, color: {}}}},
                { value: row.price, style: {numFmt: "$#,##0.00", border: {style: "medium" as ExcelBorderStyle, color: {}}}},
                { value: row.lista, style: {border: {style: "medium" as ExcelBorderStyle, color: {}}}},
                { value: row.fecha, style: {border: {style: "medium" as ExcelBorderStyle, color: {}}}},
        ]);
    const excelDataSet = [
        {
        columns: [
            { title: "Nombre", width: { wch: 40 } },
            { title: "Código", width: { wch: 15 } },
            { title: "Precio", width: { wch: 15 } },
            { title: "Lista", width: { wch: 15 } },
            { title: "Fecha", width: { wch: 15 } },
        ],
        data: mapedData
    }];

    return (
        <ExcelFile element={<Button color={colorBoton}>{buttonText}</Button>}>
            <ExcelSheet dataSet={excelDataSet} name="Precios" />
        </ExcelFile>
    );
}

export default ExcelDownloadButton;