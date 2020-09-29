import { fetchDogBreeds, fetchRandomDogImage } from 'api';

export const MODAL_SHOWN = 'MODAL_SHOWN';
export const MODAL_HIDDEN = 'MODAL_HIDDEN';
export const IMAGE_FETCHED = 'IMAGE_FETCHED';
export const BREED_CHOSEN = 'BREED_CHOSEN';
export const BREEDS_FETCHED = 'BREEDS_FETCHED';

export function showModal() {
  return {
    type: MODAL_SHOWN,
  };
}

export function hideModal() {
  return {
    type: MODAL_HIDDEN,
  };
}

function breedsFetched(breedList) {
  return {
    type: BREEDS_FETCHED,
    breedList,
  };
}

function imageFetched(source) {
  return {
    type: IMAGE_FETCHED,
    source,
  };
}

function breedChosen(breedName) {
  return {
    type: BREED_CHOSEN,
    breedName,
  };
}

export function getDogBreeds() {
  return dispatch => {
    return fetchDogBreeds().then(response => dispatch(breedsFetched(Object.keys(response.message))));
  };
}

export function getDogImage(breedName) {
  return dispatch => {
    return fetchRandomDogImage(breedName).then(response => dispatch(imageFetched(response.message)));
  };
}

export function setChosenDogBreed(breedName) {
  return dispatch => {
    return dispatch(breedChosen(breedName));
  };
}

export function resetDogImage() {
  return dispatch => {
    return dispatch(imageFetched(''));
  };
}
