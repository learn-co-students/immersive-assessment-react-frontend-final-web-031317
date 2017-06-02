import React from 'react'

const CategoryField = (props) => {
  const { category, checked }  = props

  function handleChange(){
    props.onChange(category)
  }

  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">

        <input
          type="radio"
          name="category"
          checked={ checked }
          onChange={handleChange.bind(this)}
        />
        <label>{ category }</label>

      </div>
    </div>
  )
}

export default CategoryField
