import './Tarjeta.css';

const Tarjeta = ({name, img, id}) => {
    return(
        <div className="card" key={id}>
            <div className="photo"><img alt="" src={img}/></div>
            <h2 className="name">{name}</h2>
        </div>
    )
}

export default Tarjeta;