import React from 'react'
import NoteForm from './NoteForm'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import './Main.css'
const Main = (props)=>{
    return(
        <div className="Main">
            <Sidebar />
         <NoteList chooseCurrentNote={props.chooseCurrentNote}  notes={props.notes} />
          <NoteForm saveNote={props.saveNote} deleteNote={props.deleteNote} currentNote={props.currentNote}/>
          
        </div>
    )
}
export default Main