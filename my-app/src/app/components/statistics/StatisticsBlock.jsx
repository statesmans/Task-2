import Header from '../header/Header';
import  StatisticsContainer  from './StatisticsContainer';
const StatisticsBlock = (props) => {
  return (<div>
    <Header tableType='statisticList'/>
    <StatisticsContainer/>
  </div>)
}

export default StatisticsBlock