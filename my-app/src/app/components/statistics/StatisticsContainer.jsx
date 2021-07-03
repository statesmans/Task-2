import React from 'react';
import { connect } from 'react-redux';
import StatisticsList from './StatisticsList';
import imagePaths from '../../constants';
import ListItem from '../listItem/ListItem'


let mapStateToProps = (state) => {
  const getUniqCategories = () => {
    // Get the all categories and filter for take only uniq categories
    let categories = Array.from( new Set(state.listData.map(el => el.category)))
    return categories
  }
  const computeCategories = () => {
    let result = {}
    let categories = getUniqCategories()
    let archivedNoteCount = 0;
    let activeNoteCount = 0;

    categories.forEach((category) => {
      state.listData.forEach((listEl) => {
        if (listEl.category === category) {
          if (listEl.isArchived) {
            archivedNoteCount++;
          } else {
            activeNoteCount++;
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


  const generateCategoriesList = () => {
    const computedCategories = computeCategories();
    let categoriesList = [];
    let count = 0;
    for (let category in computedCategories) {
        categoriesList.push(<ListItem listType='categories'
                                    active={computedCategories[category].active}
                                    archive={computedCategories[category].archive}
                                    type={category}
                                    name={category}
                                    images={imagePaths}
                                    key={count}/>)
      count++
    }
    return categoriesList
  }

  return ({
    statisticList: generateCategoriesList(),
    images: imagePaths
  })
}



export const StatisticsContainer = connect(mapStateToProps, {})(StatisticsList)