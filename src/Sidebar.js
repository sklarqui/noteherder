import React, {Component} from 'react'
import './SideBar.css'
import quill from './quill.svg'
const Sidebar = () => {
return(
<div className="Sidebar">
<nav className="Nav">
        <div className="logo">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/quill.svg" alt="Noteherder" />
        </div>
        <button className="new-note">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new-hover.png" alt="New note" />
          <img className="outline" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new.png" alt="New note" />
        </button>
      </nav>
</div>
)
}
export default Sidebar