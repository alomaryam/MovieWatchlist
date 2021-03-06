import WItems from "./WItems.js";
import { observer } from "mobx-react";
import styled from "styled-components";
import { useState } from "react";

const List = styled.div`
  padding: 10px;
  display: grid;
  float: left;
  font-size: 13pt;
  margin-right: 30px;
  background: #f2f3f5;
  width: 400px;
`;

const Title = styled.p`
  font-weight: bold;
`;

const WatchedList = ({ watchedmovies }) => {
  const [query, setQuery] = useState("");
  const watchedlist = watchedmovies
    .filter((movie) => movie.watched === true)
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <List>
      <Title>Watched</Title>
      <btn>{watchedlist.length}</btn>
      <input
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search movies..."
      ></input>
      <br />
      {watchedlist.length
        ? watchedlist.map((movie) => <WItems watchedmovie={movie} />)
        : "movie not found"}
    </List>
  );
};

export default observer(WatchedList);
