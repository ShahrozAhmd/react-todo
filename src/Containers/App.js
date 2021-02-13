import React, { Component } from "react";
import classes from "./App.module.css";
import AddTaskBar from "../Components/AddTaskBar/addTaskBar";
import TaskContainer from "../Components/TasksContainer/taskContainer";
import Backdrop from "../UI/Backdrop/backdrop";
import Date from "../Components/Date/date";
import axios from "../axios";

// var i = 0;
class App extends Component {
  state = {
    taskOnHold: [],
    tasks: [],
    isBtnDisable: true,
    isBackdropEnable: false,
    taskToEdit: 0,
    modalErrors: {
      priorityError: false,
      emptyInputs: false,
    },
  };

  //just a utility function to clear the input field
  emptyInputBox = () => {
    document.querySelector("input").value = "";
  };

  //this functions run on every key typing in text box to validate out button for functioning.
  changeBtnState = (e) => {
    if (e.target.value.trim()) {
      const str = [];
      str.push(e.target.value);
      this.setState({ isBtnDisable: false, taskOnHold: str });
    }
  };

  addTaskHandler = () => {
    // const val = document.querySelector("input").value;
    // const copyState = [...this.state.tasks];
    // copyState.push(val);
    // this.setState({
    //   tasks: copyState,
    //   isBtnDisable: true,
    // });

    // i = i + 1;

    // console.log(i);
    const atask = {
      date: Date(),
      task: this.state.taskOnHold.toString(),
      // id: i,
    };
    // var myid;
    axios.post("/tasksList.json", atask).then((res) => {
      //  myid = res.data.name;
      const newtask = [...this.state.tasks];
      newtask.push({ id: res.data.name, data: atask });
      // console.log(newtask);
      this.setState({ tasks: newtask });
      console.log(this.state.taskOnHold);
      // console.log(res.data);
    });
    // console.log(myid);
    //  axios.get("/tasksList.json").then(data =>  console.log(data.data.myid),500);

    this.emptyInputBox();
  };

  //to disble edit screen by clicking backdrop
  removeBackdrop = () => {
    let e2 = { ...this.state.modalErrors };
    e2.emptyInputs = false;
    e2.priorityError = false;

    this.setState({
      isBackdropEnable: false,
      modalErrors: e2,
    });
  };

  editTaskHandler = (i) => {
    this.setState({ isBackdropEnable: true, taskToEdit: i });
    let currState = [...this.state.tasks];

    setTimeout(() => {
      // var position = document.getElementById("position-input");
      // position.value = i + 1;

      var task = document.getElementById("task-input");
      task.value = currState[i].data.task;
    }, 10);
  };

  assignEditedTask = () => {
    let currTasksStates = [...this.state.tasks];
    let currIndex = this.state.taskToEdit;

    let position = document.getElementById("position-input");
    let positionValue = position.value - 1;
    let task = document.getElementById("task-input");
    let taskValue = task.value;

    if (!position.value.trim() || !taskValue.trim()) {
      //use this logic to update nested state using setState, coz setState not suport tradional js way.
      var e2 = { ...this.state.modalErrors };
      e2.emptyInputs = true;
      this.setState({ modalErrors: e2 });
    } else if (position.value > currTasksStates.length) {
      var e1 = { ...this.state.modalErrors };
      e1.priorityError = true;
      this.setState({ modalErrors: e1 });
    } else {
      currTasksStates.splice(currIndex, 1);
      const editedTask = this.state.tasks[currIndex].data.task = taskValue
      currTasksStates.splice(positionValue, 0, editedTask);

      //finally update state after all checks and modification
      this.setState({
        tasks: currTasksStates,
        isBackdropEnable: false,
        modalErrors: !e2,
        modalErrors: !e1,
      });
    }
  };

  //For deleting any task from the list
  deleteTaskHandler = (i) => {
    const copyState = [...this.state.tasks];
    copyState.splice(i, 1);
    this.setState({ tasks: copyState });
  };

  render() {
    return (
      <div className={classes.Container}>
        <Backdrop
          taskToEdit={this.state.taskToEdit}
          backdropToggle={this.state.isBackdropEnable}
          remove={this.removeBackdrop}
          editDone={this.assignEditedTask}
          priorityError={this.state.modalErrors.priorityError}
          emptyInputError={this.state.modalErrors.emptyInputs}
          limit={this.state.tasks.length}
        />
        <AddTaskBar
          addTask={this.addTaskHandler}
          disbtn={this.state.isBtnDisable}
          btnstate={this.changeBtnState}
        />
        <TaskContainer
          tasks={this.state.tasks}
          delete={this.deleteTaskHandler}
          edit={this.editTaskHandler}
        />
      </div>
    );
  }
}

export default App;
