import React from "react";
import classes from './taskContainer.module.css'
import TaskItem from "./TaskItem/taskItem";

export default function TaskContainer(props) {
  return (
    <div className = {classes.container}>
      <div>
        <table>
          <tr className = {classes.Table}>
            <th>Sno</th>
            <th>Task</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </table>
      </div>
    </div>
  );
}
