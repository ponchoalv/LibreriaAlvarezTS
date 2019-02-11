import * as React from 'react';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { IDateOfList } from '../../types';

export interface IStateProps {
    selectedDate: IDateOfList;
    listsDateOptions: IDateOfList[];
}

export interface IDispatchProps {
    selectedDateChanged: (value: IDateOfList) => void;
}

export type IProps = IStateProps & IDispatchProps;

function SelectDate({ selectedDate, listsDateOptions, selectedDateChanged }: IProps) {
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