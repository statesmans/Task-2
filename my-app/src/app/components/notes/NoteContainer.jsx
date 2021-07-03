import React from 'react';
import { connect } from 'react-redux';
import imagePaths from '../../constants';
import { deleteNoteAC } from '../../NoteListReducer';
import ListItem from '../listItem/ListItem'
import NotesList from './NotesList';

class NoteContainer extends React.Component {
constructor(props) {
  super(props);
  this.notesList = [];
}
componentWillMount() {
  console.log(this.props)
   this.notesList = this.props.filteredListData.map(listItem => {
     console.log() 
    return <ListItem  listType="notes"
                      id={listItem.id}
                      createData={listItem.createData}
                      category={listItem.category}
                      content={listItem.content}
                      schedule={listItem.schedule}
                      deleteNote={this.props.deleteNote}
                      name={listItem.name}
                      key={listItem.id}
                      disabled={listItem.isEditable ? false : true}/>
  })
}

  render() {
     return(<NotesList images={this.props.images}
                        notesList={this.notesList}/>)
  }
}

let mapStateToProps = (state) => {
  console.log(state)
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
    images: imagePaths
  })
}

let mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (noteId) => {
      dispatch(deleteNoteAC(noteId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer)