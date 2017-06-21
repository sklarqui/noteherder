import React from 'react'
import {Route, Switch} from 'react-router-dom'
import NoteForm from './NoteForm'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import './Main.css'
const Main = (props)=>{
    return(
        <div className="Main">
            <Sidebar addNewNote={props.addNewNote} signOut={props.signOut} />
         <NoteList chooseCurrentNote={props.chooseCurrentNote}  notes={props.notes} />
       
       <Switch>
           <Route path="/notes/:id" render={(navProps)=>(
<NoteForm saveNote={props.saveNote}  deleteNote={props.deleteNote} currentNote={props.currentNote}/>
           )}/>
       </Switch>
          
          
        </div>
    )
}
export default Main