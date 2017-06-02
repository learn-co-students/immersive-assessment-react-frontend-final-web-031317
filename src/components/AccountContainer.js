import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import axios from 'axios'


class AccountContainer extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [],
      activeCategory: "All"
    }
  }

  componentDidMount(){
    const URL = 'https://boiling-brook-94902.herokuapp.com/transactions'
    axios.get(URL)
    .then(res => this.setState({ transactions: res.data}))
  }

  handleChange() {
    this.setState = { activeCategory: '?'}
  }
  render() {
    console.log("HIIIIII!!!!!!!", this.state.activeCategory)
    const displayedTransactions = this.state.transactions
    //Passing through an object of array, bool, and callback function - line 38
    return (
      <div className="ui grid container">

        <CategorySelector
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleChange.bind(this) }
        />

        <TransactionsList
          transactions={ displayedTransactions }
        />

      </div>
    )
  }
}

export default AccountContainer
