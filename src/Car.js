import React from 'react';
import './StyleCar.css';

export default function Car(props) {
  /*
  Dependiendo que nombre tenga el vehiculo, realizara un
  diferente sonido
  const hacerBeep = () => {
    if (props.nombre.includes('C6')) {
      alert('Cuchao!');
    } else {
      alert('Beep Beep');
    }
  };
  */

  const hacerBeep = (sonido) => {
    alert(sonido);
  };

  return (
    <div id="tarjeta">
      <h2>Hola soy un {props.nombre}</h2>
      <div id="cuerpo">
        <div id="titulo">
          <img src={props.imagen} alt="" />
        </div>
        <div id="contenido">
          <p>{props.descripcion}</p>
        </div>
      </div>
      <button onClick={() => hacerBeep(props.sonido)}>Hacer bep bep</button>
    </div>
  );
}
