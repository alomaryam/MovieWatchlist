import UWItems from "./UItems.js";
import { observer } from "mobx-react";
import styled from "styled-components";

const List = styled.div`
  padding: 10px;
  background-color: #f2f3f5;
  display: grid;
  float: left;
  flex-wrap: flex;
  font-size: 13pt;
  margin-right: 30px;
`;

const UnWatchedList = ({ unwatchedmovies }) => {
  const unwatchedlist = unwatchedmovies
    .filter((movie) => movie.watched === false)
    .map((movie) => <UWItems unwatchedmovie={movie} />);
  return <List> {unwatchedlist} </List>;
};

export default observer(UnWatchedList);
