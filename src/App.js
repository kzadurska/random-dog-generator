import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { GlobalStyles } from 'styles';
import { showModal, hideModal, getDogBreeds, setChosenDogBreed, getDogImage, resetDogImage } from 'actions';
import Button, { ModalButton } from 'components/Button';
import Modal from 'components/Modal';

App.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  chosenBreed: PropTypes.string.isRequired,
  dogBreeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  dogImageSource: PropTypes.string.isRequired,
};

function mapStateToProps({ isModalOpen, doggos }) {
  return {
    isModalOpen,
    dogImageSource: doggos.imageSource,
    dogBreeds: doggos.breeds,
    chosenBreed: doggos.chosenBreed,
  };
}

function App({ isModalOpen, dispatch, dogImageSource, dogBreeds, chosenBreed }) {
  useEffect(() => {
    dispatch(getDogBreeds());
  }, []);

  function handleBreedClick(event) {
    const { name } = event.target;
    dispatch(showModal());

    dispatch(setChosenDogBreed(name));

    dispatch(getDogImage(name));
  }

  function handleGenerateRandomImage() {
    dispatch(getDogImage(chosenBreed));
  }

  function handleModalClose() {
    dispatch(resetDogImage());
    dispatch(setChosenDogBreed(''));
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
          {dogBreeds.map(breed => (
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
                css="width: 300px; height: 300px; object-fit: cover; border-radius: 4px;"
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

export default connect(mapStateToProps)(App);
