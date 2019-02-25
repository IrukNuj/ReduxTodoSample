import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, removeTodo }) => {
  const renderItem = ({ item }) => (
    <Todo
      todo={item}
      removeTodo={removeTodo}
    />
  );

  return (
    <FlatList
      data={todos}
      extraData={todos.length}
      renderItem={renderItem}
      keyExtractor={todo => todo.id}
    />
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
