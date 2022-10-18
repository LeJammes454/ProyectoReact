import React from 'react';
import './StyleCar.css';

export default function Car(props) {
const[beepeando,setBeppeando]=useState(false);
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
    //alert(sonido);
    setBeppeando(!beepeando);
  };

  return (
    <div id="tarjeta">
      {beepeando && 
        <div classname="buble b r hb"> {props.sonido}</div>
        }
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

      <div id="an">
        {props.anio < 1990 && (
          <img src="https://thumbs.dreamstime.com/z/dise%C3%B1o-cl%C3%A1sico-de-la-insignia-del-logotipo-club-coche-vintage-vieja-plantilla-retra-vector-etiqueta-c-comunidad-estilo-eps-140352838.jpg" />
        )}
      </div>
    </div>
  );
}
