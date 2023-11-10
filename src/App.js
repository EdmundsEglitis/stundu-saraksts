import { useEffect, useState } from "react";
import Diena from "./Diena";
import style from './Style.module.css';
import Stunda from "./Stunda";

function App() {

  const [stundas, setStundas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getStundas() {
      const response = await fetch("https://cheese-cake.onthewifi.com/api/lessons");
      const data = await response.json();
      setStundas(data);
      setLoading(false);
    }
    getStundas();
  }, []);

console.log(stundas.IPb22)

function renderStundas() {

  const dienas = ["Pirmdiena", "Otrdiena", "Tresdiena", "Ceturtdiena", "Piektdiena"];
  let key=0;

  if (loading) {
    return <p>Loading...</p>;
  }
  return stundas.IPb22.map((stunda) => (

      <div key={stunda.classes}>

      <h2>{dienas[key]}</h2>

      <p>1 {stunda.classes[0]} | {stunda.teachers[0]}</p>
      <p>2 {stunda.classes[1]} | {stunda.teachers[1]}</p>
      <p>3 {stunda.classes[2]} | {stunda.teachers[2]}</p>
      <p>4 {stunda.classes[3]} | {stunda.teachers[3]}</p>
      <h2>.</h2>
      </div>
  )
  );
}
  return (
    <>
    <div>{renderStundas()}</div>
    </>
  )
}
export default App;
