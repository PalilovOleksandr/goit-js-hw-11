import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

export function getImagesByQuery(query) {
  axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '49627447-226236558cbc7cecdfe012b55',
        q: `${query}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      console.log(response.data);
    })
    .catch(error => console.log(error.message));
}
