import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setTaskGroup, setTaskName, setTaskCompletion } from "../src/app/store/mutations";

const TaskDetail = ({
    id,
    comments,
    task,
    isComplete,
    groups,
    setTaskCompletion,
    setTaskName,
    setTaskGroup
}) => (
    <div>
        <input onChange={setTaskName} value={task.name}/>
        <div>
            <button onClick={() => setTaskCompletion(id, !isComplete)}>{isComplete ? 'Reopen' : 'Complete'}</button>
        </div>

        <div>
            <select onChange={setTaskGroup} value={task.group}>
                {groups.map( group => (
                    <option key={group.id} value={group.id}>{group.name}</option>
                ))}
            </select>
        </div>
        <div>
            <Link to="/dashboard">
                <button>Done</button>
            </Link>
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let task = state.tasks.find( task => task.id === id);
    let groups = state.groups;

    return {
        id,
        task,
        groups,
        isComplete: task.isComplete
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        setTaskCompletion(id,isComplete){
            dispatch(setTaskCompletion(id,isComplete));
        },
        setTaskGroup(e){
            dispatch(setTaskGroup(id,e.target.value));
        },
        setTaskName(e){
            dispatch(setTaskName(id,e.target.value));
        }
    }
}

export const ConnectedTaskDetail = connect(mapStateToProps, mapDispatchToProps) (TaskDetail);