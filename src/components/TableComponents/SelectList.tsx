import * as React from 'react';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';

export interface IStateProps {
    selectedList: string;
    selectOptions: string[];
}

export interface IDispatchProps {
    selectedListChanged: (value: string) => void;
}

export type IProps = IStateProps & IDispatchProps;

function SelectList({ selectedList, selectOptions, selectedListChanged }: IProps) {
    const onSelectedListChanged = (event: React.FormEvent<HTMLInputElement>): void => selectedListChanged(event.currentTarget.value.toUpperCase());

    return (
        <InputGroup>
            <InputGroupAddon addonType="prepend">Lista</InputGroupAddon>
            <Input type="select" value={selectedList} onChange={onSelectedListChanged} className="custom-select">
                <option value="">Todas</option>
                {selectOptions.map((lista, index) => <option key={index} value={lista}>{lista}</option>)}
            </Input>
        </InputGroup>
    );
}

export default SelectList;