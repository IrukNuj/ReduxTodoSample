export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = text => ({
  type: ADD_TODO,
  id: Date.now().toString(),
  text,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
});
