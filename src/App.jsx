import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import Servicespage from "./components/Servicespage";
import Contactpage from "./components/Contactpage";
import EstimateYourProject from "./components/EstimateYourProject";
import Servicepage from "./components/Servicepage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/services/:id" element={<Servicepage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route
          path="/estimate-your-project"
          element={<EstimateYourProject />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
