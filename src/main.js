import { fetchImages } from './js/pixabay-api';
import { renderImages, showLoading, hideLoading } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('search-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = document.getElementById('search-input').value.trim();

  if (!query) {
    iziToast.warning({ title: 'Warning', message: 'Search query cannot be empty!' });
    return;
  }

  showLoading();

  try {
    const images = await fetchImages(query);
    renderImages(images);
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  } finally {
    hideLoading();
  }
});
