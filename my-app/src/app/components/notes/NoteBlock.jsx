import React from "react";
import s from '../Main.module.scss'
import Header from "../header/Header";
import { NoteListContainer } from "./NoteListContainer";

const NoteBlock = (props) => {
  return (
    <div className={s.notes__block}>
      <Header tableType='notes'/>
      <NoteListContainer/>
      <div >
          <button className={s.controls__addBtn} onClick={() => props.addNote()}>Add note</button>
          <button className={s.controls__toggleArchivedBtn}  
                  onClick={() => props.showArchivedFlag === true ? props.hideArchived() : props.showArchived()}>
            {props.showArchivedFlag === true ? 'Hide archived' :  'Show archived'}
          </button>
      </div>
    </div>
  )
}

export default NoteBlock
