

const ARCHIVE_NOTE = 'ARCHIVE_NOTE';
const UNARCHIVE_NOTE = 'UNARCHIVE_NOTE';
const SHOW_ARCHIVE_NOTE = 'SHOW_ARCHIVE_NOTE';
const HIDE_ARCHIVE_NOTE = 'HIDE_ARCHIVE_NOTE';
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
      return {...state, listData: state.listData.map((el) => {
        if (el.id === action.noteId) {
          return { ...el, isArchived: true };
        }
        return el;
      })}
    }
    case UNARCHIVE_NOTE: {
     return {...state, listData: state.listData.map((el) => {
      if (el.id === action.noteId) {
        return { ...el, isArchived: false };
      }
      return el;
      })}
    }
    
    case SHOW_ARCHIVE_NOTE: {
      return {...state, showArchived: true}
    }
    case HIDE_ARCHIVE_NOTE: {
      return {...state, showArchived: false}
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
            return { 
                ...el, 
                category: action.editedValue, 
                // transform category name to camelCase with removing spaces 
                type: (action.editedValue[0].toLowerCase() + action.editedValue.slice(1)).replace(' ', '')
              }
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
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const date = new Date();
      const createData = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
      
      let newNote = {
        id: state.lastId + 1,
        name: 'Name',
        createData: createData,
        category: 'Random Thought',
        content: '',
        schedule: [],
        isArchived: false,
        type: 'randomThought',
        isEditable: false,
      }
      return {
        ...state,
        lastId: newNote.id,
        listData: [...state.listData, newNote],
      };
    }
    default: {
      return state
    }
  }
};
/* 
export const getLastId = () => state.lastId;
 */

export const deleteNoteAC = (noteId) => {
  return {type: DELETE_NOTE, noteId}
} 

export const toggleDisabledAC = (noteId) => {
  return {type: TOGGLE_DISABLED, noteId}
} 

export const updateInputTextAC = (editedValue, category, noteId) => {
  return {type: UPDATE_INPUT_TEXT, 
          noteId,
          category,
          editedValue
          }
}

export const archiveNoteAC = (noteId) => {
  return {type: ARCHIVE_NOTE, noteId}
}

export const unArchiveNoteAC = (noteId) => {
  return {type: UNARCHIVE_NOTE, noteId}
}

export const showArchivedAC = () => {
  return {type: SHOW_ARCHIVE_NOTE}
}

export const hideArchivedAC = () => {
  return {type: HIDE_ARCHIVE_NOTE}
}

export const addNoteAC = () => {
  return {type: ADD_NOTE}
}

export default NoteListReducer