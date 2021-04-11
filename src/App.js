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
    const baseUrl = "https://rickandmortyapi.com/api/character?"
    const inputSearch = value ?`name=${value}&` :''
    const statusSearch = status ?`status=${status}&` : ''
    const genderSearch = gender ?`gender=${gender}` :''

    const url = baseUrl + inputSearch + statusSearch + genderSearch
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
      });
  }, [value, status, gender]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

const handleChangeStatus = (e) => {
    setStatus(e.target.value);
};

const handleChangeGender = (e) => {
    setGender(e.target.value);
};


  return (
    <div>
      <Filters 
      handleChange = {handleChange}
      handleChangeStatus = {handleChangeStatus}
      handleChangeGender = {handleChangeGender}
      inputValue = {value}
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
