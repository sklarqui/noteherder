import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css';
import Main from './Main'
import Base,{auth} from './Base'
import SignIn from './SignIn'



class App extends Component {
constructor(){
 super()
        this.state = {
       noteData :{},
            currentNote:this.blankNote(),
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
addNewNote=()=>{
   this.setState({currentNote:null})
}

signedIn=()=>{
  return(this.state.uid)
}
 signOut = () => {
   auth.signOut().then(()=>{
      Base.removeBinding(this.ref)
     this.setState({ noteData:{},currentNote:this.blankNote(),uid: null })})
    
  }

authHandler=(userData)=>{
  console.log('asasas')
this.setState({uid: userData.uid},this.syncNotes)

}
syncNotes=()=>{
this.ref =Base.syncState(`${this.state.uid}/notes`,{context:this,state: 'noteData',})
}

saveNote = (note) => {
  if(!note.id){
    note.id=`note-${Date.now()}`

  }console.log(note)
  const noteData={...this.state.noteData}
  noteData[note.id]=note
  this.setState({noteData,currentNote:note})
  

}

deleteNote = (note) =>{
   const noteData={...this.state.noteData}

//delete noteData[note.id]
  noteData[note.id]=null
  // noteData[note.id].delete()
   this.setState({noteData, currentNote:null})
   
}
chooseCurrentNote = (currentNote)=>{
  this.setState({currentNote})

}

 blankNote=()=>{
    return{
      id: null,
      title:'',
      body:'',
    }
  }

renderMain =()=>{
  return(
    
    
       <Main notes={this.state.noteData} 
          currentNote={this.state.currentNote} 
          chooseCurrentNote={this.chooseCurrentNote} 
          saveNote={this.saveNote} 
          deleteNote={this.deleteNote}
          addNewNote={this.addNewNote}
          signOut={this.signOut}
          />
 
  )
}

  render() {
    return (
      <div className="App">
<Switch>

<Route path="/notes" render={()=>(
    <Main notes={this.state.noteData} 
          currentNote={this.state.currentNote} 
          chooseCurrentNote={this.chooseCurrentNote} 
          saveNote={this.saveNote} 
          deleteNote={this.deleteNote}
          addNewNote={this.addNewNote}
          signOut={this.signOut}
          />
)}/>
<Route path="/sign-in" render={()=><SignIn />}/>
<Route render={()=><Redirect to="notes"/>}/>
</Switch>

         {/*{this.signedIn() ? this.renderMain():<SignIn />}*/}
      </div>
    );
  }
}

export default App;
