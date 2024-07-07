import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const renderImages = (images) => {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  if (images.length === 0) {
    iziToast.error({ title: 'Error', message: 'Sorry, there are no images matching your search query. Please try again!' });
    return;
  }

  const imageCards = images.map(image => {
    return `
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}">
        <div>Likes: ${image.likes}</div>
        <div>Views: ${image.views}</div>
        <div>Comments: ${image.comments}</div>
        <div>Downloads: ${image.downloads}</div>
      </a>
    `;
  }).join('');
  
  gallery.innerHTML = imageCards;

  new SimpleLightbox('.gallery a').refresh();
};

export const showLoading = () => {
  const loading = document.querySelector('.loading');
  loading.style.display = 'block';
};

export const hideLoading = () => {
  const loading = document.querySelector('.loading');
  loading.style.display = 'none';
};
