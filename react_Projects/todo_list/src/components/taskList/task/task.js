import React, { Component } from 'react'
import Toolbar from '../../toolbar/toolbar'
import classes from './task.css'
class Task extends Component {

    state = {
        task: {
            title: 'hello',
            body: 'hello'
        }
    }
    render() {
        return (
            <div className={classes.Task}>
                <div className={classes.BodyContainer}>
                    <div className={classes.Title}>{this.props.title}</div>
                    <div className={classes.Body}>{this.props.body}</div>
                </div>
                <Toolbar click={this.props.click}/>
            </div>
        )
    }
}

export default Task;