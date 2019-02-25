import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
  },
  item: {
    margin: 5,
  },
  delete: {
    margin: 5,
    padding: 5,
    marginLeft: 'auto',
    borderWidth: 1,
  },
});

const Todo = ({ todo, removeTodo }) => {
  const onPress = () => removeTodo(todo.id);

  return (
    <View style={styles.container}>
      <Text style={styles.item}>{todo.text}</Text>
      <TouchableOpacity
        style={styles.delete}
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
