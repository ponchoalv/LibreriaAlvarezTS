import * as React from 'react';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import FormText from 'reactstrap/lib/FormText';
import Button from 'reactstrap/lib/Button';


interface DataProps {
    fecha: string;
}

interface DispatchProps {
    uploadForm: (form: FormData) => void;
}

type Props = DataProps & DispatchProps;

function UploadForm(props: Props) {

    const uploadAction = (event: any) => {
        event.preventDefault();
        var form = new FormData(event.currentTarget);
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
                <Input type="text" name="fecha" value={props.fecha} readOnly />
                <br />
                <Button color="primary">Subir Planilla</Button>
            </Form>
        </div>
    )
}

export default UploadForm;
