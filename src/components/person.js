import React from 'react'

const NewPerson = (props) => {
    const handleNameChange = (event) => {
        props.setNewName(event.target.value)
      }
      const handleNumberChange = (event) => {
        props.setNewNum(event.target.value)
      }
      return (
        <div>
        name: <input value = {props.newName} onChange = {handleNameChange}/>
        number: <input value = {props.newNum} onChange = {handleNumberChange}/>
      </div>
      )
}

export default NewPerson