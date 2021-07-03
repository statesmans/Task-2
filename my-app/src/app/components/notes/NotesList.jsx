import React from "react";
import ListItem from "../listItem/ListItem";

const NotesList = (props) => {
  return (<React.Fragment>
            {props.filteredListData
                  .map(listItem => <ListItem  listType="notes"
                                              id={listItem.id}
                                              createData={listItem.createData}
                                              category={listItem.category}
                                              content={listItem.content}
                                              schedule={listItem.schedule}
                                              deleteNote={props.deleteNote}
                                              toggleDisabled={props.toggleDisabled}
                                              updateInputText={props.updateInputText}

                                              name={listItem.name}
                                              key={listItem.id}
                                              disabled={listItem.isEditable ? false : true}/>

            )}
          </React.Fragment>
         )
}

export default NotesList