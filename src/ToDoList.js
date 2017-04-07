import React from 'react';
import ToDoItem from './ToDoItem.js'

export default class ToDoList extends React.Component {
render (){
  return(
    <div>
    <ToDoItem title = {this.props.title}/>
    <ToDoItem title = {this.props.title}/>
    <ToDoItem title = {this.props.title}/>
    </div>
  )

}

}
