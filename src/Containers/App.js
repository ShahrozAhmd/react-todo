import React, { Component } from "react";
import classes from "./App.module.css";
import AddTaskBar from "../Components/AddTaskBar/addTaskBar";
import TaskContainer from "../Components/TasksContainer/taskContainer";

export default class App extends Component {

  state = {

  }

  addTaskHandler(){

    //code to add the task in task container on hit
  }
  
  editTaskHandler(){

    //code to edit the particular task 
  }

  deleteTaskHandler(){

    //code to delerte the particular task 

  }



  render() {
    return (
      <div className={classes.Container}>
        <AddTaskBar />
        <TaskContainer />
      </div>
    );
  }
}
