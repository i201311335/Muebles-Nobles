import { aboutImages } from '@/assets/Imgs/about/'
import { Link } from 'react-router-dom'
import PswReveal from '../../assets/Components/Content/PswReveal';





export default function IngresarU() {


    return (
        <>
            <section className="row col-9 g-0 bg-white border border-3 rounded">
                <div className="col-7  p-5 pe-0 shadow-lg-white">
                    <div className="row justify-content-center">
                        <h2 className="text-center text-dark">Iniciar Sesión</h2>
                        <form className=" col-8 p-5">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Usuario</label>
                                <div className='input-group'>
                                    <i className='input-group-text bi bi-people text-danger'/><input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
                                </div>
                            </div>
                            <label htmlFor="password" className='form-label'>Contraseña</label>
                            <div className="input-group mb-3 text-start">
                                <PswReveal name="password" />
                            </div>
                            <div className="mb-3 text-center">
                                <Link to={"./"}>¿Olvidaste tu contraseña?</Link>
                            </div>
                            <div className='text-center'>
                                <button type="submit" className="btn btn-dark">Iniciar Sesión</button>
                            </div>
                        </form>
                        <p className="text-center">¿No tienes una cuenta? <a href="/Registro">Regístrate aquí</a></p>
                        <div >
                            <p className="text-center">O inicia sesión con:</p>
                            <div className="d-flex gap-3 justify-content-center">
                                <button className="btn btn-outline-primary"><i className="bi bi-facebook"></i> Facebook</button>
                                <button className="btn btn-outline-danger"><i className="bi bi-google"></i> Google</button>
                                <button className="btn btn-outline-primary"> <i className="bi bi-microsoft" /> Microsoft </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={aboutImages[0]} className='col-5' id='gradright' alt="imguserdeco" />
            </section>
        </>
    );
}