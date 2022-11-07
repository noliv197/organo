import './card.css'

function Card(props){
    return (
        <div className='card'>
            <div style={{backgroundColor: props.cor}}></div>
            <img src={props.src} alt={props.alt} />
            <h4>{props.nome}</h4>
            <span>{props.cargo}</span>
        </div>
    )
}

export default Card