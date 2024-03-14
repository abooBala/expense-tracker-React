import React from 'react'

const IncomeExpenses = () => {
  return (
    <div>
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>+₦000.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'>-₦000.00</p>
            </div>
        </div>
      
    </div>
  )
}

export default IncomeExpenses
