import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About';
import Home from './components/Home';
import { HashRouter as Router, Switch, Route, Routes, BrowserRouter } from "react-router-dom";


ReactDOM.render(<App />, document.getElementById("root"));

<Router>
<Routes>
  <Route exact path="/home" element={ <Home />} />
  <Route exact path="/Projects" element={<Projects  />} />
  <Route exact path="/About" element={<About/>} />
  <Route exact path="/Contact" element={<Contact/>} />

</Routes>
</Router>