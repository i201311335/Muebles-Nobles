export default function IngresarU() {
    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
            <h2 className="text-center">Iniciar Sesión</h2>
            <form>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
                </div>
                <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
            </form>
            </div>
        </div>
        </div>
    );
}