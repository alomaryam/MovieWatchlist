import UWItems from "./UItems.js";
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

const UnWatchedList = ({ unwatchedmovies }) => {
  const [query, setQuery] = useState("");

  const unwatchedlist = unwatchedmovies
    .filter((movie) => movie.watched === false)
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <List>
      <Title>Watchlist</Title>
      <btn>{unwatchedlist.length}</btn>
      <input
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search movies..."
      ></input>
      <br />
      {unwatchedlist.length
        ? unwatchedlist.map((movie) => <UWItems unwatchedmovie={movie} />)
        : "movie not found"}
    </List>
  );
};

export default observer(UnWatchedList);

//how to code "showing # out of # in line 31
