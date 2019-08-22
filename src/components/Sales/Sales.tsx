import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { IDateOfList, IVenta } from "../../types";
import { ActivityAndErrorIndicator } from "../commons/ActivityAndErrorIndicator";
import SalesTable from "./SalesTable";
import SelectDate from "../TableComponents/SelectDate";

interface IStateProps {
  sales: IVenta[];
  loaded: boolean;
  loading: boolean;
  error: Error | null;
  selectedDate: IDateOfList;
  datesLoaded: IDateOfList[];
}

interface IDispatchProps {
  init: () => void;
  selectedDateChanged: (value: IDateOfList) => void;
}

const formatter = new Intl.NumberFormat("es-AR", {
  currency: "ARS",
  minimumFractionDigits: 2,
  style: "currency"
});

export type IProps = IStateProps & IDispatchProps;

const Sales = (props: IProps) => {
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
          las ventas del día <b>{props.selectedDate.fecha}</b> son{" "}
          <b>{props.sales.length}</b> y suman <b>{formatter.format(totalVentas)}</b>
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
