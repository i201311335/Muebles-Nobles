import { Routes, Route } from 'react-router-dom';
import Header from '@/assets/Components/Header';
import Footer from '@/assets/Components/Footer';
import { Home, About, Catalogo, Reparaciones} from './Pages/Index';
import { IngresarI, IngresarU, Registro } from './Pages/Usuarios/Index';
import { Carrito } from './Pages/Shop/Index';
import { bg } from '@/assets/Imgs/';

//Este es el cuerpo de la página web
// Ya saben que HTML, las partes básicas son: Header(cabeza), Main (cuerpo) y Footer(pies)
//El Header y Footer tiene sus respectivos esqueletos, main será las páginas que cambiará.
//Main envuelve a la etiqueta  Routes que sirven como rutas. 
// Permite que cada archivos que se encuentra en carpeta Pages, excepto index, sea mostrado

export default function Body() {
  return (
    <>
      <Header />
      <main style={{ backgroundImage: `url(${bg[0]})` }} className='d-grid'>
        <div />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Catalogo" element={<Catalogo />} />
            <Route path="/Reparaciones" element={<Reparaciones />} />
            <Route path="/IngresarU" element={<IngresarU />} />
            <Route path="/IngresarI" element={<IngresarI />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/Carrito" element={<Carrito />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </>
  );
}
