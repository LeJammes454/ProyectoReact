import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/roboto';

import App from './App';
import Car from './Car';
import Vehiculo from './vehiculo/Vehiculo';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Car
      nombre="Ford Ranger"
      imagen="https://i.pinimg.com/originals/a0/83/52/a08352bf98880fdad355ae5839bbda16.jpg"
      descripcion="Conoce la espectacular Camioneta Todoterreno Ford Ranger , la nueva
      integrante de la familia Ford"
    />
    <Vehiculo
      imagen="https://www.mundomotero.com/wp-content/uploads/2020/10/Prueba-ZONTES-U1-125-2-1024x683.jpg"
      nombre="Zontes U1"
      descripcion="¿Una Trail ligera, dinámica y provocativa? Sin duda alguna, la respuesta es: U1-125."
      modelo="u1 2022"
    />
  </StrictMode>
);
