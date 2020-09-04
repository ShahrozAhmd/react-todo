import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./actionButton.module.css";

const ActionButton = (props) => {
  return (
    <div>
      <button>
        <FontAwesomeIcon
          icon={faPencilAlt}
          className={classes.ButtonItem}
          size="lg"
        />
      </button>
      
      <button>
        <FontAwesomeIcon
          icon={faTimes}
          className={classes.ButtonItem}
          size="lg"
        />
      </button>
    </div>
  );
};

export default ActionButton;
