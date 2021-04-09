import "./Filters.css";
import { useState } from "react";

const Filters = ({inputSearch, statusSearch, genderSearch}) => {

    const [value, setValue] = useState("");
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
        inputSearch(e.target.value)
      };
    
    const handleChangeStatus = (e) => {
        setStatus(e.target.value);
        statusSearch(e.target.value)
    };
    
    const handleChangeGender = (e) => {
        setGender(e.target.value);
        genderSearch(e.target.value)
    };

    return (
        <div className="filters">
        <div className="filter_byname">
          <h2>Personaje</h2>
          <label>
            {" "}
            Busqueda
            <input onChange={handleChange} value={value} type="text"></input>
          </label>
        </div>
        <div className="filter_bystatus">
          <h2>Status</h2>
          <label>
            {" "}
            Alive
            <input
              onChange={handleChangeStatus}
              type="radio"
              value="alive"
              name="status"
            ></input>
          </label>
          <label>
            {" "}
            Dead
            <input
              onChange={handleChangeStatus}
              type="radio"
              value="dead"
              name="status"
            ></input>
          </label>
          <label>
            {" "}
            Unknown
            <input
              onChange={handleChangeStatus}
              type="radio"
              value="unknown"
              name="status"
            ></input>
          </label>
        </div>
        <div className="filter_bygender">
          <h2>Genero</h2>
          <label>
            {" "}
            Female
            <input
              onChange={handleChangeGender}
              type="radio"
              value="female"
              name="gender"
            ></input>
          </label>
          <label>
            {" "}
            Male
            <input
              onChange={handleChangeGender}
              type="radio"
              value="male"
              name="gender"
            ></input>
          </label>
          <label>
            {" "}
            Unknown
            <input
              onChange={handleChangeGender}
              type="radio"
              value="unknown"
              name="gender"
            ></input>
          </label>
          <label>
            {" "}
            Genderless
            <input
              onChange={handleChangeGender}
              type="radio"
              value="genderless"
              name="gender"
            ></input>
          </label>
        </div>
      </div>
    )
}

export default Filters;