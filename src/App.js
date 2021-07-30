import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollUpButton from './components/ScrollUpButton'
import Home from './components/Home'
import Navigationbar from './components/Navigationbar'
import Footer from './components/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>     
      <div className="App bg-dark">
        <Navigationbar />
        <ScrollUpButton />
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            {/* TODO: <Projects /> */}
          </Route>
          <Route exact path="/about-me">
            {/* TODO: <About /> */}
          </Route>
        </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
