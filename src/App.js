import React from 'react'
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

function App() {  

    return (
      <Router>
          <div className="App">

            <Nav />

            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio" component={Portfolio}/>
            </Switch>

            <Footer />

          </div>
      </Router>
    )
}

export default App;
