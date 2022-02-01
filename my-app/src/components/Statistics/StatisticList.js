import Statistics from './Statistics';
import PropTypes from 'prop-types';

function StatisticList({ items }) {
  return (
    <ul>
      {items.map(({id,label, percentage}) => (
        <li key={id}>
          <Statistics
            label={label}
            percentage={percentage}
          />
        </li>
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