import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMayName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <HelloWorld/>
      <SayMayName nome ="Maria"/>
      <SayMayName nome ="João"/>
      <SayMayName nome ={nome}/>
      <Pessoa 
      nome="Gustavo" 
      idade="22"
      profissao="Programador"
      foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
