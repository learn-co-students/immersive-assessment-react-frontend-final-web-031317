import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'


class AccountContainer extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [
        {
          id: 1,
          posted_at: "2017-02-28 11:00:00",
          description: "Leather Pants, Gap co.",
          category: "Fashion",
          amount: -20000
        },
        {
          id: 2,
          posted_at: "2017-02-29 10:30:00",
          description: "Paycheck from Bob's Burgers",
          category: "Income",
          amount: 100000
        },
        {
          id: 3,
          posted_at: "2017-05-24 10:53:00",
          description: "'Pair Programming Illuminated' by Laurie Williams and Robert Kessler",
          category: "Entertainment",
          amount: -1498
        },
        {
          id: 4,
          posted_at: "2017-05-24 08:52:00",
          description: "Medium Iced Cold Brew, Gregory's Coffee",
          category: "Food",
          amount: -365
        }
      ],
      activeCategory: "All"
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log("newState: " + event.target.nextElementSibling.innerHTML)
    this.setState({
      activeCategory: event.target.nextElementSibling.innerHTML
    }, this.apiGetRequest)
  }

  apiGetRequest() {
    const URL = `https://boiling-brook-94902.herokuapp.com/transactions`

    fetch(URL)
    .then(response => response.json())
    .then(jsonResponse => this.setState({
      transactions: jsonResponse
    })
    )
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

        <p>Current Category: {this.state.activeCategory}</p>

        <TransactionsList
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
        />

      </div>
    )
  }
}

export default AccountContainer
