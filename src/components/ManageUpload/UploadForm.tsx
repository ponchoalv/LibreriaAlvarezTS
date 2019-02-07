import * as React from 'react';
import Button from 'reactstrap/lib/Button';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardFooter from 'reactstrap/lib/CardFooter';
import CardHeader from 'reactstrap/lib/CardHeader';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import FormText from 'reactstrap/lib/FormText';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';
import SelectListType from './SelectListType';


interface IDataProps {
    fecha: string;
    listTypeOptions: string[];
}

interface IDispatchProps {
    uploadForm: (form: FormData) => void;
    toggleNuevaPlanilla: () => void;
}

type IProps = IDataProps & IDispatchProps;

function UploadForm(props: IProps) {

    const uploadAction = (event: any) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        props.uploadForm(form);
    }

    return (
        <Card className="border-primary">
            <CardHeader><h4>Cargar una nueva planilla</h4></CardHeader>
            <Form onSubmit={uploadAction} >
                <CardBody>
                    <FormGroup>
                        <Label for="file">Planilla(.xlsx):</Label>
                        <Input type="file" name="file" id="file" accept=".xls,.xlsx" />
                        <FormText color="muted">
                            Seleccionar el archivo de la planilla a cargar (formato .xlsx)
                    </FormText>
                    </FormGroup>
                    <SelectListType name="tipo-lista" selectOptions={props.listTypeOptions} />
                    <FormGroup>
                        <Label for="nombre-lista">Nombre de lista:</Label>
                        <Input type="text" name="nombre-lista" id="nombre-lista" />
                    </FormGroup>
                    <Input type="hidden" name="nombre-hoja" value="precios" />
                    <Input type="hidden" name="fecha" value={props.fecha} />
                </CardBody>
                <CardFooter>
                    <Button color="primary">Subir Planilla</Button>{'  '}
                    <Button color="danger" onClick={props.toggleNuevaPlanilla}>Restablecer</Button>
                </CardFooter>
            </Form>
        </Card>
    )
}

export default UploadForm;
