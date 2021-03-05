import WatchedList from "./WList.js";
import UnWatchedList from "./UList.js";
import movieStore from "./store/MovieStore.js";
import AddMovie from "./AddMovie.js";
import { observer } from "mobx-react";

const Library = () => {
  return (
    <div>
      <AddMovie />
      <UnWatchedList unwatchedmovies={movieStore.movies} />
      <WatchedList watchedmovies={movieStore.movies} />
    </div>
  );
};

export default observer(Library);
