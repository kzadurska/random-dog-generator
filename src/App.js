import React, { useEffect, useState } from 'react';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { GlobalStyles } from 'styles';
import styled from 'styled-components';

export default function App() {
  const [dogBreeds, setDogBreeds] = useState(null);
  const [chosenBreed, setChosenBreed] = useState(null);
  const [dogImageSource, setDogImageSource] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(true);

    setChosenBreed(name);

    fetchRandomDogImage(name)
      .then(response => setDogImageSource(response.message))
      .catch(error => error);
  }

  function handleGenerateRandomImage() {
    fetchRandomDogImage(chosenBreed)
      .then(response => setDogImageSource(response.message))
      .catch(error => error);
  }

  function handleModalClose() {
    // close modal here
    setChosenBreed(null);
    setDogImageSource(null);
    setIsModalOpen(false);
  }

  return (
    <>
      <GlobalStyles />

      <main css="display: flex; flex-direction: column; align-items: center; flex-wrap: wrap; position: relative;">
        <header>
          <h1>Doggos</h1>
        </header>
        <p>Click on breed name to see an example image</p>
        <div css="display: flex; flex-direction: row; align-items: stretch; justify-content: space-between; flex-wrap: wrap;">
          {dogBreeds &&
            dogBreeds.map(breed => (
              <Button key={breed} name={breed} onClick={handleBreedClick}>
                {breed}
              </Button>
            ))}
        </div>

        <Modal isOpen={isModalOpen}>
          {dogImageSource && (
            <div css="display: flex; flex-direction: column; align-items: center;">
              <img
                alt={chosenBreed}
                src={dogImageSource}
                css="width: 300px; height: 300px; object-fit: cover; border-radius: 4px; background-color: f6f6f6;"
              />
              <ModalButton onClick={handleGenerateRandomImage}>Generate another random {chosenBreed}</ModalButton>

              <ModalButton onClick={handleModalClose}>Close modal</ModalButton>
            </div>
          )}
        </Modal>
      </main>
    </>
  );
}

const ModalButton = styled(Button)`
  width: 300px;
  margin: 0;
  margin-top: 8px;
`;
