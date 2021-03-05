import { useState } from "react";
import movieStore from "./store/MovieStore";
import styled from "styled-components";

const Input = styled.input`
  align-content: center;
  align-items: center;
  border-radius: 0;
  padding: 10px;
  width: 10vw;
  margin: 20px;
`;
const Button = styled.button`
  font-size: 10pt;
  padding: 1em 1em;
  border-radius: 3px;
  background-color: teal;
  color: white;
  font-weight: bold;
  border: transparent;
`;

const AddMovie = () => {
  const [name, setName] = useState({ name: "", watched: false });
  const handleChange = (event) => {
    setName((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    movieStore.addMovie(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Movie..."
        ></Input>
        <Button type="submit">+Add</Button>
      </form>
    </div>
  );
};

export default AddMovie;
