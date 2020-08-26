import React from "react";
import classes from "./taskItem.module.css";
import ActionButton from "../../ActionButtons/actionButton";

export default function TaskItem(props) {
  return (
    <tr className={classes.Table}>
      <td className={classes.Sno}>1.</td>
      <td className={classes.Task}>
        Do Breakfast in the morning preferably eggs and tea
      </td>
      <td className={classes.Date}>Aug, 26</td>
      <td className={classes.Action}>Buttons</td>
    </tr>
  );
}
