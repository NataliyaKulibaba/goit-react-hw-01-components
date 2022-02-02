import PropTypes from 'prop-types';
// import s from'./TransactionHistory.module.css'

export default function TransactionHistory({type,amount,currency}) {
  return   <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    
 
}

TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}