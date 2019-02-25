import { combineReducers } from "redux";
import {
  ADD_TODO, CHANGE_INPUT,
  REMOVE_TODO,
} from './actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const form = (state = {text: ''}, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  form,
});

export default todoApp;
