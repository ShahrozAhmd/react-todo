import React from "react";
import classes from "./taskContainer.module.css";
import TaskItem from "./TaskItem/taskItem";

export default function TaskContainer(props) {
  return (
    <div className={classes.container}>
      <div>
        <table>
          <tr className={classes.Table}>
            <th className={classes.Sno}>Sno</th>
            <th className={classes.Task}>Task</th>
            <th className={classes.Date}>Date</th>
            <th className={classes.Action}>Action</th>
          </tr>
          {/* here I have to run .map to print rows as per data */}
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </table>
      </div>
    </div>
  );
}
