import React from 'react'
import Transaction from "./Transaction"

const TransactionsList = (props) => {
  var selectedList = ''

  if(props.activeCategory !== "All") {
    selectedList = props.transactions.filter((trans)=> trans.category === props.activeCategory)
  } else {
    selectedList = props.transactions
  }


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

        {selectedList.map((trans) => {
          return <Transaction trans={trans} />
        } 
        )}

      </tbody>
    </table>
  )
}

export default TransactionsList
