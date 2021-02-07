import { combineReducers } from 'redux';
import * as mutations from './mutations'

import { defaultState } from "../../../server/defaultState";

export const reducer = combineReducers({
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
        }
        return tasks;
    }
});