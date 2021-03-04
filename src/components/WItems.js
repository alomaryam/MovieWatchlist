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
      <DeleteButton>Delete</DeleteButton>
      <UnWatchedButton>Unwatched</UnWatchedButton>
    </Items>
  );
};

export default WatchedMovieItems;
