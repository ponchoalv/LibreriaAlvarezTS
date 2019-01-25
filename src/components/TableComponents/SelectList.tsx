import * as React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

export interface StateProps {
    selectedList: string;
    selectOptions: Array<string>;
}

export interface DispatchProps {
    selectedListChanged: (value: string) => void;
}

export type Props = StateProps & DispatchProps;

function SelectList({ selectedList, selectOptions, selectedListChanged }: Props) {
    const onSelectedListChanged = (event: React.FormEvent<HTMLInputElement>): void => selectedListChanged(event.currentTarget.value.toUpperCase());

    return (
        <InputGroup>
            <InputGroupAddon addonType="prepend">Lista</InputGroupAddon>
            <Input type="select" value={selectedList} onChange={onSelectedListChanged}>
                <option value="">Todas</option>
                {selectOptions.map((lista, index) => <option key={index} value={lista}>{lista}</option>)}
            </Input>
        </InputGroup>
    );
}

export default SelectList;