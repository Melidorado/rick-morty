import './Tarjeta.css';

const Tarjeta = ({name, img}) => {
    return(
        <div className="card">
            <div className="photo"><img alt="" src={img}/></div>
            <h2 className="name">{name}</h2>
        </div>
    )
}

export default Tarjeta;