import Home from "./pages/home/Home";
import Topbar from "./pages/topbar/Topbar";
import "./app.css"
import Design from "./pages/design/Design";
import About from "./pages/about/About";
import Touch from "./pages/touch/Touch";
import Footer from "./pages/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Design />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Touch />} />
          <Route path="/" element={<Footer />} />
         
        </Routes>

      </Router>

    </div>
  );
}

export default App;
