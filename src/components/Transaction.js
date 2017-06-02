import React from 'react'

const Transaction = (props) => {
  console.log('Transaction props: ', props);
  console.log('Transaction activeCategory: ', props.activeCategory);

  // Figure out how to render only the transactions
  // in which the category matches the active category,
  // or if the active category is 'All', render everything.

  //condition ? expr1 : expr2
  //if condition is true ? return that thing : else return this thing


  //tried filtering here, needed to filter on TransactionsList

  return (
    <tr>
      {/* <td>{(props.activeCategory === props.transactions.category) ? props.transactions.posted_at : props.transactions.posted_at}</td>
      <td>{(props.activeCategory === props.transactions.category) ? props.transactions.description : props.transactions.description}</td>
      <td>{(props.activeCategory === props.transactions.category) ? props.transactions.category : props.transactions.category}</td>
      <td>{(props.activeCategory === props.transactions.category) ? props.transactions.amount : props.transactions.amount}</td> */}
      <td>{props.transactions.posted_at}</td>
      <td>{props.transactions.description}</td>
      <td>{props.transactions.category}</td>
      <td>{props.transactions.amount}</td>
    </tr>
  )
}

export default Transaction
