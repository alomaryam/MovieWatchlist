import styled from "styled-components";
import movieStore from "./store/MovieStore.js";
import { useState } from "react";

const Items = styled.div`
  background-color: #f2f3f5;
  display: flex;
  float: left;
  text-align: center;
  flex-wrap: flex;
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
  let [toggle, setToggle] = useState(movieStore.movies.watched);
  const toggleButton = () => {
    setToggle(toggle === false ? true : false);
  };
  return (
    <Items>
      <p>{watchedmovie.name}</p>
      <DeleteButton onClick={() => movieStore.deleteMovie(watchedmovie.id)}>
        Delete
      </DeleteButton>
      <UnWatchedButton onClick={toggleButton}>
        {toggle === true ? "Watched" : "Unwatch"}
      </UnWatchedButton>
    </Items>
  );
};

export default WatchedMovieItems;
