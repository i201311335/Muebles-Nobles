import { repair, Pasos } from "@/assets/Imgs/reparaciones/";
import { Fade } from "react-awesome-reveal";

export default function Reparaciones() {

  return (
    <div>

      <section className="divscroll" >
        <Fade delay={300} >
          <div className="d-inline-flex rounded border border-3 m-4 ">
            <div className=" text-center align-content-center ">
              <h1 className="display-3"><strong>¡Devuelve la vida a tu mueble!</strong></h1>
              <p className="display-3">
                Contáctanos para reparar tu mueble, restaurando su belleza y
                funcionalidad. ¡Te ofrecemos un servicio rápido y de calidad!
              </p>
            </div>
            <img src={repair[1]} alt="Reparación de mueble" className="col-6 rounded-end" id="gradright" />
          </div>
        </Fade>
      </section>
      <Fade delay={450}>
        <div className="divscroll bg-light"/>
      </Fade>

      <div className="divscroll  bg-light" >
        <Fade fraction={1} delay={400}>
          <h1 className="display-1"><strong>Es muy sencillo</strong></h1>
        </Fade>
      </div>
      <Fade>
        <div className="divfalse" />
      </Fade>
      <div className="divscroll flex-column" style={{ backgroundImage: `url(${Pasos[1]})` }} >
        <div className="position-absolute">
          <h2 className="display-1">
            <strong>
              Paso 1:
            </strong>
          </h2>
          <Fade direction="left">
            Lo visitaremos para realizar las surgerencias necesarias.
          </Fade>
        </div>
      </div>
      <Fade>
        <div className="divfalse" />
      </Fade>
      <div className="divscroll flex-column" style={{ backgroundImage: `url(${Pasos[0]})` }} >
        <div className="position-absolute">
          <h2 className="display-1">
            <strong>
              Paso 2:
            </strong>
          </h2>
          <h2>
            Llevaremos tu sofá a nuestro taller
          </h2>
        </div>
      </div>
      <Fade delay={600}>
        <div className="divfalse bg-light" />
      </Fade>
      <div className="divscroll flex-column bg-light" style={{ backgroundImage: `url(${Pasos[1]})` }} >
        <div className="position-absolute">
          <h2 className="display-1 ">
            <strong>
              Paso 3: Repararemos los imperfectos
            </strong>
          </h2>
        </div>
      </div>

      <div className="divscroll flex-column" style={{ backgroundImage: `url(${Pasos[1]})` }} >
        <div className="position-absolute">
          <h2 className="display-1">
            <strong>
              Paso 4: Realizaremos un control de calidad
            </strong>
          </h2>
        </div>
      </div>

      <div className="divscroll flex-column" style={{ backgroundImage: `url(${Pasos[1]})` }}  >
        <div className="position-absolute">
          <h2 className="display-1">
            <strong>
              Paso 5: Entregamos tu sofá a domicilio
            </strong>
          </h2>
        </div>
      </div>
      <Fade delay={900}>
        <div className="divfalse bg-black" />
      </Fade>

      <div className="divscroll h-screen bg-black w-100" >

        <div className="card border border-5 text-center p-5 border-danger shadow shadow-lg">
          <h1 className="display-3">Solicite el servicio <br />
            <h1 className="display-1 p-3">ahora</h1>
          </h1>
          <div>
            <button className="btn btn-danger  col-3"><strong> Ahora </strong></button>
          </div>
        </div>
      </div>

      <Fade>
        <div className="divfalse" />
      </Fade>
    </div>
  );
}
