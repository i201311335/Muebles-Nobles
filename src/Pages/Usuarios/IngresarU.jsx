import { mSofa } from '@/assets/Imgs/sofa/modern/';

export default function IngresarU() {
    return (
        <>  
            <section className="row col-8 g-0 bg-white border rounded">
                <div className="col col-7  p-5 pe-0 shadow-lg-white">
                    <div className="row justify-content-center">
                        <h2 className="text-center text-dark">Iniciar Sesión</h2>  
                        <form className="col col-8 p-5 text-center">
                            <div className="mb-3 text-start">
                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
                            </div>
                            <div className="mb-3 text-start">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" />
                            </div>
                            <div className="mb-3">
                                <a href="/">¿Olvidaste tu contraseña?</a>
                            </div>
                            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>  
                        </form>
                        <p className="text-center">¿No tienes una cuenta? <a href="/Registro">Regístrate aquí</a></p>
                        <div >
                            <p className="text-center">O inicia sesión con:</p>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-outline-primary me-2"><i className="bi bi-facebook"></i> Facebook</button>
                                <button className="btn btn-outline-danger"><i className="bi bi-google"></i> Google</button>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={mSofa[0]} className='col col-5 imgform ' alt="" />
            </section>
        </>
    );
}