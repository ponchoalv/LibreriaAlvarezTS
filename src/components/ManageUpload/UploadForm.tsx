import * as React from 'react';
import Button from 'reactstrap/lib/Button';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import FormText from 'reactstrap/lib/FormText';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';


interface IDataProps {
    fecha: string;
}

interface IDispatchProps {
    uploadForm: (form: FormData) => void;
}

type IProps = IDataProps & IDispatchProps;

function UploadForm(props: IProps) {

    const uploadAction = (event: any) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        props.uploadForm(form);
    }

    return (
        <div>
            <h3>Cargar una nueva lista:</h3>
            <Form onSubmit={uploadAction} >
                <FormGroup>
                    <Label for="file">Planilla(.xlsx):</Label>
                    <Input type="file" name="file" id="file" accept=".xls,.xlsx" />
                    <FormText color="muted">
                        Seleccionar el archivo de la planilla a cargar (formato .xlsx)
                </FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="tipo-lista">Tipo de lista:</Label>
                    <Input type="text" name="tipo-lista" id="tipo-lista" />
                </FormGroup>
                <FormGroup>
                    <Label for="nombre-lista">Nombre de lista:</Label>
                    <Input type="text" name="nombre-lista" id="nombre-lista" />
                </FormGroup>
                <Input type="hidden" name="nombre-hoja" value="precios" />
                <Input type="hidden" name="fecha" value={props.fecha} />
                <br />
                <Button color="primary">Subir Planilla</Button>
            </Form>
        </div>
    )
}

export default UploadForm;
