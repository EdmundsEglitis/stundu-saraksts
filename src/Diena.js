import Stunda from './Stunda.js';

function Diena(props) {
  const pirmdienasStundas = ["programmesana","KISSING THE HOMIES","programmesana","KISSING THE HOMIES"];
  const otrdienasStundas = ["programmesana","KISSING THE HOMIES","programmesana","KISSING THE HOMIES"];
    return (
      <>
        <h2> {props.diena} </h2>
        <ul>
          <Stunda nosaukums={pirmdienasStundas[0]} />
          <Stunda nosaukums={pirmdienasStundas[1]} />
          <Stunda nosaukums={pirmdienasStundas[2]} />
          <Stunda nosaukums={pirmdienasStundas[3]} />
        </ul>
      </>
    );
}

export default Diena ;