import React from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import './App.css';
import mantras from './reducers';
import List from './containers/ListContainer';
import Input from './containers/InputContainer';

const store = createStore(mantras)

function App() {
  return (
    <div className="App App-header">
      <Provider store={store}>
        <Input />
        <List />
      </Provider>
    </div>
  );
}

export default App;
