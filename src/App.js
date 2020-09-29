import React, { useEffect, useState } from 'react';

export default function App() {
  const [dogBreeds, setDogBreeds] = useState(null);
  const [chosenBreed, setChosenBreed] = useState(null);
  const [dogImageSource, setDogImageSource] = useState(null);

  async function fetchDogBreeds() {
    const myRequest = new Request('https://dog.ceo/api/breeds/list/all', {
      method: 'GET',
    });
    const response = await fetch(myRequest);
    return response.json();
  }

  async function fetchRandomDogImage(breedName) {
    const myRequest = new Request(`https://dog.ceo/api/breed/${breedName}/images/random`, {
      method: 'GET',
    });
    const response = await fetch(myRequest);
    return response.json();
  }

  useEffect(() => {
    fetchDogBreeds().then(response => setDogBreeds(Object.keys(response.message)));
  }, []);

  function handleBreedClick(event) {
    const { name } = event.target;
    // open modal here

    setChosenBreed(name);

    fetchRandomDogImage(name)
      .then(response => setDogImageSource(response.message))
      .catch(error => console.log(error));
  }

  function handleGenerateRandomImage() {
    fetchRandomDogImage(chosenBreed)
      .then(response => setDogImageSource(response.message))
      .catch(error => console.log(error));
  }

  function handleModalClose() {
    // close modal here
    setChosenBreed(null);
    setDogImageSource(null);
  }

  return (
    <main css="display: flex; flex-direction: column; align-items: center; flex-wrap: wrap; background: papayawhip;">
      <header>wat</header>
      <p>info here</p>
      <div css="display: flex; flex-direction: row; align-items: stretch; justify-content: space-between; flex-wrap: wrap; border: 1px solid red;">
        {dogBreeds &&
          dogBreeds.map(breed => (
            <button type="button" key={breed} name={breed} onClick={handleBreedClick}>
              {breed}
            </button>
          ))}


      </div>
      {dogImageSource && (
        <>
          {chosenBreed && <div>Chosen breed: {chosenBreed}</div>}
          <div css="display: flex; flex-direction: column; align-items: center; background: peachpuff;">
            <img src={dogImageSource} />
            <button type="button" onClick={handleGenerateRandomImage}>
              Generate another random {chosenBreed}
            </button>

            <button type="button" onClick={handleModalClose}>
              Close modal
            </button>
          </div>
        </>)}
    </main>
  );
}
