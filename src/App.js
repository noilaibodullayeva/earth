import Home from "./pages/home/Home";
import Topbar from "./pages/topbar/Topbar";
import "./app.css"
import Design from "./pages/design/Design";
import About from "./pages/about/About";
import Touch from "./pages/touch/Touch";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div className="App">
     <Topbar/>
     <Home/>
     <Design/>
     <About/>
     <Touch/>
     <Footer/>
    </div>
  );
}

export default App;
