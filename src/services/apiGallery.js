import axios from 'axios';
import PropTypes from 'prop-types';

const baseURL = 'https://pixabay.com/api/';

export async function fetchGalleryImages(query, page) {
  const PARAMS = new URLSearchParams({
    q: `${query}`,
    page: `${page}`,
    key: '33878514-d39e403e0c8f10d1456b09ccc',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });
  const API = baseURL + '?' + PARAMS;
  const response = await axios.get(API);
  return response.data;
}
fetchGalleryImages.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
