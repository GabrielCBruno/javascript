import './App.css';
import SayMayName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando o CSS</h1>
      <Frase/>
      <Frase/>
      <SayMayName nome ="Maria"/>
      <SayMayName nome ="João"/>
      <SayMayName nome ={nome}/>
      <Pessoa 
      nome="Gustavo" 
      idade="22"
      profissao="Programador"
      foto="https://via.placeholder.com/150"
      />
      <List/>
    </div>
  );
}

export default App;
