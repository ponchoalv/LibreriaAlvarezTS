import * as React from "react";
import { Input, InputGroup, InputGroupAddon } from "reactstrap";

export interface IDispatchProps {
  cargarMonto: (value: number) => void;
}

export type IProps = IDispatchProps;

function SearchInput({ cargarMonto }: IProps) {
  const enviarMonto = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    cargarMonto(parseFloat(event.currentTarget.monto.value));
    event.currentTarget.monto.value = '';
    console.log(event)
  }

  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">Monto</InputGroupAddon>
      <form onSubmit={enviarMonto}>
      <Input
        type="number"
        min="0.0"
        step="0.01"
        placeholder="Monto de la venta"
        name="monto"
      />
      </form>
    </InputGroup>
  );
}

export default SearchInput;
