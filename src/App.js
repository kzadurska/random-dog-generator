import React, { useEffect, useState } from 'react';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { GlobalStyles } from 'styles';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { showModal, hideModal } from 'actions';

App.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  // chosenBreed: PropTypes.string.isRequired,
  // dogBreeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  // dogImageSource: PropTypes.string.isRequired,
};

function mapStateToProps({ isModalOpen, doggos }) {
  return {
    isModalOpen,
    // dogImageSource: doggos.imageSource,
    // dogBreeds: doggos.breeds,
    // chosenBreed: doggos.chosenBreed,
  };
}

function App({
  isModalOpen,
  dispatch,
  // dogImageSource,
  // dogBreeds,
  // chosenBreed
}) {
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
    dispatch(showModal());

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
    setChosenBreed(null);
    setDogImageSource(null);

    dispatch(hideModal());
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

export default connect(mapStateToProps)(App);
