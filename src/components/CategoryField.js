import React from 'react'

const CategoryField = (props) => {
  const { category, checked, key, clicked }  = props
//////adding key and clicked into line above

// console.log('CategoryField props:', props);

  // key={ i }
  // checked={ checked }
  // category={ category }
  // clicked={handleChange} //adding this

  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">


        <input
          type="radio"
          name="category"
          checked={ checked  }

          onClick={() => clicked(category)}
          //pass clicked the category
          // onClick={() => clicked(key) }
          // need to pass category, not key!
        />
        <label>{ category }</label>

      </div>
    </div>
  )
}

export default CategoryField
