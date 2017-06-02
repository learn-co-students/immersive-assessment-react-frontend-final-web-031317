import React from 'react'
import CategoryField from './CategoryField'
import categories from '../categories'

const CategorySelector = (props) => {

  console.log('category selector', props)

  const categoryFields = categories.map( //This is displaying each category in a line
    (category, i) => {

      const checked = category === props.activeCategory

      return (
        <CategoryField
          key={ i }
          checked={ checked } //true or false
          category={ category } //displays category name
          handleChange={this.handleChange}
        />
      )
    }
  )


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
