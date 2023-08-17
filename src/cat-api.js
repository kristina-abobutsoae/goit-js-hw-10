import axios from "axios";
import Notiflix from "notiflix";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common["x-api-key"] = "live_ytECUHtXUAO5kkqKCt32kU7IHXBZhLG98GsO0lbSBnwEiwAdLIni2joZAKHirV1b";


export {fetchBreeds};
export {fetchCatByBreed};

function fetchBreeds() {

  return axios.get('breeds')
    .then(response => {

      return response.data;
    })
}


function fetchCatByBreed(breedId) {
  
  return axios.get(`images/search?breed_ids=${breedId}`)
  .then(response => {

    return response.data;
  })
  .catch(error => {

    Notiflix.Notify.failure("Oops! Something went wrong! Try reloading the page!");
  });
}