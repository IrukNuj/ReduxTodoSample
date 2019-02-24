import React from 'react';
import { Text, View } from 'react-native';
import { createStore } from 'redux';
import { addTodo, removeTodo } from "./actions";
import todoApp from './reducers';

const store = createStore(
  todoApp,
);

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(removeTodo(0));
store.dispatch(removeTodo(1));

// Stop listening to state updates
unsubscribe();

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Hello Redux!</Text>
  </View>
);

export default App;
