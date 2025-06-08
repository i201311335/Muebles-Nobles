import ReactDOM from 'react-dom/client';
import Body from '@/Body';
import { BrowserRouter } from 'react-router-dom';
//Este archivo solamente permite que el envuelva a Body para que funcione las rutas. Ignoren aqui.
//Se preguntarán, ¿por qué no los haces juntos? es con el fin de modular, separar las cosas para que sean entendibles
// y ordenado.

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Body />
  </BrowserRouter>
);