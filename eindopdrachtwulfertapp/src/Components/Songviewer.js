import React from 'react';
import { Component } from 'react';
import SongViewerList from './SongViewerList';
import SongViewerListItem from './SongViewerListItem';

class Songviewer extends Component {

    constructor() {
      super()
      this.state = 
      {
        songs: [
          {
            id:1,
            title: 'Sideways',
            artist: 'KB',
            genre: 'hiphop',
            rating: 7,
            link: 'https://www.youtube.com/watch?v=tsk1e9GFD1U'
          },
          {
            id:2,
            title: 'Change of Seasons',
            artist: 'Dream Theater',
            genre: 'prog-rock',
            rating: 8,
            link: 'https://www.youtube.com/watch?v=mZKrwJzGg0k'},
          { 
            id:3,
            title: 'The Conclusion',
            artist: 'Neal Morse',
            genre: 'prog-rock',
            rating: 8.5,
            link: 'https://www.youtube.com/watch?v=JSekmwGU5Bg'},
          {
            id:4,
            title: "You can't stop me",
            artist: 'Andy Mineo',
            genre: 'hiphop',
            rating: 7,
            link: 'https://www.youtube.com/watch?v=WopyrETP-CU'
          }
        ]
      }
      
    }
  
    // addSong = (song) => {
    //           // doe iets om de state aan te passen
    // }
    render() {
      
      return (

        <div>
          <h2>List that shows songs</h2>
          <ul>
          {this.state.songs.map((item) => 
          (
            <SongViewerList title={item.title} artist={item.artist} genre={item.genre} rating={item.rating} link={item.link}/>
            // <li key={item.id}>
            //   Title: {item.title}
            //   <br/>
            //   Artist: {item.artist}
            //   <br/>
            //   Genre: {item.genre}
            //   <br/>
            //   Rating: {item.rating}
            //   <br/>
            //   <a href={item.link}>Link</a>
            // </li>
          ))}
          </ul>
        {/* <SongViewerList songs={this.state.songs}/> */}
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
            {/* <SongViewerList/> */}
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