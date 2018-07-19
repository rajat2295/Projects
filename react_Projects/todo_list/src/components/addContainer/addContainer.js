import React, { Component } from "react";
import classes from "./addContainer.css";
import Add from "../toolbar/add/add";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTask, deleteTask } from "../../store/actions/actions";
import moment from "moment";

class Addcontainer extends Component {
  state = {
    title: "",
    body: "",
    dueDate: ""
  };

  onAddHandler = () => {
    this.props.addTask(this.state);
    this.props.click();
  };
  componentWillMount() {
    const tasks = this.props.tasks.tasks;
    tasks.map(task => {
      if (task.id == this.props.id) {
        this.setState({
          title: task.data.title,
          body: task.data.body,
          dueDate: task.data.dueDate
        });
        this.props.deleteTask(this.props.id);
      }
    });
  }

  render() {
    let title,
      body,
      dueDate = "";

    return (
      <div className={classes.Container}>
        <label className={classes.Label}>Title</label>
        <input
          className={classes.Input}
          placeholder="Add title"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label className={classes.Label}>Body</label>
        <input
          className={classes.Input}
          placeholder="Description"
          value={this.state.body}
          onChange={event => this.setState({ body: event.target.value })}
        />
        <label className={classes.Label}>Date</label>
        <input
          className={classes.Input}
          placeholder="Reminder"
          value={this.state.dueDate}
          type="datetime-local"
          onChange={event => this.setState({ dueDate: event.target.value })}
        />

        <Add click={this.onAddHandler} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state
  };
};

export default connect(
  mapStateToProps,
  { addTask, deleteTask }
)(Addcontainer);
