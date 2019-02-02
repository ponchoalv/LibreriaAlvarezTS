import * as React from 'react';
//@ts-ignore
import { Spinner, Alert } from 'reactstrap';

interface Props {
    children: React.ReactNode;
    loading: boolean;
    error: Error;
}

export class ActivityAndErrorIndicator extends React.Component<Props> {
    render() {
        if (this.props.loading) {
            return <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" />
        }

        if (this.props.error) {
            return <Alert color="danger"> Ha Ocurrido un error: {this.props.error.message} </Alert>
        }

        return this.props.children
    }
}