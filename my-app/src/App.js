import React from 'react';
import { NoteBlockContainer } from './app/components/notes/NoteBlockContainer';
import s from './app/components/Main.module.scss';
import StatisticsBlock from './app/components/statistics/StatisticsBlock';

function App() {
  return (
    <div className={s.App}>
        <NoteBlockContainer/>
        <StatisticsBlock/>
    </div>
  );
}

export default App;
