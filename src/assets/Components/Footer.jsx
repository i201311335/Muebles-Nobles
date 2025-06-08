import { Link } from 'react-router-dom';
import { logo , bg } from '@/assets/Imgs/';
import { FormFooter, SocialIcons } from '@/assets/Components/Footer/';
//Este es el esqueleto principal de Footer. En la carpeta Footer, encontrarán los "utensilios" que
//se incorpora, como FormFooter (Formulario del Pie), SocialIcons (Iconos de las Redes sociales).
export default function Footer() {
  return (
      <footer style={{ backgroundImage: `url(${bg[1]})` }}>
        <div className="d-flex justify-content-center border-top border-warning"  >  
            <div className="col col-3">
                <li className='pt-4 px-3'>
                    <h6 className='pt-2 text-center'><i className='bi bi-book' /> Acerca de nosotros</h6>
                </li>
    
                <ul className='list-unstyled px-5'>	
                    <li><Link to={ "/About" }>Nosotros</Link></li>
                    <li>Únete al equipo</li>
                    <li>Código de ética para proveedores</li>
                </ul>  
                <div className='d-flex justify-content-center'>
                    <img className=' w-75 logo' src={logo[1]} alt='logof' />
                </div>
                <p className='text-center px-4 pt-2'>© 2025 Grupo 3. <br /> Todos los derechos reservados.</p>
                <SocialIcons />
              </div> 
              
            <div className="d-grid col col-3 ">
                <li className='pt-4 px-3'>
                    <h6 className="pt-2 text-center"><i className='bi bi-person' /> Inscríbete al boletín</h6>
                </li>
                  <FormFooter />
                
                <div className="row justify-content-center align-content-end">
                    <div className='card text-center bg-black opacity-75 w-50 border-warning'>
                        <span className="text-primary">Cibertec</span>
                        <span className="text-warning">2025</span>
                    </div>
                </div> 
              </div>
              
            <div className="col col-3">
                <ul className=' pt-4 px-5'>
                    <li><h6 className="pt-2"><i className="bi bi-telephone" /> Contáctanos</h6></li>
                    <ul>
                        <li>Teléfono: +51 123 456 789</li>
                    </ul>
                    <li><h6 className="pt-2"><i className="bi bi-envelope" /> Escríbenos : </h6></li>
                    <ul>
                        <li><a href="mailto:gintegral@mnobles.com">ServicioAlCliente@mnobles.com</a></li>
                    </ul>
                    <li><h6 className="pt-2"><i className="bi bi-geo-alt" /> Visítanos:</h6></li>
                    <ul>
                        <li>Av. Ejemplo 123, Lima, Perú</li>
                    </ul>
                    <li><h6 className='pt-2'><i className="bi bi-clock"/> Horario de atención:</h6></li>
                    <ul>
                        <li>Lunes a Viernes: 9:00 AM - 6:00 PM</li>
                        <li>Sábados: 10:00 AM - 2:00 PM</li>
                        <li>Domingos: Cerrado</li>
                    </ul>                     
                </ul>
            </div>
        </div>
    </footer>
  );
}