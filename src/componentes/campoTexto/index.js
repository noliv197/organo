import './campotexto.css'

function CampoTexto(props){
    function pegaValue(evento){
        props.alterado(evento.target.value)
    }
    return (
        <div className='campo-texto'>
            <label htmlFor={props.id}>{props.label}</label>
            <input value={props.valor} onChange={pegaValue} required={props.obrigatorio} id={props.id} type={props.tipo} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto