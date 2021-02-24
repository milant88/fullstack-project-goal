import { combineReducers } from 'redux';
import * as mutations from './mutations'

import { defaultState } from "../../server/defaultState";

export const reducer = combineReducers({
    session(userSession = defaultState.session || {},action){
        let {type,authenticated, session} = action;
        switch(type){
            case mutations.SET_STATE:
                return {...userSession, id: action.state.session.id};
            case mutations.REQUEST_AUTHENTICATE_USER:
                return {...userSession, authenticated:mutations.AUTHENTICATING};
            case mutations.PROCESSING_AUTHENTICATE_USER:
                return {...userSession, authenticated};
            default:
                return userSession;
        }
    },
    groups:(groups = defaultState.groups,action)=>{
        switch (action.type) {
            case mutations.SET_STATE:
                return action.state.groups;
        }
        return groups;
    },
    tasks(tasks = defaultState.tasks,action){
        switch(action.type) {
            case mutations.CREATE_TASK:
                return [...tasks,{
                    id:action.taskID,
                    name:"New Task",
                    group:action.groupID,
                    owner:action.ownerID,
                    isComplete:false
                }]
            case mutations.SET_TASK_COMPLETE:
                return tasks.map(task=>{
                    return (task.id === action.taskID) ? {...task,isComplete:action.isComplete} : task;
                });
            case mutations.SET_TASK_NAME:
                return tasks.map(task=> {
                    return (task.id === action.taskID) ? {...task, name: action.name} : task;
                });
            case mutations.SET_TASK_GROUP:
                return tasks.map(task=>{
                    return (task.id === action.taskID) ? {...task, group:action.groupID} : task;
                });
        }
        return tasks;
    }
});