import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/app/store';
import { ConnectedDashboard } from "./Dashboard";

export const Main = () => (
    <Provider store={store}>
        <ConnectedDashboard/>
    </Provider>
)