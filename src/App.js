//React Router (v6)
import { Route, Routes } from "react-router-dom";


//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error404 from "./pages/Error404/Error404";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import { Provider } from "./service/Context";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
    <Provider>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error404 />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements/:id" element={<FicheLogement />} />
      </Routes>
      </main>
      <Footer />
    </Provider>
    </div>
  );
}

export default App;
