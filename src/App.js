import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import Base,{auth} from './Base'
import SignIn from './SignIn'
import SignOut from './SignOut'

class App extends Component {
constructor(){
 super()
        this.state = {
       noteData :{},
            currentNote:null,
            uid:null,
          }
         

}
componentWillMount(){
 auth.onAuthStateChanged(
   (user)=>{
     console.log(user)
     if(user){
       console.log('hahaaha')
       this.authHandler(user)
     }
   }
 )
 
}

signedIn=()=>{
  return(this.state.uid)
}
 signOut = () => {
   auth.signOut().then(()=>this.setState({ uid: null }))
    
  }

authHandler=(userData)=>{
  console.log('asasas')
this.setState({uid: userData.uid},this.syncNotes)

}
syncNotes=()=>{
Base.syncState(`${this.state.uid}/notes`,{context:this,state: 'noteData',})

}

saveNote = (note) => {
  if(!note.id){
    note.id=`note-${Date.now()}`
  }
  const noteData={...this.state.noteData}
  noteData[note.id]=note
  this.setState({noteData})
  this.setState({currentNote: note.id})

}

deleteNote = (note) =>{
   const noteData={...this.state.noteData}

//delete noteData[note.id]
  noteData[note.id]=null
  // noteData[note.id].delete()
   this.setState({noteData})
   
}
chooseCurrentNote = (currentNote)=>{
  this.setState({currentNote})

}

renderMain =()=>{
  return(
    <div>
      <SignOut signOut={this.signOut} />
       <Main notes={this.state.noteData} 
          currentNote={this.state.currentNote} 
          chooseCurrentNote={this.chooseCurrentNote} 
          saveNote={this.saveNote} 
          deleteNote={this.deleteNote}
          />
    </div>
  )
}

  render() {
    return (
      <div className="App">
         {this.signedIn() ? this.renderMain():<SignIn />}
      </div>
    );
  }
}

export default App;
