import React from 'react';
import { Component } from 'react';
import SongViewerList from './SongViewerList';

class Songviewer extends Component {

    constructor() {
      super()
      this.state = 
      {
        songs: []
      }
      
    }
  
    // addSong = (song) => {
    //           // doe iets om de state aan te passen
    // }
  
    render() {
      return (
        <div>
            {/* <SongForm addSong={this.addSong}/>
                      <table style="width:100%">
                  <tr className="song-header">  
                      <th className="song-row__item">Song</th>
                      <th className="song-row__item">Artist</th>
                      <th className="song-row__item">Genre</th>
                      <th className="song-row__item">Rating</th>
                    </tr>
                  </table> */}
            {/* <SongList songs={this.state.songs}/> */}
            <SongViewerList/>
        </div>
      );
    }
  }
  
  export default Songviewer;
// function Songviewer() {
//     return (
//       <div>
//         <SongList/>
//       </div>
//     );
//   }
  
//   export default Songviewer;