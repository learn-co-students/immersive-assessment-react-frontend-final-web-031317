import React from 'react'

const Transaction = (props) => {
  const transCell = props.transaction
  return (
    <tr>
      <td>{transCell.posted_at}</td>
      <td>{transCell.description}</td>
      <td>{transCell.category}</td>
      <td>{transCell.amount}</td>
    </tr>
  )
}

export default Transaction
