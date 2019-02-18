import * as React from 'react';
import LoginForm from './Login/LoginForm';
import { IToken } from '../types';
import { Redirect } from 'react-router';
import { ActivityAndErrorIndicator } from './commons/ActivityAndErrorIndicator';

interface IStateProps {
    loading: boolean;
    error: Error | null;
    token: IToken | null;
}

interface IDispatchProps {
    login: (data: FormData) => void;
}

type IProps = IStateProps & IDispatchProps;

class Login extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    private nothing: () => void = () => {};
    

    public render() {
        if (this.props.token) {
            return <Redirect to='/users' />
        }

        return (
            <ActivityAndErrorIndicator initAction={this.nothing} loading={this.props.loading} error={this.props.error} loaded={true} >
                <LoginForm error={this.props.error} loading={this.props.loading} login={this.props.login} />
            </ActivityAndErrorIndicator>
            );
    }
}

export default Login;