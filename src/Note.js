import React from 'react'

const Note=(props)=>{
const clickNote=(ev)=>{

props.chooseCurrentNote(props.note)
}

return(
  <a onClick={clickNote}>
    <li key={props.note.id}>
                <div className="note">
                  <div className="note-title">
                     {props.note.title}
                       </div>
                  <div className="note-body">
                    <p>
                    {props.note.body}
                    </p>
                  </div>
                </div>
              </li>
              </a>
)


}
export default Note