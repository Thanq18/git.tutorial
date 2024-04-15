// API 

export const fetchTodosApi = async () => {
  try {
      const response = await fetch('http://localhost:3001/todos');
      if (!response.ok) {
          throw new Error('Failed to fetch todos');
      }
      return await response.json();
  } catch (error) {
      throw new Error(error.message); 
  }
};
console.log(fetchTodosApi());

//
export const saveTodoApi = async (todos) => {
  try {
      const response = await fetch('http://localhost:3001/todos',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(todos),
      });
      if (!response.ok) {
          throw new Error('Failed to save todo');
      }
      return await response.json();
  } catch (error) {
      throw new Error(error.message);
  }
};
console.log(saveTodoApi());
//
export const deleteTodoApi = async (todoId) => {
  try {
      const response = await fetch(`http://localhost:3001/todos/${todoId}`, {
          method: 'DELETE',
      });
      if (!response.ok) {
          throw new Error('Failed to delete todo');
      }
      return true; 
  } catch (error) {
      throw new Error(error.message);
  }
};
