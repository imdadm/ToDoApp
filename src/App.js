import React, { Component } from 'react';
import logo from './logo.svg';
import ToDoItem from './ToDoItem.js';
import ToDoItemInput from './ToDoItemInput.js';
import ToDoList from './ToDoList.js';
import './App.css';

class App extends Component {



  render() {
    return (
      <div className="MainComponent">
      <div className="App">
      <div className="App-header">
        <h2>To-Do List App </h2>
      </div>
      <ToDoItemInput title={<input type="text" placeholder="e.g. Feed dog" />}
 added={false}/>
      <ToDoList title= {<input type="text"/>} removed={false}/>
      </div>
      </div>
    );
  }
}

export default App;
