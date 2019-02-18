import * as React from 'react';
import Button from 'reactstrap/lib/Button';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardFooter from 'reactstrap/lib/CardFooter';
import CardHeader from 'reactstrap/lib/CardHeader';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';


interface IDataProps {
    error: Error | null;
    loading: boolean;
}

interface IDispatchProps {
    login: (form: FormData) => void;
}

type IProps = IDataProps & IDispatchProps;

function LoginForm(props: IProps) {

    const loginAction = (event: any) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        props.login(form);
    }

    return (     
            <Card className="border-primary">
            <CardHeader><h4>Login Libreria Alvarez</h4></CardHeader>
            <Form onSubmit={loginAction} >
                <CardBody>
                    <FormGroup>
                        <Label for="username">Nombre de Usuario:</Label>
                        <Input type="text" name="username" id="username"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Contraseña:</Label>
                        <Input type="password" name="password" id="password" />
                    </FormGroup>
                </CardBody>
                <CardFooter>
                    <Button color="primary">Login</Button>{'  '}
                </CardFooter>
            </Form>
        </Card>
    )
}

export default LoginForm;
