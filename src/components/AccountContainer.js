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
    .then(data => this.setState({transactions: data}))
  }

  handleChange(category) {
    this.setState({activeCategory: category})
  }

  render() {
    let displayedTransactions

    if(this.state.activeCategory === "All"){
      displayedTransactions = <TransactionsList transactions={this.state.transactions} />
    } else {
      const filteredTransactions = this.state.transactions.filter(transaction => transaction.category === this.state.activeCategory)
      displayedTransactions = <TransactionsList transactions={filteredTransactions} />
    }

    return (
      <div className="ui grid container">

        <CategorySelector
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleChange.bind(this) }
        />

        { displayedTransactions }

      </div>
    )
  }
}

export default AccountContainer
