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
    return fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then( res => res.json() )
    .then( data => this.setState( {transactions: data } ))
  }

  handleChange(category) {
    console.log("HERE")
    console.log(category)
    this.setState({ activeCategory: category})
  }

  render() {
    const displayedTransactions = this.state.activeCategory === 'All' ? this.state.transactions : this.state.transactions.filter( el => el.category === this.state.activeCategory)

    return (
      <div className="ui grid container">

        <CategorySelector
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleChange.bind(this)}
        />

        <TransactionsList
          transactions={ displayedTransactions }
        />

      </div>
    )
  }
}

export default AccountContainer
