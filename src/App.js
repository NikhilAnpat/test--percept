import React, { useState } from 'react';
import BreedListPage from './BreedListPage';
import BreedDetailPage from './BreedDetailPage';

const App = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);
 // render breedList
 // render breeddetails
  return (
    <div>
      <BreedListPage onSelectBreed={setSelectedBreed} />
      <BreedDetailPage breedDetails={selectedBreed} /> 
    </div>
  );
};

export default App;
