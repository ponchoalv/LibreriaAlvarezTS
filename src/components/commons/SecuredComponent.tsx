import * as React from 'react';
import { IToken } from '../../types';
import { Redirect } from 'react-router';


interface IStateProps {
    children: React.ReactNode;
    token: IToken | null;
    fallbackUrl: string;
}

type IProps = IStateProps;

export class SecuredComponent extends React.Component<IProps> {
    public render() {
        if (this.props.token) {
            return this.props.children;
        } else {
            return <Redirect to={this.props.fallbackUrl} />
        }     
    }
}