import TransactionHistory from './TransactionHistory';
import PropTypes from 'prop-types';

function TransactionHistoryList({ items }) {
  return (
    <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(({type,amount,currency,id}) => (
        <tr key={id}>
          <TransactionHistory
            type={type}
          amount={amount}
          currency={currency}
          />
        </tr>
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