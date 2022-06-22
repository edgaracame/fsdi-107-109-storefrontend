import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="App">
        <h1>Welcome!</h1>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
