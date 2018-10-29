import React, { Component } from 'react';

class Note extends Component {
  render(){
    return (
      <div className="note">

           {this.props.text}
      <button className="delete-button" onClick={this.props.deleteMethod}>Delete Note</button>     

      </div>
    )
  }
}

export default Note
