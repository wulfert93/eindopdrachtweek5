import React from 'react';
import SongViewer from './Songviewer';
import SongAdder from './SongAdder';

function PlayList() {
    return (
      <div>
        <SongViewer/>
        <SongAdder/>
      </div>
    );
  }
  
  export default PlayList;