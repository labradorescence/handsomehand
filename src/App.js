import React from 'react'
import Home from './components/Home';
import Portfolio from './components/Portfolio';

import About from './components/About';
import Contact from './components/Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

function App() {  

    return (
      <Router>
          <section className="app">

            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio" component={Portfolio}/>
            </Switch>

          </section>
      </Router>
    )
}

export default App;
