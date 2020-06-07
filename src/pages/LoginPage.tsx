import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IStore } from 'types';

import LoginForm from 'components/login-form/LoginForm';

const LoginPage: React.FC = () => {
    const isAuth = useSelector((state: IStore) => state.auth.isAuth);

    if (isAuth) {
        return <Redirect to="/checker" />;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
