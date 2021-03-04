import UWItems from "./UItems.js";
import { observer } from "mobx-react";
import styled from "styled-components";

const Items = styled.div`
  background-color: #f2f3f5;
  display: grid;
  float: left;
  text-align: center;
  flex-wrap: flex;
  font-size: 13pt;
`;

const UnWatchedList = ({ unwatchedmovies }) => {
  const unwatchedlist = unwatchedmovies
    .filter((movie) => movie.watched === false)
    .map((movie) => <UWItems unwatchedmovie={movie} />);
  return <Items> {unwatchedlist} </Items>;
};

export default observer(UnWatchedList);
