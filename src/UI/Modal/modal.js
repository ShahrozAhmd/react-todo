import React from "react";
import classes from "./modal.module.css";

export default function Modal(props) {
  return (
    <div className={classes.Container}>
      <div className={classes.EditBox}>
        <div style={{ width: "60%" }}>
          Priority
          <input
            className={classes.PositionInput}
            type="number"
            min="1"
            max="10"
          />
        </div>

        <div style={{ width: "60%" }}>
          Task
          <input className={classes.TaskInput} type="text" />
        </div>
        <div style={{ width: "60%" }}>
          <button>Finish</button>
        </div>
      </div>
    </div>
  );
}
