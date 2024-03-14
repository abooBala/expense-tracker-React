import React, { useState } from 'react'

const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add new transactions</h3>
      <form>
        <div className='form-control'>
            <label htmlFor='text'>Text</label>
            <input 
                type='text'
                value={text} onChange={(e) => setText(e.target.value)}
                placeholder='Enter text ...'
             />
        </div>
        <div className='form-control'>
            <label htmlFor='amount'>
                Amount <br />
                (negative - expense, positive - income)
            </label>
            <input 
                type='number'
                value={amount} onChange={(e) => setAmount(e.target.value)} 
                placeholder='Enter amount ...' />
            <button className='btn'>Add transaction</button>
        </div>
      </form>
    </>
  )
}

export default AddTransaction