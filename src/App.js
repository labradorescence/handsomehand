import React from 'react'
import './App.css';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {  
    return (
      <Router>
          <div className="App">
            <Nav />
            <Switch>

            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/" exact component={Home}/>

            </Switch>
          </div>
      </Router>
    )
}

export default App;
