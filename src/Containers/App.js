import React, { Component } from "react";
import classes from "./App.module.css";
import AddTaskBar from "../Components/AddTaskBar/addTaskBar";
import TaskContainer from "../Components/TasksContainer/taskContainer";
import Backdrop from "../UI/Backdrop/backdrop";
import Date from "../Components/Date/date";
import axios from "../axios";

class App extends Component {
  state = {
    currIndex: null,
    taskStr: "",
    taskInd: null,
    taskOnHold: null,
    tasks: [],
    isBtnDisable: true,
    isBackdropEnable: false,
    taskToEdit: null,
    modalErrors: {
      priorityError: false,
      emptyInputs: false,
    },
  };

  componentDidMount() {
    let data = null;
    axios
      .get("https://todo-in-react-default-rtdb.firebaseio.com/tasksList.json")
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          data = Object.keys(res.data);
          let task = data.map((item, index) => {
            return {
              id: item,
              data: {
                ...res.data[item],
              },
            };
          });
          this.setState({ tasks: task });
        }
      });
  }

  //just a utility function to clear the input field
  emptyInputBox = () => {
    document.querySelector("input").value = "";
  };

  //this functions run on every key typing in text box to validate out button for functioning.
  changeBtnState = (e) => {
    if (e.target.value.trim()) {
      let str = null;
      str = e.target.value;
      console.log(str);
      this.setState({ isBtnDisable: false, taskOnHold: str });
    }
  };

  addTaskHandler = () => {
    const atask = {
      date: Date(),
      task: this.state.taskOnHold,
    };
    axios.post("/tasksList.json", atask).then((res) => {
      const newtask = [...this.state.tasks];
      newtask.push({ id: res.data.name, data: atask });
      this.setState({ tasks: newtask });
      console.log(this.state.tasks);
    });

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

  editTaskIndexHandler = (event) => {
    let value = event.target.value;
    this.setState({ taskToEdit: value });
  };

  editTaskStrHandler = (e) => {
    const value = e.target.value;
    this.setState({ taskOnHold: value });
  };

  editTaskHandler = (i) => {
    this.setState({
      currIndex: i,
      isBackdropEnable: true,
      taskToEdit: i + 1,
      taskOnHold: this.state.tasks[i].data.task,
    });
  };

  assignEditedTask = () => {
    let currTasksStates = [...this.state.tasks];
    let currIndex = this.state.currIndex;
    let position = this.state.taskToEdit;
    let taskValue = this.state.taskOnHold;

    if (position === "" || taskValue === "") {
      //use this logic to update nested state using setState, coz setState not suport tradional js way.
      var e2 = { ...this.state.modalErrors };
      e2.emptyInputs = true;
      this.setState({ modalErrors: e2 });
    } else if (position > currTasksStates.length) {
      var e1 = { ...this.state.modalErrors };
      e1.priorityError = true;
      this.setState({ modalErrors: e1 });
    } else {
      axios
        .patch(
          `/tasksList/${this.state.tasks[this.state.taskToEdit - 1].id}/.json`,
          { task: this.state.taskOnHold }
        )
        .then((res) => {
          const tempState = [...this.state.tasks];
          tempState[
            this.state.taskToEdit - 1
          ].data.task = this.state.taskOnHold;
          this.setState({
            tasks: tempState,
            isBackdropEnable: false,
            modalErrors: !e2,
            modalErrors: !e1,
          });
        });

      // currTasksStates.splice(currIndex, 1);
      // const editedTask = { ...this.state.tasks[currIndex] };
      // editedTask.data.task = taskValue;

      // console.log(editedTask);
      // currTasksStates.splice(position, 0, editedTask);

      // //finally update state after all checks and modification
      // console.log(currTasksStates);
    }
  };

  //For deleting any task from the list
  deleteTaskHandler = (i) => {
    let afterDeletion = null;
    const copyState = [...this.state.tasks];
    axios.delete(
      `https://todo-in-react-default-rtdb.firebaseio.com/tasksList/${copyState[i].id}.json`
    );
    afterDeletion = copyState.filter((task) => task.id !== copyState[i].id);
    this.setState({ tasks: afterDeletion });
  };

  render() {
    return (
      <div className={classes.Container}>
        <Backdrop
          taskOnHold={this.state.taskOnHold}
          taskToEdit={this.state.taskToEdit}
          editTaskStrHandler={this.editTaskStrHandler}
          editTaskIndexHandler={this.editTaskIndexHandler}
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
