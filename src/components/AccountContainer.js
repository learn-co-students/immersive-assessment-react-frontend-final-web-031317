import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import { fetchTransactions } from '../api/index'


class AccountContainer extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [],
      activeCategory: "All"
    }
  }

  componentDidMount(){
    fetchTransactions()
    .then( res => this.setState({
      transactions: res
    }))
  }

  handleChange(event) {
    this.setState({
      activeCategory: event.target.value
    })
  }

  render() {
    const displayedTransactions = this.state.transactions.filter( transaction =>
      transaction.category === this.state.activeCategory || this.state.activeCategory === "All")

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
