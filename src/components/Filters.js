import "./Filters.css";
import RadioFilter from './RadioFilter';

const Filters = ({handleChange, handleChangeGender, handleChangeStatus, inputValue}) => {

  const filterArray = [ 
    {
      filterBy: "Status",
      options: ["Alive", "Dead", "Unknown"] 
    }, 
    {
      filterBy: "Gender",
      options: ["Female", "Male", "Unknown", "Genderless"] 
    }, 
  ]
  
  return (
        <div className="filters">
        <div className="filter_byname">
          <h2>Personaje</h2>
          <label>
            Busqueda
            <input onChange={handleChange} value={inputValue} type="text"></input>
          </label>
        </div>
        {filterArray.map( (filter, i) => (
          <RadioFilter 
          handleChangeStatus={handleChangeStatus}
          handleChangeGender={handleChangeGender}
          filter={filter}
          key={`${filter}-${i}`}
          />
        ))}
      </div>
    )
}

export default Filters;