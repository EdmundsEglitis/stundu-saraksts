import Diena from "./Diena";
import style from './style.css';

function App() {

  const visasStundas = [ 
    {diena: "Pirmdiena",
    stundas: [
      "Sports pie Klintas",
      "Dabaszinības mīlu fiziku",
      "Vēsture",
      "🫥"
    ]
    },
    {diena: "Otrdiena",
    stundas: [
      "Sports pie Klintas",
      "Dabaszinības mīlu fiziku",
      "Vēsture",
      "🫥"
    ]
    },
    {diena: "Tresdiena",
    stundas: [
      "Sports pie Klintas",
      "Dabaszinības mīlu fiziku",
      "Vēsture",
      "🫥"
    ]
    },
    {diena: "Ceturtdiena",
    stundas: [
      "Sports pie Klintas",
      "Dabaszinības mīlu fiziku",
      "Vēsture",
      "🫥"
    ]
    },
    {diena: "Piektdiena",
    stundas: [
      "Sports pie Klintas",
      "Dabaszinības mīlu fiziku",
      "Vēsture",
      "🫥"
    ]
    },
    ];
  const dienasJSX = visasStundas.map((diena, indekss) => {
  return <Diena key={indekss} diena={diena.diena}  stundas={diena.stundas}/>
  });
  return (
    <>
      <div class="border"> 

      <Diena diena="Pirmdiena" stundas={dienasJSX}/>
              
      </div>
    </>
  )
}

export default App;

// Uztaisi divas jaunas komponentets:
// - Diena.js
// - Stunda.js

// JS - .forEach() ir masīvu metode,
// kura apskata ikkatru masīva elementu,
// bet neko neatgriež (nav return)

// JS - .map() ir masīvu metode,
// kura apskata ikkatru masīva elementu
// un atgriež jaunu masīvu (return Array)