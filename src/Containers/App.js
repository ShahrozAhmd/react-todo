import React, { Component } from "react";
import classes from "./App.module.css";
import AddTaskBar from "../Components/AddTaskBar/addTaskBar";
import TaskContainer from "../Components/TasksContainer/taskContainer";
import Backdrop from "../UI/Backdrop/backdrop";

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

  };

  deleteTaskHandler = (i) => {
    const copyState = [...this.state.tasks];
    copyState.splice(i, 1);
    this.setState({ tasks: copyState });
  };

  render() {
    return (
      
      <div className={classes.Container}>
        <Backdrop />
        <AddTaskBar
          addTask={this.addTaskHandler}
          disbtn={this.state.isBtnDisable}
          btnstate={this.changeBtnState}
        />
        <TaskContainer
          tasks={this.state.tasks}
          delete={this.deleteTaskHandler}
        />
      </div>
    );
  }
}

export default App;
