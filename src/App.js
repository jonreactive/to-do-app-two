import React, { Component } from 'react';
import Note from './components/Note'
import './App.css';



// have to look into what refs are all about.. i completly forgot..

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      notes: []
    }
  }

  updateNoteText(noteText) {
    this.setState({
      noteText: noteText.target.value
    })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        let notesArr = this.state.notes;
        notesArr.push(this.state.noteText);
        this.setState({noteText: ''});

    }
  }

  deleteNote(index) {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr})
  }

  addNote() {
    if (this.state.noteText === '') {return false}
        let notesArr = this.state.notes;
        notesArr.push(this.state.noteText);
        this.setState({noteText: ''});
        this.textInput.focus();
  }

  render() {

    let notes = this.state.notes.map((val, key) => {
      return <Note
                key={key}
                text={val}
                deleteMethod={ () => this.deleteNote(key)} />
    })



    return (

        <div className="container">

              <div className="header"> This is another version of a to do app.</div>
              {notes}
              <div className="btn"
                   onClick={this.addNote.bind(this)}>+</div>
              <input className="textInput"
                     type="text"
                     ref={((input) => {this.textInput = input})}
                     value={this.state.noteText}
                     onChange={noteText => this.updateNoteText(noteText)}
                     onKeyPress={this.handleKeyPress.bind(this)}/>
        </div>
    );
  }
}

export default App;
