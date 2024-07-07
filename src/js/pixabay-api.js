import axios from 'axios';

const API_KEY = '44821264-a08a7741629af83990ada8b48';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data.hits;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
};
