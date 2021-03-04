import styled from "styled-components";

const DeleteButton = styled.button`
  font-size: 10pt;
  margin: 1.25em;
  padding: 1em 1em;
  border-radius: 3px;
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
    <div>
      <p>{unwatchedmovie.name}</p>
      <DeleteButton>Delete</DeleteButton>
      <WatchedButton>Watched</WatchedButton>
    </div>
  );
};

export default UnWatchedMovieItems;
