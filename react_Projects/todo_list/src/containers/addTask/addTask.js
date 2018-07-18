import React,{Component} from 'react';
import Header from '../../components/header/header'
import AddContainer from '../../components/addContainer/addContainer'
import Add from '../../components/toolbar/add/add'
import classes from './addTask.css'
class AddTask extends Component{

    render(){
        return(
            <div className={classes.AddTask}>
                <Header content='Add ToDo'/>
                <AddContainer click={this.props.click} id={this.props.id}/>
                
            </div>
        )
    }
}

export default AddTask;