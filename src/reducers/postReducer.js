import { FETCH_POSTS, NEW_POST } from "../actions/types";

//Setting the intial State
const initalState = {
  items: [],
  item: {}
};

//Data from the reducer is being received from the action
export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("reducer called by the action");
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
