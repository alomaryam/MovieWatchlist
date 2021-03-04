import WatchedList from "./components/WList.js";
import UnWatchedList from "./components/UList.js";
import movieStore from "./components/store/MovieStore.js";
import { observer } from "mobx-react";

function App() {
  return (
    <div>
      <UnWatchedList unwatchedmovies={movieStore.movies} />
      <WatchedList watchedmovies={movieStore.movies} />
    </div>
  );
}

export default observer(App);
