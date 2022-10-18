import React, { useState,useEffect } from 'react';
import './StyleCar.css';

export default function Car(props) {
  const [beepeando, setBeppeando] = useState(false);
  
  /*function funQueSeDispara(){
    alert("Que se va a guardar a una base de datos")
    //Codigo necesario para guardar en base de datos
    confirm("Y se guardo xd")
  };
  useEffect(funQueSeDispara,beepeando);
  */
var o =0;
useEffect(()=>{
  o++;
  console.log("Que se va a guardar a una base de datos " + o)
  //alert("Que se va a guardar a una base de datos")
  //Codigo necesario para guardar en base de datos
  //confirm("Y se guardo xd")
  console.log("Y se guardo xd " + o)
},[beepeando]);
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
      {beepeando && <div className="bubble b r hb">{props.sonido}</div>}
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
