
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import {Routes, Route} from "react-router-dom"
import Detail from './component/Detail';
import Cart from './component/Cart';

function App() {
  return (
  <>
  <Navbar />
  <Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/products/:id" element={<Detail />} />
  <Route path="/chart" element={<Cart />} />
  </Routes>
  </>
  );
}


export default App;
