import { connect } from 'react-redux';
import { archiveNoteAC, deleteNoteAC, toggleDisabledAC, unArchiveNoteAC, updateInputTextAC } from '../../NoteListReducer';
import NotesList from './NotesList';


let mapStateToProps = (state) => {
  let filteredListData = []

  state.listData.forEach((listItem) => {
    if (listItem.isArchived === false && state.showArchived === false) {
      filteredListData.push(listItem)
    } else if (state.showArchived === true) {
      filteredListData.push(listItem)
    }
  });


  return ({
    filteredListData: filteredListData,
  })
}

let mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (noteId) => {
      dispatch(deleteNoteAC(noteId))
    },
    toggleDisabled: (noteId) => {
      dispatch(toggleDisabledAC(noteId))
    },
    updateInputText: (editedValue, category, noteId) => {
      dispatch(updateInputTextAC(editedValue, category, noteId))
    },
    archiveNote: (noteId) => {
      dispatch(archiveNoteAC(noteId))
    },
    unArchiveNote: (noteId) => {
      dispatch(unArchiveNoteAC(noteId))
    }
  }
}

export const NoteListContainer = connect(mapStateToProps, mapDispatchToProps)(NotesList)