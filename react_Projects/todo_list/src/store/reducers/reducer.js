import * as actionsTypes from '../actions/actions'
import {combineReducers} from 'redux'



const iniatialState={
    tasks:[
        {title:'hello',
        body:'yoyo',
    },
    {title:'yo yo',
    body:'bob bo bo',
},

    ]
}

const task=(action)=>{
    return{
        data:action.payload,
        id:Math.random()
    }
}


const tasksReducers = (state=[],action) =>{
    let tasks=[];
    switch(action.type){
        case actionsTypes.ADD_TASK:
        tasks=[...state,task(action)]
        console.log('task in hand:  ' ,tasks )
        break;

        case actionsTypes.DELETE_TASK:
        return{
            ...state,
            tasks:{
                ...state.tasks
            }
        };
        state = state.slice(); 
        state.splice(action.payload,1)

        default:
            return tasks;
    }
    return tasks;
    
},
reducer = combineReducers({
    tasks:tasksReducers
})
export default reducer;