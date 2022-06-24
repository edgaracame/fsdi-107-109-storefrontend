import logo from "./logo.svg";
import "bootstrap/dist//css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar";
import Catalog from "./components/catalog";
import Footer from "./components/footer";

function App() {
  return (
    <div className="general">
      <Navbar></Navbar>
      <div className="App">
        <p className="welcome">Welcome!</p>
        <Catalog></Catalog>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
