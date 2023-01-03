import React from 'react'
import { useState } from 'react';

function Form() {

  const [persons, setPersons] = useState([]);
  const [formData, setFormData] = useState();


  const handleChange = event => {
    setFormData(event.target.value );
  };

const Envio = (e) => {
  e.preventDefault()

  fetch('http://localhost:8000/persons', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: formData
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))

}

  return (
    <div>
    <form className='formp'>
        <input required onChange={handleChange} placeholder='Nome da pessoa' type="text" />
        <button onClick={Envio}> Adicionar </button>
    </form>
    </div>
  )
}

export default Form