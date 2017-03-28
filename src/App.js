import React, { Component } from 'react';
import logo from './logo.svg';
import ToDoItem from './ToDoItem.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>My To Do App 2</h2>
        <ToDoItem/>
      </div>
    );
  }
}

export default App;
