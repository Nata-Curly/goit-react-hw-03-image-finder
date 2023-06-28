import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35898178-628df3d5ceb1661a68afdf1ae';

// export const getImages = (searchText) => { 
//     return fetch(`${BASE_URL}?key=${API_KEY}&q=${searchText}&image_type=photo&orientation=horizontal&per_page=12`)
// }
 
 async function getImages(query, numberOfPage) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: numberOfPage,
    per_page: 12,
  });

  const { data } = await axios.get(BASE_URL, { params });
  return data;
}

export default getImages;