import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component{
  constructor(props){
    super(props)
   
   let blank =this.blankNote()



     this.state={
       note:blank,
     }
    

this.setState({note:this.props.currentNote}, ()=>this.props.saveNote(this.state.note))
   // this.setState({note:this.props.currentNote})
  }
  changeNote=()=>{

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
    console.log(this.props.currentNote)
     ev.preventDefault()
     const blank=this.blankNote()
    //this.setState({note:this.props.currentNote},()=>this.props.saveNote(blank))

     this.setState({note: this.blankNote()})
  }
  destroyNote=(ev)=>{
  
    this.props.deleteNote(this.state.note)
       this.setState({note: this.blankNote()})
  }
  


render(){
return(
     <div className="NoteForm">
       <button type="submit" className="button" onClick={this.destroyNote}>Delete</button>
        <form onSubmit={this.handleSubmit}>
        
          <p>
            <input type="text" name="title" onChange={this.handleChanges} placeholder="Title your note" value={this.state.note.title} />
          </p>
          <p>
            <textarea name="body" cols="30" rows="10" onChange={this.handleChanges} placeholder="Just start typing..."value={this.state.note.body}></textarea>
          </p>
           
            <button type="submit" className="button">Save and New</button>
            
        </form>
      </div>
)

}
}
export default NoteForm