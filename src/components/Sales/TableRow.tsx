import * as React from "react";
import { IVenta } from "../../types";

export interface IProps {
  row: IVenta;
}

const formatter = new Intl.NumberFormat("es-AR", {
  currency: "ARS",
  minimumFractionDigits: 2,
  style: "currency"
});

function TableRow({ row }: IProps) {
  return (
    <tr>
      <td>{row.fecha}</td>
      <td>{row.usuario}</td>
      <td>{formatter.format(row.monto)}</td>
    </tr>
  );
}

export default TableRow;
