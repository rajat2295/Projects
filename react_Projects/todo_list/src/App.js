import React, { Component } from 'react';
import Header from './components/header/header'
import TaskList from './components/taskList/taskList'
import TaskBar from './containers/taskbar/taskbar'
import Toolbar from './components/toolbar/toolbar'
import classes from './App.css'
import Add from './components/toolbar/add/add'
import Aux from './hoc/Aux'
import AddTask from './containers/addTask/addTask'
import {connect} from 'react-redux'
import {Route} from 'react-router'
class App extends Component {
    state = {
        entry: false,
        selectedId:null
    }

    onAddHandler = () => {
        this.setState({ entry: !this.state.entry })
      
        
    }
    editTask = (id) =>{
        this.setState({selectedId:id})
        

    }
    render() {
        let content = (
            <Aux>
                <Header content='Todo Application'/>
                <TaskList click ={this.onAddHandler} editTask={this.editTask} />
                <div className={classes.Add}>
                 <Add click={this.onAddHandler} />
                </div>
            </Aux>
        )

        if (this.state.entry) {
            content=(<Aux>
                <AddTask click={this.onAddHandler} 
                    id={this.state.selectedId}/>
            </Aux>
            )
        }
        
        return (<div className={classes.Outer}>
            {content}
        </div>
        );
    }
}

export default App;