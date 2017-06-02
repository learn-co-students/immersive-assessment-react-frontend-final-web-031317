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

  getAPI() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(response => response.json())
    .then( data => {
        console.log(data)
        this.setState({
          transactions: data
        })
      }
    )
  }

  handleChange(event) {
    // console.log(event.target.name);
    this.setState({
      activeCategory: event.target.name
    })
  }

  componentDidMount() {
    this.getAPI()
  }

  render() {
    const displayedTransactions = this.state.transactions.filter( (transaction) =>
      (this.state.activeCategory === "All") ? transaction.category : transaction.category.includes(this.state.activeCategory)
   )

    return (
      <div className="ui grid container">

        <CategorySelector
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
          handleChange={this.handleChange.bind(this)}
        />

        <TransactionsList
          transactions={ displayedTransactions }
        />

      </div>
    )
  }
}

export default AccountContainer
