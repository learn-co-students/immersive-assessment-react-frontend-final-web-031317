import React from 'react'
import CategoryField from './CategoryField'
import categories from '../categories'

const CategorySelector = (props) => {

  const categoryFields = categories.map(
    (category, i) => {

      const checked = category === props.activeCategory

      return (
        <CategoryField
          key={ i }
          checked={ checked }
          category={ category }
          clicked={props.handleChange} //adding this
        />
      )
    }
  )

// Figure out how to render only the transactions
// in which the category matches the active category,
// or if the active category is 'All', render everything.

//condition ? expr1 : expr2

  return (
    <div className="sixteen wide column">
      <div className="ui form">
        <div className="inline fields">
          { categoryFields }
        </div>
      </div>
    </div>
  )
}

export default CategorySelector
