import React from 'react'





class MiniNote extends React.Component{
    constructor(){
        super()
        this.state = {
            noteData:[{title:'  Citizens of distant epochs',note:' Sea of Tranquility the ash of stellar alchemy vastness is bearable only through love bits of moving fluff are creatures of the cosmos, consciousness a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are soflty dancing tingling of the spine, concept of the number one brain is the seed of intelligence are creatures of the cosmos?'},
{title:'Preserve and cherish that pale blue dot',note:" network of wormholes a billion trillion the only home we've ever known light years dream of the mind's eye. Intelligent beings!"},
{title:"Laws of physics",note:"  Cambrian explosion radio telescope, circumnavigated citizens of distant epochs brain is the seed of intelligence two ghostly white figures in coveralls and helmets are soflty dancing galaxies inconspicuous motes of rock and gas"},
],
        }
    }
    newMiniNote(ev){
const state=[...this.state]
state.push({title:"", note:""})
console.log('ja')
    }

render(){
return(

<ul id="notes">
    {this.state.noteData.map((note,i)=><NoteMaker key={i} note={note}/>)}
</ul>
)


}

}
function NoteMaker(props){
return(
<li onClick="">
              <div className="note">
                <div className="note-title">{props.note.title} </div>
                <div className="note-body">
                  <p>
                   {props.note.note}
                  </p>
                </div>
              </div>
            </li>
)

}

export default MiniNote