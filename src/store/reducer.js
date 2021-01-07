import * as actionTypes from "./action";

const initialState = {
  tasks: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: 1 };
    case actionTypes.DELETE_TASK:
      console.log("delte");
      return { ...state };
    case actionTypes.EDIT_TASK:
      console.log("edit");
      return { ...state };
    case actionTypes.SAVE_EDITED_TASK:
      console.log("save");
      return { ...state };
  }
  return state;
};

export default reducer;
