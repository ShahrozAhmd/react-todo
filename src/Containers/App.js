import React, { Component } from "react";
import classes from "./App.module.css";
import AddTaskBar from "../Components/AddTaskBar/addTaskBar";
import TaskContainer from "../Components/TasksContainer/taskContainer";

export default class App extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <AddTaskBar />

        <TaskContainer />
      </div>
    );
  }
}
