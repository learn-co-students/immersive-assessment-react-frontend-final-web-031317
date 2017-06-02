import React from 'react'

import Transaction from './Transaction' //adding this

const TransactionsList = (props) => { //adding props

console.log('TransactionsList props:', props);

// Figure out how to render only the transactions
// in which the category matches the active category,
// or if the active category is 'All', render everything.

//condition ? expr1 : expr2
//if condition is true ? return that thing : else return this thing


  let filteredResults = props.transactions.filter( (oneTransaction) => {
    console.log('oneTransaction.category:', props.activeCategory);
    if (props.activeCategory === "All") {
      return props.transactions
    } else {
      return oneTransaction.category === props.activeCategory
    }
  })

  let finalResults = filteredResults.map(function(oneTransaction) {
    console.log('oneTransaction:', oneTransaction);
        return <Transaction
          transactions={oneTransaction}
          // activeCategory={props.activeCategory}
        />
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


        {finalResults}

      </tbody>
    </table>
  )
}

export default TransactionsList
