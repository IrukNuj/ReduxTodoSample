import React from 'react';
import { View } from 'react-native';
import Form from '../../containers/Form';
import TodoList from '../../containers/TodoList';

const MainScreen = () => (
  <View>
    <Form />
    <TodoList />
  </View>
);

export default MainScreen;
