import React from 'react';
import { connect } from 'react-redux';

import { ConnectedTaskList } from './TaskList';

const Dashboard = ({groups})=> {
    console.log('Dashboard props ', groups);
    return (
        <div className="row">
            {groups.map(group=>(
                <ConnectedTaskList key={group.id} {...group} className="col"/>
            ))}
        </div>
    );
}

const mapStateToProps = ({groups})=>({groups});

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);