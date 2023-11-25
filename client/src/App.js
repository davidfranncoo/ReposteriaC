
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/component/Home/home';
import Register from '../src/component/Register/Register';
import Carrito from '../src/component/Carrito/carrito';
import Productos from '../src/component/Productos/producto';
import Admin from '../src/component/Admin/admin';
import DetailCard from './component/DetailsCard/detailcard';
import SingUp from './component/SignUp/singup';
import Login from './component/Login/login';
import CardProduct from './component/CardProduct/carsProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<CardProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/product/:category" element={<Productos />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detail/:id" element={<DetailCard />} />
      </Routes>
    </Router>
  );
}

export default App;
