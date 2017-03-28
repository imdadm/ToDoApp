import React, { Component } from 'react';
import logo from './logo.svg';
import ToDoItem from './ToDoItem.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>My To Do App </h2>
        <ToDoItem title='Number one' completed={true}/>
      </div>
    );
  }
}

export default App;
