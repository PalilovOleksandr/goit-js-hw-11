import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

export const form = document.querySelector('.form');
const inputText = form.querySelector('input[name="search-text"]');
form.addEventListener('submit', handleSearch);

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49627447-226236558cbc7cecdfe012b55';
function handleSearch(event) {
  event.preventDefault();
  const searchText = inputText.value;
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  axios
    .get(`${BASE_URL}?${params}`)
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      console.log(response);
    })
    .catch(error => console.log(error.message));
}
