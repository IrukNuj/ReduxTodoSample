import React, { Component } from 'react';
import { View } from 'react-native';
import AddTodo from '../../containers/Form';
import TodoList from '../../containers/TodoList';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onChangeText = text => this.setState({ text });

  render() {
    const {
      text,
    } = this.state;

    return (
      <View>
        <AddTodo
          text={text}
          onChangeText={this.onChangeText}
        />
        <TodoList />
      </View>
    );
  }
}

export default MainScreen;
