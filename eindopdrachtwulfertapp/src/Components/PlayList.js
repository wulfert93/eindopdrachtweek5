import React from 'react';
import SongViewer from './SongViewer';
import SongAdder from './SongAdder';

function PlayList(props) {
    return (
      <div>
        <SongViewer/>
        <SongAdder/>
      </div>
    );
  }
  
  export default PlayList;