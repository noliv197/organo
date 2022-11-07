import './camposelecao.css'
function CampoSelecao(props){

    function pegaValor(evento){
        props.alterado(evento.target.value)
    }
    return (
        <div className='campo-selecao'>
            <label htmlFor={props.id}>{props.label}</label>
            <select id={props.id} value={props.valor} onChange={pegaValor} >
                <option></option>
                {props.itens.map(item=> <option key={item}>{item}</option>)}
            </select> 
        </div>
    )
}

export default CampoSelecao