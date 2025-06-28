import { mSofa } from '@/assets/Imgs/sofa/modern/';
import { banners } from '@/assets/Imgs/banners';

export default function Home() {
    return (
        <div className='d-flex flex-column justify-content-center gap-5 p-5'>

            <div className='container '>
                <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000" >
                            <img src={banners[0]} className="img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="10000" >
                            <img src={banners[2]} className="img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="10000" >
                            <img src={banners[3]} className="img-fluid" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className='col col-10 bg-secondary mx-auto'>
                <h1 className='text-center p-3'>Productos destacables</h1>
                <div className='row row-cols-5 justify-content-center '>
                    <div >
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
            </div>

            

        </div>
    );
}