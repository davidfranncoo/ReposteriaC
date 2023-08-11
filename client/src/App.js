import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../src/component/Home/home"
import Register from "../src/component/Register/Register"
import Carrito from "../src/component/Carrito/carrito"
import Productos from "../src/component/Productos/producto"
import Admin from "../src/component/Admin/admin"
import DetailCard from './component/DetailsCard/detailcard';
import Prueba from './component/Prueba/prueba';
import SingUp from './component/SignUp/singup';
import Login from './component/Login/login';
import Inicio from './component/Inicio/inicio';

function App() {
  return (
    <Router>
    <div >
 
   <Switch>
          <Route exact path="/" component={Inicio}/>

          <Route exact path="/login" component={Login}/>
          <Route exact path="/singup" component={SingUp}/>
          <Route exact path="/home" component={Home}/>

          <Route exact path="/register" component={Register}/>
          <Route exact path="/carrito" component={Carrito}/>
          <Route exact path="/product/:category" component={Productos}/>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/detail/:id" component={DetailCard}/>
          <Route exact path="/prueba" component={Prueba}/>
      
   </Switch>    
    </div>
    </Router>
  );
}

export default App;
