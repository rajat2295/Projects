import React, { Component } from 'react'
import { connect } from 'react-redux'
import Task from './task/task'
import classes from './tasklist.css'
import Aux from '../../hoc/Aux'
import {bindActionCreators} from 'redux'
import {deleteTask} from '../../store/actions/actions'

class TaskList extends Component {


    
    renderTasks=()=>{
        const tasks = this.props.tasks.tasks
        console.log(tasks)
        return(
            <Aux>
                {
                    tasks.map(task=>{
                        return(
                            // <li key={task.id}>
                            // <div>{task.data.title}</div>
                            // </li>
                            <Task key={task.id} 
                            title={task.data.title} 
                            body={task.data.body}
                            click={(id)=>this.deleteTask(task.id)}/>

                            
                        )
                    })
                }
            </Aux>
        )
    }
    deleteTask=(id)=>{
        console.log('deleting in app:',id);
        console.log('this.props:',this.props);
    }


    render() {
        console.log(this.props.tasks);
        return (
            <div className={classes.List}>
                <Task title='yoyo' body='kwqdbwqbdbdbwbdbwbdwbdbbbdbbhqwdbwqduiywqdgiuwquidugiwqduwquidouwqhdowqhdoqwdioqwoifhewojfeprwooprewgpiregierohigrehoighoirehighirehgiorehgioerghreo' />
                <Task title='yoyo' body='kwqdbwqbdbdbwbdbwbdwbdbbbdbbhqwdbwqduiywqdgiuwquidugiwqduwquidouwqhdowqhdoqwdioqwoifhewojfeprwooprewgpiregierohigrehoighoirehighirehgiorehgioerghreo' />
                {this.renderTasks()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

export default connect(mapStateToProps,{deleteTask})(TaskList);