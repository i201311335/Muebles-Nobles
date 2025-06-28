import { useState } from "react";
import Clasic from '../assets/Imgs/sofa/clasic/';
import Ergo from '../assets/Imgs/sofa/ergos/';
import { Modern } from '../assets/Imgs/sofa/modern/';
import { Fade } from 'react-awesome-reveal';

const productos = [
  { id: 1, nombre: "Sofá Clásico", categoria: "Clásico", imagen: Clasic[0], precio: 1200 },
  { id: 2, nombre: "Sofá Ergonómico", categoria: "Ergonómico", imagen: Ergo[0], precio: 1500 },
  { id: 3, nombre: "Sofá Moderno", categoria: "Moderno", imagen: Modern[0], precio: 1800 },
  // Agrega más productos aquí
];

export default function Catalogo() {
  const [busqueda, setBusqueda] = useState("");


  const productosFiltrados = productos.filter(
    (prod) =>
      prod.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      prod.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <div className="d-grid bg-light border border-5 p-4">
        <div className="row ">

          <div className="bg-gradient col-3 ">
            <div className="input-group  ">
              <div className="col-2">
                <button className="bi bi-search btn shadow border border-4 " type="button"
                  data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" />
              </div>
              <div className="col-9" >
                <div className="input-group collapse collapse-horizontal" id="collapseWidthExample">
                  <input type="text" className="form-control " placeholder="Buscar.." value={busqueda} onChange={e => setBusqueda(e.target.value)} />
                </div>
              </div>
            </div>
          </div>



          <div className="row row-cols-3  bg-light col-9">
            {productosFiltrados.length === 0 && (
              <div className="col text-center text-muted">No se encontraron productos.</div>
            )}
            {productosFiltrados.map((prod) => (
              <div className="col" key={prod.id}>
                <Fade>
                  <div className="card h-100 shadow-sm">
                    <img src={prod.imagen} className="card-img-top" alt={prod.nombre} />
                    <div className="card-body">
                      <h5 className="card-title">{prod.nombre}</h5>
                      <p className="card-text">{prod.categoria}</p>
                      <p className="card-text fw-bold text-danger">S/ {prod.precio}</p>
                      <button className="btn btn-primary w-100">Ver detalles</button>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}