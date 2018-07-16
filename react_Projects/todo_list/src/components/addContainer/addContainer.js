import React,{Component} from 'react'
import classes from './addContainer.css'
import Add from '../toolbar/add/add'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addTask} from '../../store/actions/actions'


class Addcontainer extends Component{
    
    state={
        title:'',
        body:'',
        date:'',
        time:''
    }

    onAddHandler=(event)=>{
        event.preventDefault();
        
        this.props.addTask(this.state);

    }

    renderTasks=()=>{
        const tasks = this.props.tasks.tasks
        console.log(tasks)
        return(
            <ul>
                {
                    tasks.map(task=>{
                        return(
                            <li key={task.id}>
                            <div>{task.data.title}</div>
                            </li>
                            
                        )
                    })
                }
            </ul>
        )
    }
    
    
    render(){
        
        return(
        <div className={classes.Container}>
        <form >
        <label>Title</label><input className={classes.Input} onChange={(event)=>this.setState({title: event.target.value})}/>
        <label>Body</label><input className={classes.Input}  onChange={(event)=>this.setState({body: event.target.value})}/>
        <label>Date</label><input className={classes.Input} type='date'  onChange={(event)=>this.setState({date: event.target.value})}/>
        <label>Time</label><input className={classes.Input}  type='time'  onChange={(event)=>this.setState({time: event.target.value})}/>
        <Add click={this.onAddHandler}/>
        </form>
        {this.renderTasks()}
        </div>
    )}
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({addTask},dispatch)
}

const mapStateToProps=(state)=>{
    
    return{
        tasks: state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Addcontainer);