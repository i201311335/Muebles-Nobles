import Clasic from '../assets/Imgs/sofa/clasic/';
import Ergo from '../assets/Imgs/sofa/ergos/';
import { Modern } from '../assets/Imgs/sofa/modern/';
import Carrusel from '../assets/Anims/Carrusel.jsx'
import { Fade } from 'react-awesome-reveal';

export default function Index() {

  return (
    <>
      <div className='row cardcat ' >
        <Fade duration={2000} className="col-10">
          <Carrusel sofa={Clasic} intervalo={5000} />
          <Fade  delay={1200} className='nomcat'>
            <h2 className="text-warning display-1 mt-5">Clásico</h2>
            <p className=" mt-3">Aquí puedes encontrar una lista de nuestros productos disponibles.</p>
          </Fade>
        </Fade>
          
      </div>

      <div  className="row my-5 cardcat ">
        <Fade duration={2000} className="col-10">
          <Carrusel sofa={Ergo} intervalo={5000} />
        </Fade>
        <Fade  delay={1200} className='nomcat'>
          <h2 className="text-warning text-center display-1 mt-5">Moderno</h2>
          <p className="text-center mt-3">Selecciona un producto para ver más detalles.</p>
        </Fade>
      </div>

      <div  className="row cardcat">
        <Fade duration={1000} className="col-10">
          <Carrusel sofa={Modern} intervalo={5000}/>
        </Fade>
        <Fade  delay={1200} className='nomcat justify-content-center'>
          <h2 className="text-warning text-center display-1 mt-5">Ergonómico</h2>
          <p className="text-center mt-3">Revisa los productos que has agregado a tu carrito.</p>
        </Fade>
      </div>
    </>
  );
}