import * as React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { DateOfList } from 'src/types';

export interface StateProps {
    selectedDate: DateOfList;
    listsDateOptions: Array<DateOfList>;
}

export interface DispatchProps {
    selectedDateChanged: (value: DateOfList) => void;
}

export type Props = StateProps & DispatchProps;

function SelectDate({ selectedDate, listsDateOptions, selectedDateChanged }: Props) {
    const onSelectedDateChanged = (event: React.FormEvent<HTMLInputElement>): void => selectedDateChanged({fecha: event.currentTarget.value});

    return (
        <InputGroup>
            <InputGroupAddon addonType="prepend">Fecha</InputGroupAddon>
            <Input type="select" value={selectedDate.fecha} onChange={onSelectedDateChanged} className="custom-select">
                {listsDateOptions.map((lista, index) => <option key={index} value={lista.fecha}>{lista.fecha}</option>)}
            </Input>
        </InputGroup>
    );
}

export default SelectDate;