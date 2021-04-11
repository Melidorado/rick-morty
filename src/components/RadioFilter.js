import './RadioFilter.css';
import Radio from './Radio';

const RadioFilter = ({handleChangeStatus, filter, handleChangeGender}) => {

    const title = filter.filterBy
    return(
        <div className="filter">
            <h2>{title}</h2>
            {filter.options.map( (option, i) => (
                <Radio 
                option={option}
                title={title}
                handleChange={title === "Status" ?handleChangeStatus :handleChangeGender}
                key={`${option}-${i}`}
                />))}
        </div>
    )
}

export default RadioFilter;