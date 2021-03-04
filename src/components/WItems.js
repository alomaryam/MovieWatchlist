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
const UnWatchedButton = styled.button`
  font-size: 10pt;
  margin: 1.25em;
  padding: 1em 1em;
  border-radius: 3px;
  background-color: teal;
  color: white;
  font-weight: bold;
  border: transparent;
`;

const WatchedMovieItems = ({ watchedmovie }) => {
  return (
    <div>
      <p>{watchedmovie.name}</p>
      <DeleteButton>Delete</DeleteButton>
      <UnWatchedButton>Unwatched</UnWatchedButton>
    </div>
  );
};

export default WatchedMovieItems;
