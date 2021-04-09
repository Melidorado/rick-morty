import { useEffect, useState } from "react";
import "./App.css";
import Tarjeta from "./components/Tarjeta";
import Filters from './components/Filters';

const App = () => {
  const [personajes, setPersonajes] = useState([]);
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character?name=${value}&status=${status}&gender=${gender}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
      });
  }, [value, status, gender]);

  const inputSearch = (value) => {
    setValue(value);
  };

  const statusSearch = (value) => {
    setStatus(value);
  };

  const genderSearch = (value) => {
    setGender(value);
  };

  return (
    <div>
      <Filters 
      inputSearch = {inputSearch}
      statusSearch = {statusSearch}
      genderSearch = {genderSearch}
      />
      <div className="container">
        {personajes.map((personaje) => (
          <Tarjeta
            name={personaje.name}
            img={personaje.image}
            key={personaje.id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
