import { Link } from "react-router-dom";
import PswReveal from "../../assets/Components/Content/PswReveal";
import { useState } from "react";

export default function Registro() {
  
  const [passwordA, setPasswordA] = useState("")
  const [passwordB, setPasswordB] = useState("")

  function Pswconfirm() {
    if (passwordA && passwordB && passwordA !== passwordB)
    { 
      return(
        <span className="bi bi-exclamation-triangle"> Las contraseñas deben coincidir</span>)
      }
    return null
  }

  return (
    <div className="container bg-white rounded border border-primary p-4">
      <h2 className="text-center text-primary ">Registro</h2>
      <form className="needs-validation" >
        <div className="row m-5 ">

          <div className="col-7 ">
            
            <div className="col-6 my-2">
              <label className="form-label">Nombre</label>
              <input type="text" required className="form-control col-3 " />
            </div>
            <div className="col-6 my-2">
              <label className="form-label">Apellido</label>
              <input type="text" required className="form-control" />
            </div>
            <div className="col-6 my-2">
              <label className="form-label ">Documento</label>
              <div className="input-group gap-2">
                <div className="col-5">
                  <select className="form-select">
                    <option value="1">DNI</option>
                    <option value="2">Extranjería</option>
                    <option value="3">Pasaporte</option>
                  </select>
                </div>
                <input type="text" className="form-control rounded" />
              </div>
            </div>
            <div className="col-6 my-2">
              <label className="form-label" for="validationCustomUsername">Correo</label>
              <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              <div class="valid-feedback">
                Por favor, indique un correo
              </div>
            </div>
            
            
            <div className="col-6">
              <label for="PasswA">Contraseña</label>
              <div className="input-group my-2">
                <PswReveal name="passwordA" id="PasswA" value={passwordA} onChange={e => setPasswordA(e.target.value)} />
              </div>
              <div class="alert alert-danger bg-transparent border-0 p-0" role="alert">
                  {Pswconfirm()}
              </div>
            </div>
            <div className="col-6">
              <label for="PasswB">Confirmar contraseña</label>
              <div className="input-group my-2">
                <PswReveal name="passwordB" id="PasswB" value={passwordB} onChange={e=> setPasswordB(e.target.value) } />
              </div>
              <div class="alert alert-danger bg-transparent border-0 p-0" role="alert">
                  {Pswconfirm()}
              </div>
            </div>
            <div className="col-6 my-2">
              <label className="form-label">Telefono</label>
              <div className="input-group">
                <span className="input-group-text">+51</span>
               <input type="tel" maxLength={8} required className="form-control" /> 
              </div>
              
            </div>
          </div>

          <div className="col-5 justify-content-center">
              <div class="mb-3 col-5">
                <label for="Ciudad" class="form-label">Ciudad</label>
                <select class="form-select" id="Ciudad" >
                  <option defaultValue="selected">--Seleccionar--</option>
                  <option value="1">Lima</option>
                  <option value="2">Callao</option>
                  <option value="3">Arequipa</option>
                </select>
              </div>
            <div class="mb-3 col-5">
              <label for="Distrito" class="form-label">Distrito :</label>
              <select class="form-select" id="Distrito" >
                <option defaultValue="selected" >--Seleccionar--</option>
                <option value="1">New Delhi</option>
                <option value="2">Istanbul</option>
                <option value="3">Jakarta</option>
              </select>
            </div>
            
            <div className="col-12 my-2">
              <label for="dir" className="form-label">
                Dirección :
              </label>
              <input type="text" className="form-control" id="dir" />
            </div>
            <div className="col-12">
              <label for="Referencia" className="form-label">
                Referencia :
              </label>
              <textarea className="form-control" id="Referencia" aria-label="With textarea" />
            </div>
                <div className="col-12 my-3">
              <label className="form-label">Ubicación en Google Maps</label>
              <div style={{ width: "100%", height: "300px", borderRadius: "8px", overflow: "hidden" }}>
                <iframe
                  title="Ubicación en Google Maps"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.0000000000005!2d-77.0427936846341!3d-12.046373990000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c3b0b0b0b0%3A0x0!2zMTLCsDAyJzQ3LjAiUyA3N8KwMDInMzQuMCJX!5e0!3m2!1ses!2spe!4v1680000000000!5m2!1ses!2spe"
                />
              </div>
              </div>
          </div>
        </div>

        <div className="row justify-content-center ">
          <button type="submit" className="btn btn-primary btn-custom p-2 col-2 " >
            Enviar
          </button>
          <label className="mt-3 text-center">
            ¿Ya tienes cuenta?
            <Link to={"/IngresarU"}>Inicia sesión aquí</Link>
          </label>
        </div>

      </form>
      <div className="p-2">
        <p className="text-center">O Registrate con:</p>
        <div className="d-flex gap-3 justify-content-center">
          <button className="btn btn-outline-primary"><i className="bi bi-facebook"/> Facebook</button>
          <button className="btn btn-outline-danger"><i className="bi bi-google"/> Google</button>
          <button className="btn btn-outline-primary"> <i className="bi bi-microsoft"/> Microsoft </button>
        </div>
      </div>

    </div >
  );
}
