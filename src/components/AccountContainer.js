import React, { Component } from 'react'

import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import { getTransactions } from '../api'

class AccountContainer extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [],
      activeCategory: "All"
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    getTransactions()
      .then( transactions => this.setState({
        transactions: transactions
      }))
  }

  handleChange(event) {
    const category = event.target.value
    this.setState({
      activeCategory: category
    })
  }

  render() {
    const displayedTransactions = this.state.transactions

    return (
      <div className="ui grid container">

        <CategorySelector
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleChange }
        />

        <TransactionsList
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
        />

      </div>
    )
  }
}

export default AccountContainer
