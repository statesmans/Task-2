import React from 'react';
import NoteBlock from './app/components/notes/NoteBlock';
import StatisticsBlock from './app/components/statistics/StatisticsBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NoteBlock />
        <StatisticsBlock/>
      </header>
    </div>
  );
}

export default App;
