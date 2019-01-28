import * as React from "react";
import { PriceRow } from 'src/types';
import { Button } from 'reactstrap';
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export interface Props {
    rows: Array<PriceRow>;
    buttonText: string;
    color: string;
}

function ExcelDownloadButton({ rows, buttonText, color }: Props) {
    return (
        <ExcelFile element={<Button color={color}>{buttonText}</Button>}>
                <ExcelSheet data={rows} name="Precios">
                    <ExcelColumn label="Nombre" value="desc"/>
                    <ExcelColumn label="Código" value="code"/>
                    <ExcelColumn label="Precio" value="price"/>
                    <ExcelColumn label="Lista"
                                 value="lista" />
                    <ExcelColumn label="Fecha"
                                 value="fecha" />
                </ExcelSheet>
            </ExcelFile>
    );
}

export default ExcelDownloadButton;