import { makeObservable, observable } from "mobx";
import Movies from "../Movies.js";

class MovieStore {
  movies = Movies;

  constructor() {
    makeObservable(this, {
      movies: observable,
    });
  }
}

const movieStore = new MovieStore();
export default movieStore;
