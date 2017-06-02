import React from 'react'

const Transaction = (props) => {
  let classString
  const amountString = props.transaction.amount.toString().split('')
  amountString.splice(-2,0,'.')
  if(amountString[0] === '-') {
    classString = 'red'
    amountString.splice(1,0,'$')
  } else {
    classString = 'green'
    amountString.splice(0,0,'$')
  }
  return (
    <tr className={classString}>
      <td>{props.transaction.posted_at}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{amountString.join('')}</td>
    </tr>
  )
}

export default Transaction
