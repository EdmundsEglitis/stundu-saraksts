
import './App.css';
import Diena from './Diena.js';


function App() {

  const pirmdienasStundas = ["programmesana","KISSING THE HOMIES","programmesana","KISSING THE HOMIES"];
  const otrdienasStundas = ["programmesana","KISSING THE HOMIES","programmesana","KISSING THE HOMIES"];
  return (
      <div class="bigger-box">
      <h1 class="h1" >STUNDU SARAKSTS</h1>
      <Diena diena="Pirmdiena"/>
      <Diena diena="Otrdiena"/>

      </div>
  );
}

export default App;
