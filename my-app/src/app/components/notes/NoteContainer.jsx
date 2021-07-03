import { connect } from 'react-redux';
import imagePaths from '../../constants';
import { deleteNoteAC, toggleDisabledAC, updateInputTextAC } from '../../NoteListReducer';
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
    images: imagePaths,
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
    }
  }
}

export const NoteContainer = connect(mapStateToProps, mapDispatchToProps)(NotesList)