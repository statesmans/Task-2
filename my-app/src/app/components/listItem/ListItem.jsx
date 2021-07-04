import React, { useEffect } from 'react';
import s from '../Main.module.scss';
import EditIcon from '../icons/EditIcon';
import DeleteIcon from '../icons/DeleteIcon';
import ArchiveIcon from '../icons/ArchiveIcon'
import UnArchiveIcon from '../icons/UnArchiveIcon';
import getIcon from '../../constants'
const ListItem = (props) => {
  let noteNameInput = React.createRef();
  let createDataInput = React.createRef();
  let categoryInput = React.createRef();
  let contentInput = React.createRef();
  let scheduleInput = React.createRef();
  let icon = getIcon(props.type);

  useEffect(() => {
    if(props.listType === 'notes') {
      noteNameInput.current.value = props.name;
      createDataInput.current.value = props.createData;
      categoryInput.current.value = props.category;
      contentInput.current.value = props.content;
      if(scheduleInput.current) {
        scheduleInput.current.value = props.schedule;
      }
    }
  });

  let itemClasses = '';
  if (props.listType === 'categories') {
    itemClasses = s.category__item;
  } else if(props.listType === 'notes'){
    itemClasses = s.note__item;
  }
  

  function updateText(e, inputCategory, ref) {
    if (e.keyCode === 13) {
        props.toggleDisabled(props.id);
        props.updateInputText(ref.current.value, inputCategory, props.id);
    } else if(!e.keyCode) { 
      props.updateInputText(ref.current.value, inputCategory, props.id);
    }
  }

  return (
    <div className={props.isArchived === true ? `${s.archived} ${s.list__item} ${itemClasses}` : `${s.list__item} ${itemClasses}` }>
      <div className={ s.item__name }>
        <img src={icon} alt={ props.category }/>
        { props.listType === 'categories' ? <p className={s.itemNameText}>{props.name}</p>
                                          : <input className={s.note__text + ' ' + s.itemNameInput } ref={noteNameInput} onKeyUp={(e) => updateText(e, 'name', noteNameInput)} type="text" disabled={props.disabled}/>}
      </div>
      { props.listType === 'notes' ? 
        <React.Fragment>
        <input className={s.note__text + ' ' + s.text__createdDate} ref={createDataInput} onKeyUp={(e) => updateText(e, 'createData', createDataInput)} type="text" disabled={props.disabled}/>
        <input className={s.note__text + ' ' + s.text__category}  ref={categoryInput} onKeyUp={(e) => updateText(e, 'category', categoryInput)} type="text" disabled={props.disabled}/>
        <input className={s.note__text + ' ' + s.text__content}  ref={contentInput} onKeyUp={(e) => updateText(e, 'content', contentInput)} type="text" disabled={props.disabled}/>
        { props.schedule.length === 0 ? 
            <div className={s.controls__schedule + ' ' + s.schedule}>
              <input className={s.note__text + ' ' + s.text__schedule} ref={scheduleInput} onKeyUp={(e) => updateText(e, 'schedule', scheduleInput)} onBlur={(e) => updateText(e, 'schedule', scheduleInput)} type="date" disabled={props.disabled}/>
            </div>
            : props.schedule.length === 1 ? 
            <div className={s.controls__schedule + ' ' + s.schedule}>
              <p className={s.schedule__previous}>{props.schedule[0]}</p>
              <input className={s.note__text + ' ' + s.text__schedule} ref={scheduleInput} onKeyUp={(e) => updateText(e, 'schedule', scheduleInput)}  onBlur={(e) => updateText(e, 'schedule', scheduleInput)} type="date" disabled={props.disabled}/>
            </div>
            : props.schedule.length === 2 ?
            <div className={s.controls__schedule + ' ' + s.schedule}>
              <p className={s.schedule__previous}>{props.schedule[0]}, </p>
              <p className={s.schedule__previous}>{props.schedule[1]}</p>
            </div>
            : null
          }  
        </React.Fragment>
        : null
      }
      { props.listType === 'categories' ? 
        <React.Fragment>
          <p className={ s.categories__text }>{props.active}</p>
          <p className={ s.categories__text }>{props.archive}</p>
        </React.Fragment>  
        : null
      }
      <div className={s.listItem__controls}>
        {props.listType === 'notes' ? 
          <div className={s.notes__controls}>
            <EditIcon toggleDisabled={props.toggleDisabled} noteId={props.id}/>
            {props.isArchived ? <UnArchiveIcon unArchiveNote={props.unArchiveNote} id={props.id}/>: <ArchiveIcon archiveNote={props.archiveNote} id={props.id}/>}
            <DeleteIcon deleteNote={props.deleteNote} noteId={props.id}/>
          </div>
          : null
        }
      </div>
    </div>
  )
}

export default ListItem