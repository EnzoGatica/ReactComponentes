import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponentes } from './TercerComponentes';
import { EventosComponentes } from './EventosComponentes';


function App() {

  const ficha_medica = {
    altura: "171cm",
    grupo: "O+",
    estado: "Bien"
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testeando
        </p>

        <div className='componentes'>
          <hr/>
          <EventosComponentes/>
          {/* ---------- */}
          <TercerComponentes
            nombre = "Enzo"
            apellido = "Gatica"
            ficha = {ficha_medica}
          />
          <hr></hr>
          <MiComponente/>
          <hr></hr>
           <SegundoComponente/>
           <hr></hr>
           
        </div>

        
      </header>
    </div>
  );
}

export default App;
