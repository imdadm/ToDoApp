import React from 'react'

export default class ToDoItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.title}
        <CompletedMessage completed={this.props.completed}/>
      </div>
    )
  }
}

const CompletedMessage = (props) => {
  if (!props.completed) {
    return null
  }

  return (
    <span> - Completed </span>
  )
}
