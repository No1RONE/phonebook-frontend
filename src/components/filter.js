import React from 'react'

const FilterFun = (props) => {
    const handleNewFilter = (event) => {
      props.setNewFilter(event.target.value)
    }
    return(
      <div>Filter shown with: <input value = {props.filter} onChange={handleNewFilter}/></div>
    )
  }

export default FilterFun