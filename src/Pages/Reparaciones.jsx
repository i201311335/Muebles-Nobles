import { repair, Pasos } from "@/assets/Imgs/reparaciones/";

export default function Reparaciones() {
  return (
    <div className="container">
      <section className="card">
        <div className="d-inline-flex ">
          <div className="p-5 col-6 text-center align-content-center">
            <h2>¡Devuelve la vida a tu mueble!</h2>
            <p>
              Contáctanos para reparar tu mueble, restaurando su belleza y
              funcionalidad. ¡Te ofrecemos un servicio rápido y de calidad!
            </p>
          </div>
          <img src={repair[1]} alt="Reparación de mueble" className="w-50" />
        </div>
      </section>

      <section className="container">
        <h2>¿Cómo lo hacemos?</h2>

        <div className="d-grid">
          <div className="">
            <div className="">
              <img
                src={Pasos[0]}
                alt="Recogemos el mueble"
                className="step-img"
              />
            </div>
            <div>
              <h2 className="text-black">Paso 1: Recogemos tu mueble</h2>
            </div>
          </div>

          <div className="">
            <div className="">
              <img
                src={Pasos[1]}
                alt="Restauramos el mueble"
                className="step-img"
              />
            </div>
            <div className="card bg-white">
              <h2 className="text-black">
                Paso 2: Restauramos los desperfectos
              </h2>
            </div>
          </div>

          <div className="">
            <div className="">
              <img
                src={Pasos[2]}
                alt="Entregamos el mueble"
                className="step-img"
              />
            </div>
            <div className="card bg-white">
              <h2 className="text-black  ">
                Paso 3: Entregamos tu mueble reparado
              </h2>
            </div>
          </div>

          <div className="">
            <div>
              <img src={Pasos[3]} alt="" className="step-img" />
            </div>
            <div className="card bg-white">
              <h2 className="text-black">
                Paso 4: Pasar por un control de calidad
              </h2>
            </div>
          </div>

          <div>
            <div>
              <img src={Pasos[4]} alt="" className="step-img" />
            </div>
            <div className=" card bg-white">
              <h2 className="text-black">
                Paso 5: Entrega del sofá a su domicilio
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
