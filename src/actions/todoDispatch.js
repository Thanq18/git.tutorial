// dispatch
import { addTodo, toggleTodo, removeTodo, filterCompleted, filterIncomplete, clearCompletedTodo, showAll } from './todoActions';

export const handleAddTodo = (dispatch, text) => {
  dispatch(addTodo(text));

  return '' ;
};

export const handleToggleTodo = (dispatch, id) => {
  dispatch(toggleTodo(id));
};

export const handleRemoveTodo = (dispatch, id) => {
  dispatch(removeTodo(id));
};

export const handleFilterCompleted = (dispatch) => {
  dispatch(filterCompleted());
};

export const handleFilterIncomplete = (dispatch) => {
  dispatch(filterIncomplete());
};

export const handleDelete = (dispatch) => {
  dispatch(clearCompletedTodo());
};

export const handleShowAll = (dispatch) => {
  dispatch(showAll());
};


