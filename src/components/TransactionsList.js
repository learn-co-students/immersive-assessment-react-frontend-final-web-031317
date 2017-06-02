import React from 'react'
import Transaction from './Transaction.js'

const TransactionsList = (props) => {

  let filteredTrans = props.transactions.filter(transaction => {
      return props.activeCategory === "All" ? transaction : transaction.category === props.activeCategory
  })

  let filteredTransactionList = filteredTrans.map( (transaction, index) => {
    return <Transaction key={index} transaction={transaction}/>
  })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>
        {filteredTransactionList}
      </tbody>
    </table>
  )
}

export default TransactionsList
