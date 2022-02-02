import TransactionHistory from './TransactionHistory';
import PropTypes from 'prop-types';
import s from'./TransactionHistory.module.css'

function TransactionHistoryList({ items }) {
  return (
    <table className={s.transactionHistory}>
  <thead>
    <tr className={s.title}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(({type,amount,currency,id}) => (
        
        <TransactionHistory
            key={id}
            type={type}
          amount={amount}
          currency={currency}
          />
        
      ))
      }
    </tbody>
</table>
  )
}
 

TransactionHistoryList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
  }))
}

export default TransactionHistoryList;