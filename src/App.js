import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollUpButton from "./components/ScrollUpButton";
import Music from "./components/Music";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Biography from "./components/Biography";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App bg-dark">
        <Navigationbar />
        <ScrollUpButton />
        <div className="content">
          <Switch>
            <Route exact path={["/", "/music", "/home", "/index"]}>
              <Music />
            </Route>
            <Route exact path="/projects">
              {/* TODO: <Projects /> */}
            </Route>
            <Route exact path="/biography">
              <Biography />
            </Route>
            <Route path="/about">
              <AboutMe />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
