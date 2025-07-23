import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51403158-2e3095c4822824a544700ea8f';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('❌ Pixabay request error:', error);
    throw error;
  }
}
