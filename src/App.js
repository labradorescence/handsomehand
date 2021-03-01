import React from 'react'
import './App.css';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components'

const Button = styled.button`
  font-family: sans-serif;
  color: white;
  background-color: orange;
  padding: 200px;
  border-radius: 1000%
`

function App() {  

    return (
      <Router>
          <div className="App">
            <Nav />
            <Button> styled button </Button>

            <Switch>
            
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio" component={Portfolio}/>

            </Switch>
          </div>
      </Router>
    )
}

export default App;
