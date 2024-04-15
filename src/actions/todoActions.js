// actions

//input\\\
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SELECT_ALL_TODO = 'SELECT_ALL_TODO';


export const SHOW_ALL = 'SHOW_ALL';
export const FILTER_COMPLETED = 'FILTER_COMPLETED';
export const FILTER_INCOMPLETE = 'FILTER_INCOMPLETE';
export const CLEAR_COMPLETED_TODO = 'CLEAR_COMPLETED_TODO';



export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const SAVE_TODO_REQUEST = 'SAVE_TODO_REQUEST';
export const SAVE_TODO_SUCCESS = 'SAVE_TODO_SUCCESS';
export const SAVE_TODO_FAILURE = 'SAVE_TODO_FAILURE';

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';





//

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});
export const selectAllTodo = () => ({ 
  type: SELECT_ALL_TODO,
});

//

export const filterCompleted = () => ({
  type: FILTER_COMPLETED,
});
export const filterIncomplete = () => ({
  type: FILTER_INCOMPLETE,
});

export const clearCompletedTodo = () => ({
  type: CLEAR_COMPLETED_TODO,
});


export const showAll = () => ({
  type: SHOW_ALL,
});



//API
export const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST
});

export const fetchTodosSuccess = todos => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos
});

export const fetchTodosFailure = error => ({
  type: FETCH_TODOS_FAILURE,
  error
});

export const saveTodoRequest = (todo) => ({
  type: SAVE_TODO_REQUEST,
  payload: todo
});

export const saveTodoSuccess = (todo) => ({
  type: SAVE_TODO_SUCCESS,
  payload: todo
});

export const saveTodoFailure = (error) => ({
  type: SAVE_TODO_FAILURE,
  error
});

export const deleteTodoRequest = id => ({
  type: DELETE_TODO_REQUEST,
  payload: id
});

export const deleteTodoSuccess = id => ({
  type: DELETE_TODO_SUCCESS,
  payload: id
});

export const deleteTodoFailure = error => ({
  type: DELETE_TODO_FAILURE,
  error
});