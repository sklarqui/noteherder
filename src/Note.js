import React from 'react'

const Note=(props)=>{
return(
    <li key="noteId" onClick="">
                <div className="note">
                  <div className="note-title">
                     {props.note.title}
                       </div>
                  <div className="note-body">
                    <p>
                    {props.note.note}
                    </p>
                  </div>
                </div>
              </li>
)


}
export default Note