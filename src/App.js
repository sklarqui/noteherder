import React, { Component } from 'react';

import './App.css';
import Main from './Main'

class App extends Component {
constructor(){
 super()
        this.state = {
            noteData: {'note-1':{title:'  Citizens of distant epochs',note:' Sea of Tranquility the ash of stellar alchemy vastness is bearable only through love bits of moving fluff are creatures of the cosmos, consciousness a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are soflty dancing tingling of the spine, concept of the number one brain is the seed of intelligence are creatures of the cosmos?'},
'note-2':{title:'Preserve and cherish that pale blue dot',note:" network of wormholes a billion trillion the only home we've ever known light years dream of the mind's eye. Intelligent beings!"},
'note-3':{title:"Laws of physics",note:"  Cambrian explosion radio telescope, circumnavigated citizens of distant epochs brain is the seed of intelligence two ghostly white figures in coveralls and helmets are soflty dancing galaxies inconspicuous motes of rock and gas"},
            },
          }

}


  render() {
    return (
      <div className="App">
          <Main notes={this.state.noteData}/>
      </div>
    );
  }
}

export default App;
