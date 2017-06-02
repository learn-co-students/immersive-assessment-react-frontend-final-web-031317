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
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(result => this.setState({
      transactions: result
    }))
  }

  handleChange(value) {
    this.setState({
      activeCategory: value
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
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
        />

      </div>
    )
  }
}

export default AccountContainer
