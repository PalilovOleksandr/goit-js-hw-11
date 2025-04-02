import { getImagesByQuery } from './js/pixabay-api';

const form = document.querySelector('.form');
const inputText = form.querySelector('input[name="search-text"]');

function handleSearch(event) {
  event.preventDefault();
  const searchText = inputText.value.trim();
  getImagesByQuery(searchText);
}

form.addEventListener('submit', handleSearch);
