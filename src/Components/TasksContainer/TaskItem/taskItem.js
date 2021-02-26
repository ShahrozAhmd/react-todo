import React from "react";
import classes from "./taskItem.module.css";
import ActionButton from "../../ActionButtons/actionButton";

export default function TaskItem(props) {
  return props.atask.map((item, index) => {
    return (
      <tr className={classes.Table} key={item.id}>
        <td className={classes.Sno}>{index + 1}.</td>
        <td className={classes.Task}>{props.atask[index].data.task}</td>
        <td className={classes.ate}>{props.atask[index].data.date}</td>
        <td className={classes.Action}>
          <ActionButton
            taskInd={index}
            thedel={props.adel}
            theedit={props.aedit}
          />
        </td>
      </tr>
    );
  });
}
