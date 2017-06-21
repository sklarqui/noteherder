import React from 'react'
import './Sidebar.css'
import quill from './quill.svg'
import newHover from './new-hover.png'
import but from './new.png'
import SignOut from './SignOut'

const Sidebar = (props) => {
const addNew=()=>{
  props.addNewNote()
}
return(
<div className="Sidebar">
<nav className="Nav">
        <div className="logo">
          <img src={quill} alt="Noteherder" />
        </div>
        <button className="new-note" onClick={addNew}>
          <img src={newHover} alt="New note" />
          <img className="outline" src={but} alt="New note" />
        </button>
          <SignOut signOut={props.signOut} />
      </nav>
</div>
)
}
export default Sidebar