import Home from "./pages/home/Home";
import Topbar from "./pages/topbar/Topbar";
import "./app.css"
import Design from "./pages/design/Design";
import About from "./pages/about/About";
import Touch from "./pages/touch/Touch";
import Footer from "./pages/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Design />
          <About />
          <Touch />
          <Footer />
        </Switch>

      </Router>

    </div>
  );
}

export default App;
