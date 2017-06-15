import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component{
  constructor(props){
    super(props)
    this.state={
      note:this.blankNote(),
    }

  }
  blankNote=()=>{
    return{
      id: null,
      title:'',
      body:'',
    }
  }
  handleChanges=(ev)=>{
    const note ={...this.state.note}
    note[ev.target.name]=ev.target.value
    this.setState({note},()=>this.props.saveNote(this.state.note))
    

  }
  handleSubmit=(ev)=>{
     ev.preventDefault()
    this.setState({note: this.blankNote()})
  }


render(){
return(
     <div className="NoteForm">
        <form onSubmit={this.handleSubmit}>
        
          <p>
            <input type="text" name="title" onChange={this.handleChanges} placeholder="Title your note" value={this.state.title} />
          </p>
          <p>
            <textarea name="body" cols="30" rows="10" onChange={this.handleChanges} placeholder="Just start typing..."value={this.state.body}></textarea>
          </p>
           
            <button type="submit" className="button">Save and New</button>
            <button type="submit" className="button">Delete</button>
        </form>
      </div>
)

}
}
export default NoteForm