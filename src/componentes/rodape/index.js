import './rodape.css'
function Rodape(props){
    return (
        <footer className='rodape'>
            <div>
                <a href='https://www.facebook.com'><img src='/imagens/fb.png' alt='Logo do Facebook'/></a>
                <a href='https://twitter.com'><img src='/imagens/tw.png' alt='Logo do Twitter'/></a>
                <a href='https://www.instagram.com'><img src='/imagens/ig.png' alt='Logo do Instagram'/></a>
            </div>
            <img src='imagens/logo.png' alt='Logo da Organo'/>
           <span>Desenvolvido por Alura</span>
        </footer>
    )
}

export default Rodape