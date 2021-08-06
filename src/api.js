export async function fetchImages(breed) {
  const url = `https://dog.ceo/api/breed/${breed}/images/random/12`;
  const response = await fetch(url);
  const data = await response.json();
  return data.message;
}
