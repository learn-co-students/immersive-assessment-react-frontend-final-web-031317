export function importTransactions(){
  return fetch('https://boiling-brook-94902.herokuapp.com/transactions')
  .then((res) => {return res.json()})
}
