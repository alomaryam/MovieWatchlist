import WItems from "./WItems.js";
import { observer } from "mobx-react";
import styled from "styled-components";

const Items = styled.div`
  background-color: #f2f3f5;
  display: grid;
  float: left;
  text-align: center;
  flex-wrap: wrap;
  font-size: 13pt;
  margin-left: 20px;
`;

const WatchedList = ({ watchedmovies }) => {
  const watchedlist = watchedmovies
    .filter((movie) => movie.watched === true)
    .map((movie) => <WItems watchedmovie={movie} />);
  return <Items>{watchedlist}</Items>;
};

export default observer(WatchedList);
