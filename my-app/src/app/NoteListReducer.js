

const ARCHIVE_NOTE = 'ARCHIVE_NOTE';
const SHOW_ARCHIVE_NOTE = 'SHOW_ARCHIVE_NOTE';
const HIDE_ARCHIVE_NOTE = 'HIDE_ARCHIVE_NOTE';
const UNARCHIVE_NOTE = 'UNARCHIVE_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const ADD_NOTE = 'ADD_NOTE';
const TOGGLE_DISABLED = 'TOGGLE_DISABLED';
const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';


let initialState = {
  lastId: 7,
  showArchived: false,
  categoriesList: ['task', 'quote', 'idea', 'randomThought'],
  listData: [
    {
      id: 3,
      name: 'Shopping list',
      createData: 'April 20, 2021',
      category: 'Task',
      content: 'Tomatoes, Bread',
      schedule: [],
      isArchived: false,
      type: 'task',
      isEditable: false,
    },
    {
      id: 4,
      name: 'Shopping list',
      createData: 'April 27, 2021',
      category: 'Task',
      content: 'Tomatoes, Bread',
      schedule: [],
      isArchived: false,
      type: 'task',
      isEditable: false,
    },
    {
      id: 5,
      name: 'The theory of evolution',
      createData: 'May 05, 2021',
      category: 'Random Thought',
      content: 'Tomatoes, Bread',
      schedule: [],
      isArchived: false,
      type: 'randomThought',
      isEditable: false,
    },
    {
      id: 6,
      name: 'New feature',
      createData: 'May 07, 2021',
      category: 'Idea',
      content: 'Tomatoes, Bread',
      schedule: [],
      isArchived: false,
      type: 'idea',
      isEditable: false,
    },
    {
      id: 7,
      name: 'William Gaddis',
      createData: 'May 15, 2021',
      category: 'Quote',
      content: 'Tomatoes, Bread',
      schedule: [],
      isArchived: false,
      type: 'quote',
      isEditable: false,
    },
    {
      id: 2,
      name: 'Books',
      createData: 'April 20, 2021',
      category: 'Task',
      content: 'Tomatoes, Bread',
      schedule: [],
      isArchived: false,
      type: 'task',
      isEditable: false,
    },
    {
      id: 1,
      name: 'Training',
      createData: 'April 20, 2021',
      category: 'Task',
      content: 'Tomatoes, Bread',
      schedule: [],
      isArchived: true,
      type: 'task',
      isEditable: false,
    },
  ]
};

const NoteListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARCHIVE_NOTE: {
      const notesList = state.listData.map((el) => {
        if (el.id === action.noteId) {
          return { ...el, isArchived: true };
        }
        return el;
      });
      state.listData = [...notesList];
      
      break;
    }
    case UNARCHIVE_NOTE: {
      const notesList = state.listData.map((el) => {
        if (el.id === action.noteId) {
          return { ...el, isArchived: false };
        }
        return el;
      });
      state.listData = [...notesList];
      
      break;
    }
    
    case SHOW_ARCHIVE_NOTE: {
      state.showArchived = true;
      
      break;
    }
    case HIDE_ARCHIVE_NOTE: {
      state.showArchived = false;
      
      break;
    }
    case TOGGLE_DISABLED: {
      return {...state, listData: state.listData.map( listItem => {
        if(listItem.id === action.noteId) {
          let disabledFlag = listItem.isEditable ? false : true;
          return {...listItem, isEditable: disabledFlag}
        }
        return listItem
      })}
    }
    case UPDATE_INPUT_TEXT: {
     

      return{...state, listData: state.listData.map((el) => {
        if (el.id === action.noteId) {
          if (action.category === 'schedule' && el.schedule.length <= 1) {
            return {...el, schedule: [...el.schedule, action.editedValue]}
          } else if (action.category === 'schedule') {
            return {...el, schedule: action.editedValue}
          }
          if(action.category === 'category') {
            
          }
          return { ...el, [action.category]: action.editedValue };
        }
        return el;
      })}
    }
    case DELETE_NOTE: {
      return {...state, listData: state.listData.filter((el) => el.id !== action.noteId)};
    }
    case ADD_NOTE: {
      state = {
        ...state,
        lastId: state.lastId + 1,
        listData: [...state.listData, action.newNote],
      };
      
      break;
    }
    default: {
      return state
    }
  }
};
/* 
export const reRenderNotes = () => {
  renderNoteList(state.listData, imagePaths);
};

export const getArchivedFlag = () => state.showArchived;

export const unArchiveNote = (noteId) => {
  editNoteReducer({ type: UNARCHIVE_NOTE, noteId });
};

export const archiveNote = (noteId) => {
  editNoteReducer({ type: ARCHIVE_NOTE, noteId });
};

export const getLastId = () => state.lastId;

export const getCategoriesList = () => state.categoriesList;

export const getInitialValues = () => (state.listData);
 */

export const deleteNoteAC = (noteId) => {
  return {type: DELETE_NOTE, noteId: noteId}
} 

export const toggleDisabledAC = (noteId) => {
  return {type: TOGGLE_DISABLED, noteId: noteId}
} 

export const updateInputTextAC = (editedValue, category, noteId) => {
  return {type: UPDATE_INPUT_TEXT, 
          noteId: noteId,
          category: category,
          editedValue: editedValue
          }
}

export default NoteListReducer