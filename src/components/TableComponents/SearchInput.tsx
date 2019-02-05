import * as React from 'react';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';

export interface IStateProps {
    searchText: string;
}

export interface IDispatchProps {
    updateSearch: (value: string) => void;
}

export type IProps = IStateProps & IDispatchProps;

function SearchInput({ searchText, updateSearch }: IProps) {
    const onUpdateInput = (event: React.FormEvent<HTMLInputElement>):void => updateSearch(event.currentTarget.value.toUpperCase());
    
    return (
        <InputGroup>
        <InputGroupAddon addonType="prepend">Buscar</InputGroupAddon>
        <Input placeholder="Articulo" value={searchText} onChange={onUpdateInput} />
      </InputGroup>
    );
}

export default SearchInput;