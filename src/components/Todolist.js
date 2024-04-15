import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleAddTodo, handleToggleTodo, handleRemoveTodo, handleFilterCompleted, handleFilterIncomplete, handleDelete, handleShowAll } from '../actions/todoDispatch';
import { toggleTodo } from '../actions/todoActions';

const TodoList = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  let todos = useSelector(state => {
    if (state.filter === 'completed') {
      return state.todos.filter(todo => todo.completed);
    } else if (state.filter === 'incomplete') {
      return state.todos.filter(todo => !todo.completed);
    } else {
      return state.todos;
    }
  });
  
  const incompletedTodo = todos.filter((todo) => !todo.completed);
  
  const handleSelectAll = () => {
    const newTodos = todos.map(todo => ({
      ...todo,
      completed: !selectAll
    }));
    newTodos.forEach(todo => {
      dispatch(toggleTodo(todo.id, !selectAll)); 
    });
    setSelectAll(!selectAll);
  };
 
  const handleAdd = () => {
    const newText = handleAddTodo(dispatch, inputValue);
    setInputValue(newText);
  };
  const handleToggle = (id) => handleToggleTodo(dispatch, id);
  const handleRemove = (id) => handleRemoveTodo(dispatch, id);
  const handleFilterComplete = () => handleFilterCompleted(dispatch);
  const handleFilterIncompleted = () => handleFilterIncomplete(dispatch);
  const handleDeleteCompleted = () => handleDelete(dispatch);
  const handleShowAllTodos = () => handleShowAll(dispatch);
 
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };
  
  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ color: '#b83f45', fontSize: 80, fontWeight: 200 }}>TodoList</h1>
      <button onClick={handleSelectAll}>
        {selectAll ? "v" : "v"}
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
            <span>{todo.text}</span>
            <button onClick={() => handleRemove(todo.id)}>X</button>
          </li>
        ))}
      </ul>
      <footer>
        <p>{incompletedTodo.length} items left!</p>
        <button onClick={handleShowAllTodos}>All</button>
        <button onClick={handleFilterComplete}>Active</button>
        <button onClick={handleFilterIncompleted}>Completed</button>
        <button onClick={handleDeleteCompleted}>ClearCompleted</button>
      </footer>
    </div>
  );
};

export default TodoList;
