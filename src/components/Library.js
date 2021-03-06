import WatchedList from "./WList.js";
import UnWatchedList from "./UList.js";
import movieStore from "./store/MovieStore.js";
import AddMovie from "./AddMovie.js";
import { observer } from "mobx-react";
// import styled from "styled-components";

// const Div = styled.div`
//   margin-top: 30px;
//   display: grid;
//   justify-content: center;
// `;

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
