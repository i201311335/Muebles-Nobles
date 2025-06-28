import { bgcards, aboutImages } from '@/assets/Imgs/about'

export default function About() {
    return (
        <div className='d-flex flex-column gap-5 py-5 '>
            <div className='card d-flex flex-row-reverse bg-white border border-warning m-5'>
                <img src={aboutImages[0]} alt="" className='col-5' id='gradright' />
                <section className='py-5 ps-3'>
                    <blockquote className='ps-5 blockquote fs-3'>
                        En <strong>Muebles Nobles</strong>  nacimos de un simple propósito: transformar hogares en refugios de comodidad. Hace más de 5 años,
                        comenzamos como un pequeño taller familiar apasionado por el diseño y la calidad.
                        Hoy, combinamos tradición artesanal con tecnología moderna para ofrecer sofás que no solo decoran, sino que abrazan.
                        Porque para nosotros, un sofá no es solo un mueble, es el epicentro de los momentos que importan."
                    </blockquote>
                </section>
            </div>
            <div className='card d-flex flex-row m-5 border border-warning'>
                <img src={aboutImages[3]} alt="" id='gradleft' className='col-5 position-relative'/>
                <section className='py-5 ps-3'>
                    <blockquote className='pe-5 blockquote fs-5 position-relative '>
                        <h3>Lo que nos diferencia.. </h3>
                        En un mercado lleno de opciones, sabemos que los detalles marcan la diferencia. <br /> Por eso, en <strong>Muebles Nobles</strong> no solo vendemos sofás, creamos experiencias:
                        <br />
                        🛠️ Calidad Artesanal: Cada sofá es fabricado cuidadosamente, combinando técnicas tradicionales con materiales de primera. <br />
                        🎨 Diseño Personalizable: Tú eliges el color, la tela y los detalles. Creamos un sofá que refleja tu estilo. <br />
                        🌿 Compromiso Sostenible: Nos importa el planeta. Por eso, seleccionamos materiales responsables y procesos amigables con el medio ambiente. <br />
                        🚚 Envío Seguro y Rápido: Sabemos que quieres disfrutar tu sofá pronto. Te lo entregamos en la puerta de tu casa, rápido y seguro. <br />
                    </blockquote>
                </section>
            </div>
            <div className='container bg-white rounded-4 border border-3 border-warning text-center border-opacity-50 shadow-sm py-4' style={{background: "linear-gradient(135deg, #fffbe6 0%, #f8f9fa 100%)"}}>
                <h2 className="text-danger mb-4 display-3">Nuestros valores</h2>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 px-3'>
                    <div className='d-grid p-3 rounded-3 bg-light shadow-sm h-100 hover-shadow'>
                        <h3 className='text-danger pt-3 display-6'>Calidad</h3>
                        <span className='pt-3 ps-2 text-secondary'>
                            Cada producto pasa por un riguroso proceso de selección para garantizar su durabilidad,
                            funcionalidad y estética, convirtiéndose en una inversión a largo plazo para tu hogar.
                        </span>
                        <div className='p-4'>
                            <img src={bgcards[0]} className='img-fluid opacity-25 rounded-3 border border-warning' alt="" />
                        </div>
                    </div>
                    <div className='d-grid p-3 rounded-3 bg-light shadow-sm h-100 hover-shadow'>
                        <h3 className='text-danger pt-3 display-6'>
                            Compromiso
                        </h3>
                        <span className='pt-3 text-secondary'>
                            Nos esforzamos por brindar un servicio transparente, cercano y eficiente,
                            acompañándote en cada etapa del proceso de compra y garantizando que tu experiencia sea positiva y confiable.
                        </span>
                        <div className='p-4'>
                            <img src={bgcards[1]} className='img-fluid opacity-25 rounded-3 border border-warning' alt="" />
                        </div>
                    </div>
                    <div className='d-grid p-3 rounded-3 bg-light shadow-sm h-100 hover-shadow'>
                        <h3 className='text-danger pt-3 display-6'>
                            Accesibilidad
                        </h3>
                        <span className='pt-3 text-secondary'>
                            Ofrecemos una amplia gama de muebles a precios competitivos,
                            permitiendo que todas las personas puedan transformar sus espacios sin sacrificar estilo ni comodidad.
                        </span>
                        <div className='p-4'>
                            <img src={bgcards[2]} className='img-fluid opacity-25 rounded-3 border border-warning' alt="" />
                        </div>
                    </div>
                    <div className='d-grid p-3 rounded-3 bg-light shadow-sm h-100 hover-shadow'>
                        <h3 className='text-danger pt-3 display-6'>
                            Sostenibilidad
                        </h3>
                        <span className='pt-3 text-secondary'>
                            Nos preocupa el impacto ambiental, por eso elegimos proveedores y materiales que promueven la responsabilidad ecológica.
                        </span>
                        <div className='p-4'>
                            <img src={bgcards[0]} className='img-fluid opacity-25 rounded-3 border border-warning' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}