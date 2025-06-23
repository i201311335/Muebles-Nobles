import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/assets/Components/Header';
import Footer from '@/assets/Components/Footer';
import { Home, About, Catalogo, Reparaciones} from './Pages/Index';
import { IngresarI, IngresarU, Registro } from './Pages/Usuarios/Index';
import { Carrito } from './Pages/Shop/Index';
import { bg } from '@/assets/Imgs/';

//Este es el cuerpo de la página web
// Teniendo en cuentalas partes básicas del html son: Header(encabeza), Main (cuerpo) y Footer(pie)
//El Header y Footer son componentes "estaticos", la etiqueta main será donde sufrirá cambio dinámico(páginas).
//Main envuelve a la etiqueta  Routes,cual se activará condiciones dependiendo de la página.


export default function Body() {

  const location = useLocation();
  const isCatalogo = location.pathname === '/Catalogo';
  const isIngresarU = location.pathname === '/IngresarU';
  const isIngresarI = location.pathname === '/IngresarI';
  const isRegistro = location.pathname === '/Registro';

  
  return (
    <>
      <Header />
      <main style={{ backgroundImage: `url(${bg[0]})` }} className={isCatalogo ? 'catalogo-scroll ' : 'd-grid'}>
        <div />
        <div id='contenedor' className={ isIngresarU || isIngresarI || isRegistro ? 'content-form' : 'content'}>
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
      </main>
      <Footer />
    </>
  );
}
