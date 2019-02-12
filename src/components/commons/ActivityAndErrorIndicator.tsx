import * as React from 'react';
// @ts-ignore
import { Alert, Spinner } from 'reactstrap';


interface IStateProps {
    children: React.ReactNode;
    loading: boolean;
    error: Error | null;
    loaded: boolean;
}

interface IDispatchProps {
    initAction: () => void;
}

type IProps = IStateProps & IDispatchProps;

export class ActivityAndErrorIndicator extends React.Component<IProps> {
    
    componentDidMount() {
        if(!this.props.loaded) {
            this.props.initAction();
        }
    }

    public render() {
        if (this.props.loading) {
            return <div className="loader"><Spinner style={{ width: '30rem', height: '30rem' }} type="grow" /></div>
        }

        if (this.props.error) {
            return <Alert color="danger"> Ha Ocurrido un error: {this.props.error.message} </Alert>
        }

        return this.props.children
    }
}