import React from "react";
import classes from "./backdrop.module.css";
import Modal from "../Modal/modal";

export default function Backdrop(props) {
  return (
      <>
    <div className={classes.Backdrop}>
    </div>
    <Modal />
    </>
  );
}
