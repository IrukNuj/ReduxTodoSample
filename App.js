import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import MainScreen from "./components/MainScreen";

const store = createStore(
  todoApp,
);

const App = () => (
  <Provider store={store}>
    <MainScreen />
  </Provider>
);

export default App;
