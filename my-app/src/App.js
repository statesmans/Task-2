import React from 'react';
import { NoteBlockContainer } from './app/components/notes/NoteBlockContainer';
import StatisticsBlock from './app/components/statistics/StatisticsBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NoteBlockContainer/>
        <StatisticsBlock/>
      </header>
    </div>
  );
}

export default App;
