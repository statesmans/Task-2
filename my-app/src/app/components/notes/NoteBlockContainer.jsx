import { connect } from 'react-redux';
import { addNoteAC, hideArchivedAC, showArchivedAC } from '../../NoteListReducer';
import NoteBlock from './NoteBlock';

let mapStateToProps = (state) => {
  return{showArchivedFlag: state.showArchived}
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNote: () => {
      dispatch(addNoteAC())
    },
    showArchived: (noteId) => {
      dispatch(showArchivedAC(noteId))
    },
    hideArchived: (noteId) => {
      dispatch(hideArchivedAC(noteId))
    }
    
  }
}

export const NoteBlockContainer = connect(mapStateToProps, mapDispatchToProps)(NoteBlock)