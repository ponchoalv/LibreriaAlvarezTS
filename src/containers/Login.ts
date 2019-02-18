import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { LoginAction } from '../actions';
import * as actions from '../actions/loginActions';
import Login from '../components/Login';
import { IStoreState } from '../types';

export function mapStateToProps({ login } : IStoreState) {
    return {
        error: login.error,
        loading: login.loading,
        token: login.loginToken,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<LoginAction>) {
    return {
        login: (data: FormData) => dispatch(actions.RequestLogin(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
