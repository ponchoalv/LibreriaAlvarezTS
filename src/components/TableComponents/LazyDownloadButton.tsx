import * as React from "react";
import { PriceRow } from 'src/types';

const LazyButton= React.lazy(() => import('./ExcelExportButton'))

export interface Props {
    fallback: string;
    rows: Array<PriceRow>;
    buttonText: string;
    colorBoton: string;
}

export default function LazyDownloadButton(props: Props) {
    return (
        <React.Suspense fallback={props.fallback}>
            <LazyButton rows={props.rows} colorBoton="info" buttonText={props.buttonText} />
        </React.Suspense>
    )
}