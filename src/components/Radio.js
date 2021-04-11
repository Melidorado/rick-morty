import './Radio.css';

const Radio = ({option, handleChange, title}) => {
    return(
        <label>
            {option}
            <input
              onChange={handleChange}
              type="radio"
              value={option.toLowerCase()}
              name={title.toLowerCase()}
            ></input>
          </label>
    )
}

export default Radio;