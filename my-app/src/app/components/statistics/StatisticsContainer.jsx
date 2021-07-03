import React from 'react';
import { connect } from 'react-redux';
import StatisticsList from './StatisticsList';
import imagePaths from '../../constants';
import ListItem from '../listItem/ListItem'


let mapStateToProps = (state) => {
  const computeCategories = () => {
    let result = {}
    let archivedNoteCount = 0;
    let activeNoteCount = 0;
      state.categoriesList.forEach((category) => {
        state.listData.forEach((listEl) => {
          if (listEl.type === category) {

            if (listEl.isArchived === true) {
              archivedNoteCount = archivedNoteCount + 1;
            } else {
              activeNoteCount = activeNoteCount + 1;
            }
          }
        })
        result[category] = {
          active: activeNoteCount,
          archive: archivedNoteCount
        }
        activeNoteCount = 0;
        archivedNoteCount = 0;
    })
    return result
  }

  const getCategoryName = (category) => {
    const categoryEl = state.listData.filter(el => el.type === category)
    if(categoryEl.length !== 0) {
      return categoryEl[0].category
    }
    
  }

  const generateCategoriesList = () => {
    const computedCategories = computeCategories();
    let categoriesList = [];
    let count = 0;
    for (let category in computedCategories) {
      const categoryName = getCategoryName(category);
      
      if(categoryName) {
        categoriesList.push(<ListItem listType='categories'
                                    active={computedCategories[category].active}
                                    archive={computedCategories[category].archive}
                                    type={category}
                                    name={categoryName}
                                    images={imagePaths}
                                    key={count}/>)
      count++
      }
    }
    
    return categoriesList
  }

  return ({
    statisticList: generateCategoriesList(),
    images: imagePaths
  })
}

let mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: () => {
      console.log('hello')
    }
  }
}

export const StatisticsContainer = connect(mapStateToProps, mapDispatchToProps)(StatisticsList)