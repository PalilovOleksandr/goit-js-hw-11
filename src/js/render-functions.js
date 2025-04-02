import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="card">
                    <a href="${largeImageURL}">
                        <img src="${webformatURL}" alt="${tags}" class="card-pic"/>
                        <ul class="inner-list">
                            <li class="inner-item">
                                <span class="bold">Likes</span>${likes}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Views</span>${views}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Comments</span>${comments}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Downloads</span>${downloads}
                            </li>
                        </ul>
                    </a>
                </li>`
    )
    .join('');
}
