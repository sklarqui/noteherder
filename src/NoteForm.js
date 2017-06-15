import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component{
constructor(props){
  super(props)
  this.state={
title:'',
form:'',
  }

}
updateTitle(ev){
  this.setState({
title: ev.target.value}
  )
}
updateForm(ev){
  this.setState({
form: ev.target.value}
  )
}
oldNoteClick(ev){
  const state={...this.state}
 const listPiece =ev.currentTarget
 state.title= listPiece.querrySelector('.note-title')
state.title=listPiece.querrySelector('p')

}
deleteNote(ev){
  
this.setState({
form: '',
title: '',
}
  )
}


render(){
return(
     <div className="NoteForm">
        <form>
          <button type="button" className="button" onClick={this.deleteNote.bind(this)}>Delete</button>
          <p>
            <input type="text" name="title" onChange={this.updateTitle.bind(this)} placeholder="Title your note" value={this.state.title} />
          </p>
          <p>
            <textarea name="body" cols="30" rows="10" onChange={this.updateForm.bind(this)} placeholder="Just start typing..."value={this.state.form}></textarea>
          </p>
        </form>
      </div>
)

}
}
export default NoteForm