import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51403158-2e3095c4822824a544700ea8f';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Pixabay request error:', error);
    throw error;
  }
}
