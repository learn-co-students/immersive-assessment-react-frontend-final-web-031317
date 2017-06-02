function getTransactions() {
  return fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then( resp => resp.json() )
}

export {
  getTransactions
}
