import Statistics from './Statistics';
import PropTypes from 'prop-types';
import s from'./Statistics.module.css'

function StatisticList({ items }) {
  return (
    <ul className={ s.statList}>
      {items.map(({id,label, percentage}) => (
        
          <Statistics
            key={id} 
            label={label}
            percentage={percentage}
          />
        
      ))
      }
    </ul>
  )
}
 

StatisticList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
  }))
}

export default StatisticList;