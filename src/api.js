export async function fetchDogBreeds() {
  const myRequest = new Request('https://dog.ceo/api/breeds/list/all', {
    method: 'GET',
  });
  const response = await fetch(myRequest);
  return response.json();
}

export async function fetchRandomDogImage(breedName) {
  const myRequest = new Request(`https://dog.ceo/api/breed/${breedName}/images/random`, {
    method: 'GET',
  });
  const response = await fetch(myRequest);
  return response.json();
}
