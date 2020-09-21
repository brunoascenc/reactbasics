import React from 'react';
import Header from './components/Header'
import Home from './pages/Home'
import Apple from "./pages/Apple";
import Samsung from "./pages/Samsung";
import Asus from "./pages/Asus";
import Motorola from "./pages/Motorola";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Pagamento from "./pages/Pagamento";
import Footer from './components/Footer'
import { DataProvider } from './data/DataProvider'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/apple" component={Apple} />
            <Route path="/asus" component={Asus} />
            <Route path="/samsung" component={Samsung} />
            <Route path="/motorola" component={Motorola} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route path="/details/:id" component={Details} />
            <Route path="/payment/:id" component={Pagamento} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
