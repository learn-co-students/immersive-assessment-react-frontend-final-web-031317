import React from 'react'

const Transaction = (props) => {
  const data = props.info
  return (
    <tr>
      <td>{data.posted_at}</td>
      <td>{data.description}</td>
      <td>{data.category}</td>
      <td>{data.amount}</td>
    </tr>
  )
}

export default Transaction
