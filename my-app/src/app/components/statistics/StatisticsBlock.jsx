import Header from '../header/Header';
import  { StatisticsContainer }  from './StatisticsContainer';
const StatisticsBlock = (props) => {
  return (<div>
    <Header tableType='statistics'/>
    <StatisticsContainer/>
  </div>)
}

export default StatisticsBlock