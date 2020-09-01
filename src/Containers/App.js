import React, { Component } from "react";
import classes from "./App.module.css";
import AddTaskBar from "../Components/AddTaskBar/addTaskBar";
import TaskContainer from "../Components/TasksContainer/taskContainer";

class App extends Component {
  state = {
    tasks: [],
    isBtnDisable: true,
  };

  //just a utility function to clear the input field
  emptyInputBox = () => {
    document.querySelector("input").value = "";
  };

  changeBtnState = (e) => {
    if (e.target.value.trim()) {
      this.setState({ isBtnDisable: false });
    }
  };

  addTaskHandler = () => {
    const val = document.querySelector("input").value;
    const copyState = [...this.state.tasks];
    copyState.push(val);

    this.setState({
      tasks: copyState,
      isBtnDisable: true,
    });

    this.emptyInputBox();
  };

  editTaskHandler = () => {
    //code to edit the particular task
  };

  deleteTaskHandler = () => {
    //code to delerte the particular task
  };

  render() {
    return (
      <div className={classes.Container}>
        <AddTaskBar
          addTask={this.addTaskHandler}
          disbtn={this.state.isBtnDisable}
          btnstate={this.changeBtnState}
        />
        <TaskContainer tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
