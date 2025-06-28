import { useLocation } from 'react-router-dom';
import Header from '@/assets/Components/Header';
import Content from '@/assets/Components/Content';
import Footer from '@/assets/Components/Footer';
import { bg } from '@/assets/Imgs/';



export default function Body() {

  const location = useLocation();
  const isReparaciones = location.pathname == '/Reparaciones'
  const isIngresarU = location.pathname === '/IngresarU';
  const isIngresarI = location.pathname === '/IngresarI';
  const isRegistro = location.pathname === '/Registro';
  
  
  return (
    <>
      <Header />
      <main style={isReparaciones ? {backgroundImage: 'none'} : { backgroundImage: `url(${bg[0]})` }}>
        <div />
        <div className={isIngresarU || isIngresarI || isRegistro ? 'content-form' : 'content-web'}>
          <Content/>
        </div>
        <Footer /> 
      </main>
    </>
  );
}
