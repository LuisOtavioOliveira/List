import React from 'react';

const Confirm = ({ idd, setConfirmation, name }) => {
  function Delete (idd) {
    fetch(`http://localhost:8000/persons/${idd}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    setConfirmation(false);
  }

  const Giveup = () => {
    setConfirmation(false)
  }

  return (
    <div>
      <div className="modal">
        <p> Tem certeza que deseja excluir {name} ? </p>
        <div className='buttons' >
        <button className='um' onClick={() => Delete(idd)}> Excluir </button>
        <button onClick={Giveup}> Fechar </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;