import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/app/store';
import { Router, Route } from 'react-router-dom';
import { history } from '../src/app/store/history';

import { ConnectedNavigation } from "./Navigation";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectedTaskDetail } from "./TaskDetail";

export const Main = ()=>(
    <Router history={history}>
        <Provider store={store}>
            <div className="container mt-3">
                <ConnectedNavigation/>
                <Route
                    exact
                    path="/dashboard"
                    render={() => (<ConnectedDashboard/>)}
                />
                <Route
                    exact
                    path="/task/:id"
                    render={ ({match}) => (<ConnectedTaskDetail match={match}/>)}
                />
            </div>
        </Provider>
    </Router>
);