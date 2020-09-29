import { combineReducers } from 'redux';
import { MODAL_SHOWN, MODAL_HIDDEN, IMAGE_FETCHED, BREED_CHOSEN, BREEDS_FETCHED } from 'actions';

function breedsReducer(state = { breeds: [], chosenBreed: '', imageSource: '' }, action) {
  switch (action.type) {
    case BREEDS_FETCHED:
      return { ...state, breeds: action.breedList };
    case IMAGE_FETCHED:
      return { ...state, imageSource: action.source };
    case BREED_CHOSEN:
      return { ...state, chosenBreed: action.breedName };
    default:
      return state;
  }
}

function modalReducer(state = false, action) {
  switch (action.type) {
    case MODAL_SHOWN:
      return true;
    case MODAL_HIDDEN:
      return false;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  doggos: breedsReducer,
  isModalOpen: modalReducer,
});

export default rootReducer;
