import React, { useState,useEffect } from 'react';

export default function Contenido() {
  const personajes=[
    {
      nombre:'Ford Ranger',
       imagen:'https://i.pinimg.com/originals/a0/83/52/a08352bf98880fdad355ae5839bbda16.jpg',
       descripcion:'Conoce la espectacular Camioneta Todoterreno Ford Ranger , la nuevaintegrante de la familia Ford',
       sonido:'Beep Beep',
   }];

   const [personajesDesdeApi,setPersonajes] = useState([]);
   useEffect(()=>{
     setPersonajes(personajesDesdeApi);
   },[]);

  return (
    <div id="pric">
      
    </div>
  );
}
