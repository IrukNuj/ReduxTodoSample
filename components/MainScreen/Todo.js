import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

const Todo = ({ todo, removeTodo }) => {
  const onPress = () => removeTodo(todo.id);

  return (
    <View>
      <Text>{todo.text}</Text>
      <TouchableOpacity
        onPress={onPress}
      >
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string.isRequired,
  }).isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;
