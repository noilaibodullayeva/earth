import Home from "./pages/home/Home";
import Topbar from "./pages/topbar/Topbar";
import "./app.css"
import Service from "../src/components/services/Services"
import AboutCompo from "../src/components/aboutCompo/AboutCompo"
import Contact from "../src/components/contact/Contact"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="about" element={<AboutCompo />} />
          <Route path="/contact" element={<Contact />} />   
        </Routes>

      </Router>

    </div>
  );
}

export default App;
