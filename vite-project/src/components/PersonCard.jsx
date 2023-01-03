import React, { useEffect, useState } from 'react';
import PersonForm from './PersonForm';
import Confirm from './Confirm';

const PersonCard = () => {
  const [persons, setPersons] = useState([]);
  const [visible, setVisible] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [id, setId] = useState('');
const [name, setName] = useState('')

  async function DeletOperation(id2, id3, id4) {
    const operations = id2;
    const newarray = operations.filter((operation) => operation._id !== id3);

    try {
      const response = await fetch(`http://localhost:8000/persons/${id4}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          operations: newarray,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const Confirmar = (id10 ) => (name) => {
    setConfirmation(true);
    setId(id10);
    setName(name)
  };

  const Abrir = (onde) => {
    const aberto = onde;
    setVisible(true);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/persons');
      const data = await response.json();
      setPersons(data);
    }

    fetchData();
  },);

  return (
    <div>
      <ul>
        {persons.map((person) => (
          <li className="pessoa" key={person._id}>
            <p className="name">   
            {person.name}
          </p>
          <p>Operações:</p>
          {person.operations.map((operation) => (
            <p className="name">
              {operation.name} Preço: {operation.price}{' '}
              <button onClick={() => DeletOperation(person.operations, operation._id, person._id)}>
                {' '}
                Delete Operation
              </button>{' '}
            </p>
          ))}
          <p className="name">Preço total: {person.operations.reduce((acc, operations) => acc + operations.price, 0)}</p>
          <PersonForm person={person}></PersonForm>
          <button onClick={() => Confirmar(person._id)(person.name)}> Deletar </button>
        </li>
      ))}
    </ul>
    {confirmation && <Confirm name={name} idd={id} setConfirmation={setConfirmation}></Confirm>}
  </div>
);
};

export default PersonCard;
            