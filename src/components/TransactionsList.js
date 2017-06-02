import React from 'react'

import Transaction from './Transaction' //adding this

const TransactionsList = (props) => { //adding props

console.log('props:', props);

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

        {
          props.transactions.map(
            function(oneTransaction) {
                return <Transaction
                  transactions={oneTransaction}
                />
            })
        }

      </tbody>
    </table>
  )
}

export default TransactionsList
