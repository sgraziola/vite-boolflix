// store.js
import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  movieApiUrl: "https://api.themoviedb.org/3/search/movie",
  tvSeriesApiUrl: "https://api.themoviedb.org/3/search/tv",
  apiKey: "87376ba2aeb5004bae20350f2bfb7968",
  apiQuery: "",
  errorMessage: null,
  movies: "",
  callApi() {
    const movieConfig = {
      method: "get",
      url: this.movieApiUrl,
      params: {
        api_key: this.apiKey,
        query: this.apiQuery,
      },
    };

    const tvSeriesConfig = {
      method: "get",
      url: this.tvSeriesApiUrl,
      params: {
        api_key: this.apiKey,
        query: this.apiQuery,
      },
    };

    Promise.all([axios(movieConfig), axios(tvSeriesConfig)])
      .then((response) => {
        console.log(response[0].data.results);
        console.log(response[1].data.results);
        this.movies = response[0].data.results.concat(response[1].data.results);
        console.log(this.movies);
        this.apiQuery = "";
      })
      .catch((error) => {
        console.error(error.message);
        this.errorMessage = error.message;
      });
  },
});
