
import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import Rodape from './componentes/rodape';
import SecaoCard from './componentes/secaoCard';

function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: 'bkg-programacao',
      borda:'borda-programacao',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: 'bkg-frontend',
      borda:'borda-frontend',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: 'bkg-datascience',
      borda:'borda-datascience',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: 'bkg-devops',
      borda: 'borda-devops'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: 'bkg-design',
      borda:'borda-design',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: 'bkg-mobile',
      borda:'borda-mobile',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: 'bkg-gestao',
      borda:'borda-gestao',
    }
]

  const [colaboradores, setColaboradores] = useState([])
  function adiciona(colaborador){
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div>
      <Banner/>
      <div>
        <Formulario times={times.map(time => time.nome)} novoCadastro={colaborador => adiciona(colaborador)}/>

      </div>

      {times.map(time =>       
        <SecaoCard
          key = {time.nome}
          titulo= {time.nome}
          cor = {time.corPrimaria}
          bkg = {time.corSecundaria}
          borda = {time.borda}
          colaboradores={colaboradores.filter(colaborador=>colaborador.time === time.nome)}
        />
      )}

      <Rodape/>
    </div>
  );
}

export default App;
