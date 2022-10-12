import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Car from './Car';
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
  </StrictMode>
);
