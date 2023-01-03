import React from 'react'
import { useState } from 'react'


const PersonForm = ({person}) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(Number)

    const handleChange = event => {
setName(event.target.value)

    }

    const pandleChange = event => {
        setPrice(event.target.value)
            }
            


    async function addOperation (e) {

        e.preventDefault()


        try {
            const response = await fetch(`http://localhost:8000/persons/${person._id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                operations: [...person.operations, { name, price }]
              })
            })
        
            const data = await response.json()
            console.log(data)
          } catch (error) {
            console.error(error)
          }
      }

  return (
    <div>
        <label htmlFor=""> Adicione Operações </label>
        <form className='formulario'>
<input  onChange={handleChange} type="text" placeholder='Nome' />
<input required  onChange={pandleChange} type="number" placeholder='Preço'/>
<button onClick={addOperation}> Adicionar </button>
        </form>
    </div>
  )
}

export default PersonForm