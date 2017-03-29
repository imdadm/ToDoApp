import React from 'react'

export default class ToDoItemInput extends React.Component {
  render() {
    return (
      <div>
        {this.props.title}
        <AddedMessage added={this.props.added}/>
      </div>
    )
  }
}

const AddedMessage = (props) => {
  if (!props.added) {
    return <button> Click to save </button>
  }

  return (
    <span> Saved! </span>
  )
}
