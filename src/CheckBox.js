import React from 'react';

class CheckBox extends React.Component {

getInitialState () {
    return {checked: true}
  }

handleChecked(){
  this.setState({checked: !this.state.checked})
}

render() {
    var msg;
    if(this.state.checked){
      msg = 'checked'
    }else{
      msg = 'unchecked'
    }
    return (
      <div>
      <input type="checkbox" onChange={this.handleChecked}
      defaultChecked={this.state.checked} />

      <h3>Checkbox is {msg}</h3>
      </div>
    );
  }

};

export default CheckBox;
