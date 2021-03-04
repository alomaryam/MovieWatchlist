import styled from "styled-components";

const Items = styled.div`
  background-color: #f2f3f5;
  display: flex;
  float: left;
  text-align: center;
  flex-wrap: flex;
  font-size: 13pt;
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
      <DeleteButton>Delete</DeleteButton>
      <WatchedButton>Watched</WatchedButton>
    </Items>
  );
};

export default UnWatchedMovieItems;
