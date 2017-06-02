import React from 'react'

const Transaction = (props) => {
  let data = props.data
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
