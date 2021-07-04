import React from 'react';
import { connect } from 'react-redux';
import StatisticsList from './StatisticsList';
import ListItem from '../listItem/ListItem'


let mapStateToProps = (state) => {
  const computeCategoryStatus = () => {
    const result = state.listData.reduce((acc, curr) => {
      
      if (acc[curr.category] === undefined) {
        acc[curr.category] = {
          active: 0,
          archive: 0
        }
      }

      if (curr.isArchived === true) {
        acc[curr.category] = {
          ...acc[curr.category], 
          archive: acc[curr.category].archive + 1
        }
      } else if(curr.isArchived === false){
        acc[curr.category] = {
          ...acc[curr.category], 
          active: acc[curr.category].active + 1
        }
      } 
      return acc
    }, {})
    return result
  }

  const generateCategoriesList = () => {
    const computedCategories = computeCategoryStatus();
    let categoriesList = [];
    let count = 0;
    for (let category in computedCategories) {
        categoriesList.push(<ListItem listType='categories'
                                    active={computedCategories[category].active}
                                    archive={computedCategories[category].archive}
                                    type={state.listData.filter(el => el.category === category)[0].type}
                                    name={category}
                                    key={count}/>
                                    )
      count++
    }
    return categoriesList
  }

  return ({
    statisticList: generateCategoriesList(),

  })
}



export const StatisticsContainer = connect(mapStateToProps, {})(StatisticsList)