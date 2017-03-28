import React, { Component } from 'react';
import logo from './logo.svg';
import ToDoItem from './ToDoItem.js';
import ToDoList from './ToDoList.js'
import InputType from './InputType.js'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <div className="App-header">
        <h2>To-Do List App </h2>
      </div>
       <ToDoList title= {<InputType/>} completed={false}/>

      </div>
    );
  }
}

export default App;
