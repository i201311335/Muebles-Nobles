import { Link } from 'react-router-dom';
import { logo } from '../Imgs';

//Esqueleto principal del Header.
//En la carpeta Header encontrarán los utensilios de esta parte, como: Buscador y Navegador. 
// Ya se imaginarán para que sirven.

export default function Header() {
  return (
    <header >
      <ul className='nav justify-content-end gap-3 p-2'>
        <Link className='nav-link' to={ "/IngresarU" }>
          <i className='bi bi-people' />Usuario
        </Link>
        <Link className='nav-link' to={ "/IngresarI" }>
          Intranet
        </Link>
      </ul>
      <div className="navbar justify-content-center align-items-end gap-5 pb-3 text-danger">
        <Link className='nav-link' to={ "/Catalogo" }>Catálogo</Link>
        <Link to="./"><img src={ logo[0] } className="logo " alt='logo' /> </Link>
        <Link className='nav-link' to={ "/Reparaciones" } >Reparaciones</Link>
      </div>
    </header>
  );
}
