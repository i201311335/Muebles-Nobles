export default function IngresarI() {
    return (
        <>  
            <div className="container">
                <div className="row justify-content-center align-items-center ">
                    <div className="col col-8 bg-light p-5 shadow border rounded">
                    <h2 className="text-center text-dark">Iniciar Sesión</h2>
                        <form>
                            <div className="mb-3 col-6">
                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" />
                            </div>
                            <a href="/"></a>
                            <button type="submit" className="btn btn-primary ">Iniciar Sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}