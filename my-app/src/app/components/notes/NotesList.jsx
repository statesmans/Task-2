import React from "react";
import ListItem from "../listItem/ListItem";
import s from '../Main.module.scss';

const NotesList = (props) => {
  return (<div className={s.notes__list}>
            {props.filteredListData
                  .map(listItem => {
                    return <ListItem  listType="notes"
                                              id={listItem.id}
                                              createData={listItem.createData}
                                              category={listItem.category}
                                              content={listItem.content}
                                              schedule={listItem.schedule}
                                              isArchived={listItem.isArchived}
                                              type={listItem.type}
                                              name={listItem.name}
                                              key={listItem.id}
                                              disabled={listItem.isEditable ? false : true}
                                              deleteNote={props.deleteNote}
                                              toggleDisabled={props.toggleDisabled}
                                              updateInputText={props.updateInputText}
                                              archiveNote={props.archiveNote} 
                                              unArchiveNote={props.unArchiveNote}/>
                  }

            )}
          </div>
         )
}

export default NotesList