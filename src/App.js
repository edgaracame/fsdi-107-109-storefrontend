import "bootstrap/dist//css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Catalog from "./components/catalog";
import About from "./components/about";
import Cart from "./components/cart";
import Admin from "./components/admin";
import Footer from "./components/footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="general">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
