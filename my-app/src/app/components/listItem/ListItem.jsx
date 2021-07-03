import React from 'react';
import s from '../Main.module.scss';
import EditIcon from '../icons/EditIcon';
import DeleteIcon from '../icons/DeleteIcon';
import ArchiveIcon from '../icons/ArchiveIcon'

const listItem = (props) => {

  let itemClass = '';
  if (props.listType === 'categories') {
    itemClass = s.category__item
  } else {
    itemClass = s.note__item
  }



  return (
    <div className={ itemClass + ' ' + s.list__item }>
      <div className={ s.item__name }>
        <img src='../../images/archive .svg' alt={ props.category }/>
        { props.listType === 'categories' ? <p className={s.itemNameText}>{props.name}</p>
                                          : <input className={s.note__text + ' ' + s.itemNameInput }  type="text" value={props.name} disabled={props.disabled}/>}
      </div>
      { props.listType === 'notes' ? 
        <React.Fragment>
        <input className={s.note__text + ' ' + s.text__createdDate} type="text" value={props.createData} disabled={props.disabled}/>
        <input className={s.note__text + ' ' + s.text__category} type="text" value={props.category} disabled={props.disabled}/>
        <input className={s.note__text + ' ' + s.text__content} type="text" value={props.content} disabled={props.disabled}/>
        { props.schedule.length === 0 ? 
            <div className='controls__schedule schedule'>
              <input className="note__text text__schedule" type="date" value="" disabled={props.disabled}/>
            </div>
            : props.schedule.length === 1 ? 
            <div className='controls__schedule schedule'>
              <p className="schedule__previous">${props.schedule[0]}</p>
              <input className="note__text text__schedule" type="date" value="" disabled={props.disabled}/>
            </div>
            : props.schedule.length === 2 ?
            <div className='controls__schedule schedule'>
              <p className="schedule__previous">${props.schedule[0]},</p>
              <p className="schedule__previous">${props.schedule[1]}</p>
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

      { props.listType === 'notes' ? 
        <div className={s.notes__controls}>
          <EditIcon/>
          <ArchiveIcon/>
          <DeleteIcon deleteNote={props.deleteNote} noteId={props.id}/>
        </div>
        : null
      }
    </div>
  )
}

export default listItem