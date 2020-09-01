import React from "react";
import classes from "./taskItem.module.css";
import ActionButton from "../../ActionButtons/actionButton";

export default function TaskItem(props) {
  return props.atask.map((value, index) => {
    return (
      <tr className={classes.Table} key = {index}>
        <td className={classes.Sno}>{index + 1}</td>
        <td className={classes.Task}>{props.atask[index]}</td>
        <td className={classes.Date}> {"date"}</td>
        <td className={classes.Action}>
          <ActionButton />
        </td>
      </tr>
    );
  });
}
