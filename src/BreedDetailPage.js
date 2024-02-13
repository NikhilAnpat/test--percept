
import React from 'react';

const BreedDetailPage = ({ breedDetails }) => {
  return (
    <div>
      <h1>Breed Details</h1>
      {breedDetails ? (
        <div>
          <h2>Name: {breedDetails.name}</h2>
          <p>Origin: {breedDetails.origin}</p>
          <p>Weight: {breedDetails.weight.metric} kg</p>
        <img src={breedDetails.image.url} alt={breedDetails.name} />
          
        </div>
      ) : (
        <p>No breed selected</p>
      )}
    </div>
  );
};
export default BreedDetailPage;
