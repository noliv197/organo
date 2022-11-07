import CampoTexto from '../campoTexto'
import CampoSelecao from '../campoSelecao'
import Botao from '../botao'
import {useState} from 'react'
import './formulario.css'

function Formulario(props){

    const [nome,setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    function salvar(evento){
        evento.preventDefault()
        props.novoCadastro({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    
    return (
        <section className='formulario'>
            <form onSubmit={salvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    label='Nome'
                    placeholder='Digite seu nome'
                    id='nome'
                    tipo='text'
                    obrigatorio={true}
                    valor={nome}
                    alterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    id='cargo'
                    tipo='text'
                    obrigatorio={true}
                    valor={cargo}
                    alterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label='Imagem'
                    placeholder='Informe o endereço da imagem'
                    id='imagem'
                    tipo='url'
                    valor={imagem}
                    alterado={valor => setImagem(valor)}
                />
                <CampoSelecao
                    label='Time'
                    id='time'
                    itens={props.times}
                    valor={time}
                    alterado={valor => setTime(valor)}
                />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario