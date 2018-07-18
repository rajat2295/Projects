import * as actionsTypes from '../actions/actions'
import {combineReducers} from 'redux'
import {bake_cookie,read_cookie} from 'sfcookies'




const addTask=(action)=>{
    return{
        data:action.payload,
        id:Math.random()
    }
}
const removeById=(state=[],id)=>{
    const tasks = state.filter(task => task.id !==id)
    
    return tasks
}


const tasksReducers = (state=[],action) =>{
    let tasks=[];
    state=read_cookie('tasks');
    tasks=[...state];
    
    switch(action.type){
        case actionsTypes.ADD_TASK: 
        tasks=[...state,addTask(action)]
        bake_cookie('tasks',tasks);
        break;

        case actionsTypes.DELETE_TASK:
        tasks=removeById(state, action.payload);
        bake_cookie('tasks',tasks)
        return tasks;
        break;
        default:
            return tasks;
    }

    return tasks;
    
},
reducer = combineReducers({
    tasks:tasksReducers
})
export default reducer;