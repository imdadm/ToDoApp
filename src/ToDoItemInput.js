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

const AddToListButtonAction = () => {
    return (
      alert({} + "has been added to the list")
    );

  }


const AddedMessage = (props) => {
  if (!props.added) {
    return <button className ="ToDoItemInput" onClick={AddToListButtonAction}> Add to list </button>
  }

  return (
    <span> Saved! </span>
  )
}
