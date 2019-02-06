import * as React from 'react';
import { Input, Label } from 'reactstrap';
import FormGroup from 'reactstrap/lib/FormGroup';

export interface IStateProps {
    selectOptions: string[];
    name: string;
}

export type IProps = IStateProps;

function SelectListType({ selectOptions, name }: IProps) {

    return (
        <FormGroup>
            <Label for="nombre-lista">Nombre de lista:</Label>
            <Input type="select" name={name} className="custom-select">
                {selectOptions.map((lista, index) => <option key={index} value={lista}>{lista}</option>)}
            </Input>
        </FormGroup>
    );
}

export default SelectListType;