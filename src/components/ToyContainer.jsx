import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, updateToy, deleteToy }) {
  return (
    <div id="toy-collection">
      {toys.map(toy =>
      (<ToyCard key={toy.id} toy={toy} updateToy={updateToy} deleteToy={deleteToy} 
      />))}</div>
  );
}

export default ToyContainer;
