import React from 'react'
import './NoteList.css'
import MiniNote from './MiniNote'
const NoteList = () =>{
    return(
       <div className="NoteList">
        <h3>Notes</h3>
        <MiniNote />
      </div>
    )
}
export default NoteList