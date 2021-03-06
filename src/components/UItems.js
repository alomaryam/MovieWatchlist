import styled from "styled-components";
import movieStore from "./store/MovieStore.js";
import { observer } from "mobx-react";

const Wrap = styled.div`
  position: fixed;
  margin-left: 200px;
`;

const Items = styled.div`
  display: flex;
`;

const DeleteButton = styled.button`
  font-size: 10pt;
  margin: 1.25em;
  padding: 1em 1em;
  border-radius: 3px;
  float: right;
  background-color: red;
  color: white;
  font-weight: bold;
  border: transparent;
`;
const WatchedButton = styled.button`
  font-size: 10pt;
  margin: 1.25em;
  padding: 1em 1em;
  border-radius: 3px;
  background-color: teal;
  color: white;
  font-weight: bold;
  border: transparent;
`;

const UnWatchedMovieItems = ({ unwatchedmovie }) => {
  return (
    <Items>
      <p>{unwatchedmovie.name}</p>
      <Wrap>
        <DeleteButton onClick={() => movieStore.deleteMovie(unwatchedmovie.id)}>
          Delete
        </DeleteButton>
        <WatchedButton onClick={() => (unwatchedmovie.watched = true)}>
          Watched
        </WatchedButton>
      </Wrap>
    </Items>
  );
};

export default observer(UnWatchedMovieItems);
