import React, { Component } from 'react';
import Header from './components/header/header'
import TaskList from './components/taskList/taskList'
import TaskBar from './containers/taskbar/taskbar'
import Toolbar from './components/toolbar/toolbar'
import classes from './App.css'
import Add from './components/toolbar/add/add'
import Aux from './hoc/Aux'
import AddTask from './containers/addTask/addTask'

class App extends Component {
    state = {
        entry: false
    }

    onAddHandler = () => {
        this.setState({ entry: !this.state.entry })
        console.log(this.state.entry);
    }
    render() {
        let content = (
            <Aux>
                <Header content='Todo Application'/>
                <TaskList />
                <div className={classes.Add}>
                    <Add  click={this.onAddHandler}/>
                </div>
            </Aux>
        )

        if (this.state.entry) {
            content=(<Aux>
                <AddTask click={this.onAddHandler}/>
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