import PswReveal from "../../assets/Components/Content/PswReveal";

export default function IngresarI() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center shadow border rounded">
                <div className=" bg-light p-5 ">
                    <h2 className="text-center "><i className="bi bi-buildings" /> Intranet </h2>
                    <form>
                        <div className="row mb-3 ">
                            <label htmlFor="email" className="form-label">Usuario</label>
                            <div className="input-group ">
                                <i className="input-group-text bi bi-people" />
                                <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
                            </div>

                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <div className="input-group">
                                <PswReveal name="password" />
                            </div>
                        </div>
                        <div className="text-center p-3"> 
                            <button type="submit" className="btn btn-dark ">Iniciar Sesión</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}