// reducers

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SELECT_ALL_TODO, CLEAR_COMPLETED_TODO, FILTER_COMPLETED, FILTER_INCOMPLETE, SHOW_ALL, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE, SAVE_TODO_SUCCESS, SAVE_TODO_FAILURE, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '../actions/todoActions';

const initialState = {
  todos: [],
  filter: 'all', 
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload.text, completed: false }],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };
    case SELECT_ALL_TODO:
      const allCompleted = state.todos.every(todo => todo.completed);
      return {
        ...state,
        todos: state.todos.map(todo => ({ ...todo, completed: !allCompleted })),
      };
    case SHOW_ALL:
      return {
        ...state,
        filter: 'all',
      };
    case FILTER_COMPLETED:
      return {
        ...state,
        filter: 'completed',
      };
    case FILTER_INCOMPLETE:
      return {
        ...state,
        filter: 'incomplete',
      };
    case CLEAR_COMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };


      //api
      case FETCH_TODOS_SUCCESS:
        return {
          ...state,
          todos: action.payload,
        };
      case FETCH_TODOS_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      case SAVE_TODO_SUCCESS:
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case SAVE_TODO_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      case DELETE_TODO_SUCCESS:
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload),
        };
      case DELETE_TODO_FAILURE:
        return {
          ...state,
          error: action.payload
        }

    default:
      return state;
  }
};

export default todoReducer;
