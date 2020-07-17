import React from 'react';

function SongViewerList(props) {
    
    return (
      <div>
        <h2>SongViewerList</h2>
        Title: {props.title}
        <br/>
        Artist: {props.artist}
        <br/>
        Genre: {props.genre}
        <br/>
        Rating: {props.rating}
        <br/>
        <a href={props.link}>Link:</a>
      {/* <SongViewerListItem title={'Sideways'} artist={'KB'} genre={'hiphop'} rating={7} url={'https://www.youtube.com/watch?v=tsk1e9GFD1U'}/>
      <SongViewerListItem title={'Change of Seasons'} artist={'Dream Theater'} genre={'prog rock'} rating={8} url={'https://www.youtube.com/watch?v=mZKrwJzGg0k'}/>
      <SongViewerListItem title={'The conclusion'} artist={'Neal Morse'} genre={'prog rock'} rating={8.5}url={'https://www.youtube.com/watch?v=JSekmwGU5Bg'}/>
      <SongViewerListItem title={"You can't stop me"} artist={'Andy Mineo'} genre={'hiphop'} rating={7}url={'https://www.youtube.com/watch?v=WopyrETP-CU'}/> */}
      </div>
    );
  }
  
  export default SongViewerList;