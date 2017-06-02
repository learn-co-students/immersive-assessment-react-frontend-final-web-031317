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
  }



  handleChange(categoryName) {
    this.setState({activeCategory: categoryName})
    console.log('now the activeCategory is: ', categoryName)
  }
// input type="text" onChange={this.onChange.bind(this)}

  componentDidMount() {
    var that = this;
    var url = 'https://boiling-brook-94902.herokuapp.com/transactions'

    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      console.log('data from url: ', data);
      that.setState({ transactions: data });
    });
  }


  render() {
    const displayedTransactions = this.state.transactions
    // const displayedTransactions = this.state.activeCategory

    return (
      <div className="ui grid container">

        <CategorySelector
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleChange.bind(this) }
        />

        <TransactionsList
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
          //adding activeCategory
        />

      </div>
    )
  }
}

export default AccountContainer
