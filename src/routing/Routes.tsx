import React, { lazy, Suspense } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createBrowserHistory } from 'history';

import { IStore } from 'types';

import ProtectedRoute from 'routing/ProtectedRoute';
import Loader from 'components/common/Loader';

const LoginPage = lazy(() => import('pages/LoginPage'));
const PalindromCheckerPage = lazy(() => import('pages/PalindromCheckerPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const history = createBrowserHistory();

function Routes() {
    const isAuth = useSelector((state: IStore) => state.auth.isAuth);

    return (
        <Suspense fallback={<Loader />}>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact>
                        { isAuth ? <Redirect to="/checker" /> : <Redirect to="/login" /> }
                    </Route>
                    <Route path="/login" exact component={LoginPage} />
                    <ProtectedRoute path="/checker" exact component={PalindromCheckerPage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </Router>
        </Suspense>
    );
}

export default Routes;
