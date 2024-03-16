import React from 'react'

const Transactions = ({ transaction }) => {

    const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <>
      <li className={transaction.amount > 0 ? 'plus': 'minus'}>
            {transaction.text}
            <span>{ sign }₦{ Math.abs(transaction.amount) }</span>
            <button className='delete-btn'>X</button>
        </li>
    </>
  )
}

export default Transactions
