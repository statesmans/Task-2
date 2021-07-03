import React from 'react';
import NoteBlockContainer from './app/components/notes/NoteBlock';
import { StatisticsContainer } from './app/components/statistics/StatisticsContainer';

function App() {
  console.log('render')
  return (
    <div className="App">
      <header className="App-header">
        <NoteBlockContainer />
        <StatisticsContainer/>
      </header>
    </div>
  );
}

export default App;
