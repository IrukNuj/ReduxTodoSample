import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  input: {
    marginBottom: 5,
    padding: 5,
    borderWidth: 1,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderWidth: 1,
  },
});

const Form = ({ text, changeInput, addTodo }) => {
  const submitAndReset = () => {
    if (!text) {
      return;
    }
    addTodo(text);
    changeInput('');
  };

  console.log(text);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={changeInput}
        onSubmitEditing={submitAndReset}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={submitAndReset}
      >
        <Text>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

Form.propTypes = {
  text: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default Form;
