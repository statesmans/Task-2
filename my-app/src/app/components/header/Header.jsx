import s from '../Main.module.scss';
import ArchiveIcon from '../icons/ArchiveIcon';
import DeleteIcon from '../icons/DeleteIcon';

const ListHeader = (props) => {
  console.log(props.tableType)
  return (
    <div>
      { props.tableType === 'notes' ? <div className={s.table__header}>
                                                <div className={s.notes__header}>
                                                  <div className={s.header__item}>Name</div>
                                                  <div className={s.header__item}>Created</div>
                                                  <div className={s.header__item}>Category</div>
                                                  <div className={s.header__item}>Content</div>
                                                  <div className={s.header__item}>Dates</div>
                                                </div>
                                                <div className={ s.header__listControls }>
                                                    <ArchiveIcon/>
                                                    <DeleteIcon/>
                                                </div>
                                            </div> 
                                            : <div className={s.statistics__header}>
                                              <div className={s.header__item}>Note category</div>
                                              <div className={s.header__item}>Active</div>
                                              <div className={s.header__item}>Archived</div>
                                            </div>} 
    </div>
  )
}

export default ListHeader