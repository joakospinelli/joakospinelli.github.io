import Header from './components/Header';
import SobreMi from './components/SobreMi';
import Educacion from './components/Educacion';
import Proyectos from './components/Proyectos';
import ExperienciaLaboral from './components/ExperienciaLaboral';
import Contacto from './components/Contacto';
import Presentacion from './components/items/Presentacion';
import Competencias from './components/items/Competencias';
import ProyectoItem from './components/items/ProyectoItem';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="" element={ <SobreMi/> }>
            <Route exact path="" element={ <Presentacion/> }></Route>
            <Route path="competencias" element={ <Competencias/> }></Route>
          </Route>
          <Route path="educacion" element={ <Educacion/> }></Route>
          <Route path="explaboral" element={ <ExperienciaLaboral/> }></Route>
          <Route path="proyectos" element={ <Proyectos/> }>
            <Route exact path="" element={ <Navigate replace to="0"/> }/>
            <Route path=":proyectoId" element={ <ProyectoItem/> }></Route>
          </Route>
          <Route path="contacto" element={ <Contacto/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
