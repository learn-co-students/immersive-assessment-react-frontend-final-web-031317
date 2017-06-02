import React from 'react'

const CategoryField = (props) => {
  console.log("what is this?", props)

  const { category, checked }  = props //object destructuring

  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">

        <input
          type="radio"
          name="category"
          checked={ checked }
          handleChange={props.handleChange}
        />
        <label>{ category }</label>

      </div>
    </div>
  )
}

export default CategoryField
