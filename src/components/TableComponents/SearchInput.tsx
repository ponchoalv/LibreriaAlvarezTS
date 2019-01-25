import * as React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

export interface StateProps {
    searchText: string;
}

export interface DispatchProps {
    updateSearch: (value: string) => void;
}

export type Props = StateProps & DispatchProps;

function SearchInput({ searchText, updateSearch }: Props) {
    const onUpdateInput = (event: React.FormEvent<HTMLInputElement>):void => updateSearch(event.currentTarget.value.toUpperCase());
    
    return (
        <InputGroup>
        <InputGroupAddon addonType="prepend">Buscar</InputGroupAddon>
        <Input placeholder="Articulo" value={searchText} onChange={onUpdateInput} />
      </InputGroup>
    );
}

export default SearchInput;