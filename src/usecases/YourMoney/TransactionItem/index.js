import './index.css'

const TransactionItems = ({expenses, onDelete}) => {
  const deleteHandler = id => {
    onDelete(id)
  }
  return (
    <div>
      <h1>History</h1>
      <table className="mny_mngr_table">
        <thead>
          <tr>
            <th>
              <p>Title</p>
            </th>
            <th>
              <p>Amount</p>
            </th>
            <th>
              <p>Type</p>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(exp => (
            <tr key={exp.id}>
              <td>{exp.title}</td>
              <td>{exp.amount}</td>

              <td>{exp.type}</td>
              <td>
                <button
                  data-testid="delete"
                  onClick={() => deleteHandler(exp.id)}
                  className="expenses_delete"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                    alt="delete"
                    className="delete_img"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionItems
