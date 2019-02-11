import * as React from "react";
import { IPriceRow } from '../../types';

const LazyButton= React.lazy(() => import('./ExcelExportButton'))

export interface IProps {
    fallback: string;
    rows: IPriceRow[];
    buttonText: string;
    colorBoton: string;
}

export default function LazyDownloadButton(props: IProps) {
    return (
        <React.Suspense fallback={props.fallback}>
            <LazyButton rows={props.rows} colorBoton={props.colorBoton} buttonText={props.buttonText} />
        </React.Suspense>
    )
}