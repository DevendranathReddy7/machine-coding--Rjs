import './index.css'

const MoneyDetails = props => {
  const {bal, inc, exp} = props
  return (
    <div className="expenseTypes__container">
      <div className="expense__types" style={{backgroundColor: '#ecfccb'}}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="expenseImg"
        />
        <span>
          Your Balance
          <p className="rs" data-testid="balanceAmount">
            Rs: {bal}
          </p>
        </span>
      </div>

      <div className="expense__types" style={{backgroundColor: '#cffafe'}}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="Income"
          className="expenseImg"
        />
        <span>
          Your Income
          <p className="rs" data-testid="expensesAmount">
            Rs: {inc}
          </p>{' '}
        </span>
      </div>

      <div className="expense__types" style={{backgroundColor: '#ede9fe'}}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="expenseImg"
        />
        <span>
          Your Expenses
          <p className="rs" data-testid="incomeAmount">
            Rs: {exp}
          </p>{' '}
        </span>
      </div>
    </div>
  )
}

export default MoneyDetails
