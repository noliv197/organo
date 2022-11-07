import Card from '../card'
import './cor.css'
import './secaocard.css'

function SecaoCard(props){
    const classes = `secao ${props.bkg}`
    return (
        props.colaboradores.length > 0 &&
        <section className={classes}>
            <h3>{props.titulo}</h3>
            <hr className={props.borda}/>
            <div className='container'>
                {props.colaboradores.map(colaborador => 
                    <Card
                        cor={props.cor}
                        key={colaborador.nome}
                        src= {colaborador.imagem}
                        alt={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                    />
                )}

            </div>
        </section>
    )
}

export default SecaoCard