import React from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import './App.css';
import mantras from './reducers';
import MantraList from './containers/MantraListContainer';
import MantraForm from './containers/MantraFormContainer';
import TypeMantras from './containers/TypeMantrasContainer';

const store = createStore(mantras)

function App() {
  return (
    <div className="App App-header">
      <Provider store={store}>
        <MantraForm />
        <MantraList />
        <TypeMantras />
      </Provider>
    </div>
  );
}

export default App;
