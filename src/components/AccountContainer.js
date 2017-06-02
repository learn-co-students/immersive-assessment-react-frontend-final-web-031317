import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'


class AccountContainer extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [],
      activeCategory: "All"
    }

    this.filterTransactions = this.filterTransactions.bind(this)

  }

  handleChange(data) {
    this.setState({
      activeCategory: data
    })
  }

  filterTransactions(){
    const allTransactions = this.state.transactions
    if (this.state.category !== 'All') {
      return allTransactions.filter(transaction => transaction.category.includes(this.state.activeCategory))
    } else {
      return allTransactions
    }
  }

  componentDidMount(){
    const URL = "https://boiling-brook-94902.herokuapp.com/transactions"
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          transactions: data
        })
      })
  }

  render() {

    const displayedTransactions = this.state.transactions

    return (
      <div className="ui grid container">

        <CategorySelector
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleChange.bind(this)}
        />

        <TransactionsList
          transactions={ this.filterTransactions() }
        />

      </div>
    )
  }
}

export default AccountContainer
