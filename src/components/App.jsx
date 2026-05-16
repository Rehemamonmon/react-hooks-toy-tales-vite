import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function addToy(newToy) {
    setToys([...toys, newToy]);
  }
  function updateToy(updatedToy) {
    setToys(toys.map(t => t.id === updatedToy.id ? updatedToy : t));
  }
  function deleteToy(id) {
    setToys(toys.filter(t => t.id !== id));
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} updateToy={updateToy} deleteToy={deleteToy} />
    </>
  );
}

export default App;
