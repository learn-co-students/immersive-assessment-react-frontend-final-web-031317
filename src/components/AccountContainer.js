import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import { importTransactions } from '../api'


class AccountContainer extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [],
      activeCategory: "All"
    }
  }

  componentDidMount(){
    importTransactions()
    .then((data) => this.setState({
      transactions: data
    }))
  }

  handleChange(e) {
    this.setState({
      activeCategory: e.currentTarget.value
    })
  }

  render() {

    const displayedTransactions = (this.state.activeCategory === 'All') ? this.state.transactions : this.state.transactions.filter((transaction) => {
      return transaction.category === this.state.activeCategory
    })

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
