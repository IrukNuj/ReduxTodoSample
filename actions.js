export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

let counter = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  id: counter++,
  text,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
});
