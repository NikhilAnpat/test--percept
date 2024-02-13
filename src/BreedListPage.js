import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BreedListPage() {
  const [breeds, setBreeds] = useState([]); // All breeds show
  const [selectedBreed, setSelectedBreed] = useState(null);// anyone click the breed this breed show
  const [selectedBreedImage, setSelectedBreedImage] = useState(null);// store the img url selected breed

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/breeds?limit=10&page=0');
        console.log(response);
        setBreeds(response.data);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };
    fetchBreeds();
  }, []);

  useEffect(() => {
    const fetchImage = async () => {
      if (selectedBreed && selectedBreed.reference_image_id) {
        try {
          const response = await axios.get(`https://api.thecatapi.com/v1/images/${selectedBreed.reference_image_id}`);
          console.log(response);
          setSelectedBreedImage(response.data.url);
        } catch (error) {
          console.error('Error fetching image:', error);
        }
      }
    };
    fetchImage();
  }, [selectedBreed]);

  return (
    <div>
      <h1>Cat Breeds</h1>
      {selectedBreed ? (
        <div>
          <h2>Name: {selectedBreed.name}</h2>
          <p>Origin: {selectedBreed.origin}</p>
          <p>Weight: imperial: {selectedBreed.weight.imperial} metric: {selectedBreed.weight.metric}</p>
          {selectedBreedImage ? (
            <img src={selectedBreedImage}  />
          ) : (
            <p>No image available</p>
          )}
          <button onClick={() => setSelectedBreed(null)}>Back to Breeds</button>
        </div>
      ) : (
        <ul>
          {breeds.map((breed) => (
            <li key={breed.id} onClick={() => setSelectedBreed(breed)}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>{breed.name}</h3>
                <p>Origin: {breed.origin}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BreedListPage;
