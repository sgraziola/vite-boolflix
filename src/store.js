// store.js
import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/movie",
  tvSeriesUrl: "https://api.themoviedb.org/3/search/tv",
  apiKey: "87376ba2aeb5004bae20350f2bfb7968",
  apiQuery: "",
  errorMessage: null,
  movies: "",
  callApi() {
    const config = {
      method: "get",
      url: this.apiUrl,
      params: {
        api_key: this.apiKey,
        query: this.apiQuery,
      },
    };

    axios(config)
      .then((response) => {
        console.log(response.data.results);
        this.movies = response.data.results;
      })
      .catch((error) => {
        console.error(error.message);
        this.errorMessage = error.message;
      });
  },
});
