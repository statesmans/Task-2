
import { connect } from 'react-redux';
import ListItem from '../listItem/ListItem'
import { deleteNoteAC } from '../../NoteListReducer';

let mapStateToProps = (state) => {
  return {}
}

let mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (noteId) => {
      dispatch(deleteNoteAC(noteId))
    }
  }
}

export const StatisticsContainer = connect(mapStateToProps, mapDispatchToProps)(ListItem)