import { mSofa } from '@/assets/Imgs/sofa/modern/';

export default function Home() {
    return (
        <>
            <section className=' justify-content-center '>
                <div id="carouselExampleCrossfade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={mSofa[0] } className="d-block w-25"  alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={mSofa[1]}  className="d-block w-25" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={mSofa[2]}  className="d-block w-25" alt="..."/>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section className='col col-10 bg-secondary mx-auto'>
                <h1 className='text-center'>Productos destacables</h1>
                <div className='row row-cols-5 justify-content-center '>
                    <div className=''>
                        <div className='card  w-100'>
                            <img src={mSofa[0]} alt="" className='' />
                            <p>Hola hola</p>      
                        </div>
                    </div>
                    <div className=''>
                        <div className='card  w-100'>
                            <img src={mSofa[1]} alt="" className='' />
                            <p>Hola hola</p>      
                        </div>
                    </div>
                    <div className=''>
                        <div className='card  w-100'>
                            <img src={mSofa[0]} alt="" className='' />
                            <p>Hola hola</p>      
                        </div>
                    </div>
                    <div className=''>
                        <div className='card  w-100'>
                            <img src={mSofa[1]} alt="" className='' />
                            <p>Hola hola</p>      
                        </div>
                    </div> 
                </div>
            </section>
            
            <br />

            <section>
                <div className='col col-10 bg-black'>
                    <div className='row row-cols-2'>
                        <img src={mSofa[1]} alt="" />
                    </div>
                    
                </div>
            </section>

            <br />

            <section>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
            </section>
        </>
    );
}