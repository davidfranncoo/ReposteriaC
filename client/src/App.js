
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/component/Home/home';
import Carrito from '../src/component/Carrito/carrito';
import Productos from '../src/component/Productos/producto';
import Admin from '../src/component/Admin/admin';
import DetailCard from './component/DetailsCard/detailcard';
import SingUp from './component/SignUp/singup';
import Login from './component/Login/login';
import CardProduct from './component/CardProduct/carsProduct';
import NotFoundPage from './component/NotFound/notfound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<CardProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/product/:category" element={<Productos />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detail/:id" element={<DetailCard />} />
         {/* Ruta 404 */}
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
