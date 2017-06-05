import React from 'react'

const Transaction = (props) => {
  var transactions = props.transactions
  var cat = props.category
  var newArray = []

  for(var i = 0; i < transactions.length; i ++) {
    if (cat === "All") {
      newArray = transactions
    } else if (transactions[i].category.slice(0, cat.length).toLowerCase() === cat.toLowerCase()) {
      newArray.push(transactions[i])
    }
  }

  let posted_at = newArray.map(function(transaction) {
    return (<p>{transaction.posted_at}</p>)
  })

  let description = newArray.map(function(transaction) {
    return (<p>{transaction.description}</p>)
  })

  let category = newArray.map(function(transaction) {
    return (<p>{transaction.category}</p>)
  })

  let amount = newArray.map(function(transaction) {
    return (<p>{transaction.amount}</p>)
  })

  return (
    <tr>
      <td>{posted_at}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  )
}

export default Transaction
