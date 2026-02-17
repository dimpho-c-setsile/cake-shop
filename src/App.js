import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';

function App() {
  return (<>
   <Navbar />
    <Routes>
       <Route path="/" element={<Home />} />
        {/* Auth */}
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/shop" element={<Shop />} />
       
    </Routes></>
  );
}

export default App;
