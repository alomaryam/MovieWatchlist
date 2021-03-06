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
  align-content: right;
  background-color: red;
  color: white;
  font-weight: bold;
  border: transparent;
`;
const UnWatchedButton = styled.button`
  font-size: 10pt;
  margin: 1.25em;
  padding: 1em 1em;
  border-radius: 3px;
  float: right;
  align-content: right;
  background-color: teal;
  color: white;
  font-weight: bold;
  border: transparent;
`;

const WatchedMovieItems = ({ watchedmovie }) => {
  return (
    <Items>
      <p>{watchedmovie.name}</p>
      <Wrap>
        <DeleteButton onClick={() => movieStore.deleteMovie(watchedmovie.id)}>
          Delete
        </DeleteButton>
        <UnWatchedButton onClick={() => (watchedmovie.watched = false)}>
          Unwatch
        </UnWatchedButton>
      </Wrap>
    </Items>
  );
};

export default observer(WatchedMovieItems);
