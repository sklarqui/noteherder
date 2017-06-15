import React from 'react'

const Note=(props)=>{
const clickNote=(ev)=>{

props.chooseCurrentNote(props.note.id)
}

return(
    <li key={props.note.id} onClick={clickNote}>
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
)


}
export default Note