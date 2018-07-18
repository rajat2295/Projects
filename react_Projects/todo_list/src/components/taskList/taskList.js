import React, { Component } from 'react'
import { connect } from 'react-redux'
import Task from './task/task'
import classes from './tasklist.css'
import Aux from '../../hoc/Aux'
import {bindActionCreators} from 'redux'
import {deleteTask} from '../../store/actions/actions'
import moment from 'moment'
class TaskList extends Component {
    state={
        time: Date.now(),
        selectedTask:null
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

      editTask=(id)=>{
        this.setState({selectedTask:id})
        this.props.editTask(id);
        this.props.click();
      }
      

    
    renderTasks=()=>{
        const tasks = this.props.tasks.tasks
        
        return(
            <Aux>
                {
                    tasks.map(task=>{
                        
                        let time=(Date.now()-new Date(task.data.dueDate).getTime())/1000
                        if(time< 2 &&time>0){
                            alert('Reminder: '+ task.data.title);
                        }
                        return(
                           
                            <Task key={task.id} 
                            title={task.data.title} 
                            body={task.data.body}
                            dueDate={moment(new Date(task.data.dueDate)).fromNow()}
                            click={(id)=>this.deleteTask(task.id)}
                            edit={()=>this.editTask(task.id)}/>
                            
                            
                        )
                    })
                }
            </Aux>
        )
    }
    deleteTask=(id)=>{
        
        this.props.deleteTask(id)
    }


    render() {
        
        return (
            <div className={classes.List}>
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