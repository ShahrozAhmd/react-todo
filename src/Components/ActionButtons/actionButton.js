import React from 'react'
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./actionButton.module.css";

 const ActionButton = (props) =>  {
    return (
        <div>
            <button>
                <FontAwesomeIcon icon={faPlusSquare} className={classes.ButtonItem} />
            </button>
            <button>
                <FontAwesomeIcon icon={faPlusSquare} className={classes.ButtonItem} />
            </button>
        </div>
    );
}

export default ActionButton;