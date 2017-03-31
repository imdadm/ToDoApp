import React from 'react'

export default class ToDoItem extends React.Component {

  render() {
    return (
      <div>
        {this.props.title}
        <RemovedMessage removed={this.props.removed}/>
      </div>
    )
  }
}
const RemovedFromListButtonAction = () => {
    return (
      alert({} + "has been removed from the list")
    );
}

const RemovedMessage = (props) => {
  if (!props.removed) {
    return <button className="ToDoItem" onClick={RemovedFromListButtonAction}> Remove </button>
  }

  return (
    <span> - Removed </span>
  )
}
