import React from "react";
import { Col, Container, Row } from "reactstrap";
import { IDateOfList, IVenta } from "../../types";
import { ActivityAndErrorIndicator } from "../commons/ActivityAndErrorIndicator";
import SalesTable from "./SalesTable";
import SelectDate from "../TableComponents/SelectDate";
import MontoInput from "./MontoInput";

interface IStateProps {
  sales: IVenta[];
  loaded: boolean;
  loading: boolean;
  error: Error | null;
  selectedDate: IDateOfList;
  datesLoaded: IDateOfList[];
  username: string;
}

interface IDispatchProps {
  init: () => void;
  selectedDateChanged: (value: IDateOfList) => void;
  addSale: (monto: number, username:string) => void;
}

const formatter = new Intl.NumberFormat("es-AR", {
  currency: "ARS",
  minimumFractionDigits: 2,
  style: "currency"
});

export type IProps = IStateProps & IDispatchProps;

const Sales = (props: IProps) => {
  const cargarMonto = (monto: number) => {
    props.addSale(monto, props.username)
  }

  const totalVentas = props.sales.reduce(
    (total, venta) => total + venta.monto,
    0
  );

  return (
    <ActivityAndErrorIndicator
      loading={props.loading}
      error={props.error}
      initAction={props.init}
      loaded={props.loaded}
    >
      <div>
        <h1>Ventas Diarias</h1>
        <p>
          El día <b>{props.selectedDate.fecha}</b> se realizaron {" "}
          <b>{props.sales.length}</b> ventas, sumando <b>{formatter.format(totalVentas)}</b>
        </p>
        <Container>
          <Row>
            <Col sm={{ size: 4 }}>
              <SelectDate
                selectedDate={props.selectedDate}
                listsDateOptions={props.datesLoaded}
                selectedDateChanged={props.selectedDateChanged}
              />
            </Col>
            <Col sm={{ size: 4 }}>
              <MontoInput
                cargarMonto={cargarMonto}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <SalesTable rows={props.sales} />
            </Col>
          </Row>
        </Container>
      </div>
    </ActivityAndErrorIndicator>
  );
};

export default Sales;
