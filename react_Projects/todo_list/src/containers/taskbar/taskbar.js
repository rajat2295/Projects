import React,{Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionTypes from '../../store/actions/actions'


class TaskBar extends Component {
    render() {
        return(
            <div>
                    <input type='text' ref='text' placeholder='add your tasks here' />
                    <button onClick={this.props.onTaskAdd}>Add Task</button>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onTaskAdd: (taskName) =>dispatch({type:actionTypes.ADD_TASK,taskName}),
        onTaskDelete: (taskName) =>dispatch({type:actionTypes.DELETE_TASK,taskName})
    }
}
const mapStateToProps=(state)=>{
return{
    tasks: state.tasks
}
} 

export default connect(mapStateToProps,mapDispatchToProps)(TaskBar); 