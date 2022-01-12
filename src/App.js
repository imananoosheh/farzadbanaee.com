import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { React, useState, useEffect} from "react";
// import axios from "axios";
import ScrollUpButton from "./components/ScrollUpButton";
import Music from "./components/Music";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Biography from "./components/Biography";
import AdminLogin from "./components/AdminLogin";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function App() {
  library.add(far, fab, faEdit);

  // const [screen, setScreen] = useState("auth");
  // const [username, setUsername] = useState();
  // const [password, setPassword] = useState();

  // const auth = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const res = await axios.get("http://localhost:3001/authenticate", {
  //       auth: { username, password },
  //     });

  //     if (res.data.screen !== undefined) {
  //       setScreen(res.data.screen);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const readCookie = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3001/read-cookie");

  //     if (res.data.screen !== undefined) {
  //       setScreen(res.data.screen);
  //     }
  //   } catch (e) {
  //     setScreen("auth");
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   readCookie();
  // }, []);

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
            <Route path="/admin-login">
              <AdminLogin />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
