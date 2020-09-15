import React from "react";
import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Apple from "./pages/Apple";
import Samsung from "./pages/Samsung";
import Asus from "./pages/Asus";
import Motorola from "./pages/Motorola";
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Details from './pages/Details'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/apple" component={Apple} />
          <Route path="/asus" component={Asus} />
          <Route path="/samsung" component={Samsung} />
          <Route path="/motorola" component={Motorola} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/contato" component={Contato} />
          <Route path="/login" component={Login} />
          <Route path="/carrinho/:id" component={Cart} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
