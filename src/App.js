import React, { Component } from 'react';

import './App.css';
import Main from './Main'

class App extends Component {
constructor(){
 super()
        this.state = {
            noteData:{},
            currentNote:'',
          }

}

saveNote = (note) => {
  if(!note.id){
    note.id=`note-${Date.now()}`
  }
  const noteData={...this.state.noteData}
  noteData[note.id]=note
  this.setState({noteData})

}

deleteNote = (note) =>{
  const noteData={...this.state.noteData}
  noteData[note.id].delete()
  this.setState({noteData})
}
chooseCurrentNote = (currentNote)=>{
  this.setState({currentNote})

}

  render() {
    return (
      <div className="App">
          <Main notes={this.state.noteData} 
          currentNote={this.state.currentNote} 
          chooseCurrentNote={this.chooseCurrentNote} 
          saveNote={this.saveNote} 
          deleteNote={this.deleteNote}
          />
      </div>
    );
  }
}

export default App;
