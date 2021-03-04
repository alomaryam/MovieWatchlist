import WItems from "./WItems.js";
import { observer } from "mobx-react";
import styled from "styled-components";

const List = styled.div`
  padding: 10px;
  background-color: #f2f3f5;
  display: grid;
  float: left;
  flex-wrap: flex;
  font-size: 13pt;
`;
const WatchedList = ({ watchedmovies }) => {
  const watchedlist = watchedmovies
    .filter((movie) => movie.watched === true)
    .map((movie) => <WItems watchedmovie={movie} />);
  return <List>{watchedlist}</List>;
};

export default observer(WatchedList);
