import { action, makeObservable, observable } from "mobx";
import Movies from "../Movies.js";

class MovieStore {
  movies = Movies;

  deleteMovie = (id) => {
    this.movies = this.movies.filter((movie) => movie.id !== id);
  };

  // moveMovie = (id) => {
  // };

  addMovie = (name) => {
    let newMovie = name;
    newMovie.id = this.movies.length + 1;
    this.movies.push(newMovie);
    console.log(this.movies);
  };

  constructor() {
    makeObservable(this, {
      movies: observable,
      deleteMovie: action,
      addMovie: action,
    });
  }
}

const movieStore = new MovieStore();
export default movieStore;
