export default function FormFooter() {
  return (
    <form  action="" method="post" >
      <div className="d-grid row-gap-2 p-2">

        <div className="row justify-content-center">
          <div className="input-group input-group-sm w-75">
            <span className="input-group-text opacity-75 border-warning" id="basic-addon1"><i className="bi bi-envelope"/></span>
            <input type="email" className="form-control input-group-sm opacity-75 border-warning shadow-none" placeholder="Correo electrónico" aria-label="Email" />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="input-group input-group-sm w-75">
            <div className="col col-6 opacity-75 ">
                <select className="form-select form-select-sm border-warning">
                  <option value="0" >DNI</option>
                  <option value="1">Extranjería</option>
                  <option value="2">Pasaporte</option>
                </select>
            </div>
            <div className="col col-6">
                <input type="number" className="form-control form-control-sm opacity-75 border-warning shadow-none text-center" placeholder="Número" />
            </div>
            </div>
        </div>

      </div>
      
      <div className="row justify-content-center pt-3">
        <div className="form-check  col-10 text-center">
          <input className="form-check-input" type="checkbox" value="" />
          <p className="form-check-label" > He leído y acepto las politicas del uso de mis datos de privacidad </p>
        </div>
      </div>

      <div className="d-flex justify-content-center pb-3">
        <button type="submit" className="btn bg-white bg-opacity-75 text-danger btn-sm text-secondary">Enviar</button>
      </div>

    </form>
  );
}