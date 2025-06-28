import { Routes, Route } from 'react-router-dom';
import { Home, About, Catalogo, Reparaciones} from '@/Pages/Index';
import { IngresarI, IngresarU, Registro } from '@/Pages/Usuarios/Index';
import { Carrito } from '@/Pages/Shop/Index';

export default function Content() {
  return (
    <>
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
    </>
  );
}
