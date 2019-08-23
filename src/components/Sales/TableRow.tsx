import * as React from "react";
import { IVenta } from "../../types";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SalesActions } from "../../actions";
import * as actions from "../../actions/salesActions";
import { Button } from "reactstrap";

export interface OwnProps {
  row: IVenta;
}

const formatter = new Intl.NumberFormat("es-AR", {
  currency: "ARS",
  minimumFractionDigits: 2,
  style: "currency"
});

function TableRow(props: any) {
  return (
    <tr>
      <td>{props.row.fecha}</td>
      <td>{props.row.usuario}</td>
      <td>{formatter.format(props.row.monto)}</td>
      <td>
        <Button onClick={() => props.deleteSale(props.row.fecha)} color="danger">
          <i className="oi oi-trash" aria-hidden="true" />
        </Button>
      </td>
    </tr>
  );
}

export function mapStateToProps(state: any, ownProps: any) {
  return {
    row: ownProps.row
  };
}
export function mapDispatchToProps(dispatch: Dispatch<SalesActions>) {
  return {
    deleteSale: (fecha: string) => dispatch(actions.DeleteSale(fecha))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableRow);
