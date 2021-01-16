import React  from 'react';
import './App.css';
import NavBar from './components/nav-bar/index.js';
import 'h8k-components';


import {  Route, Switch } from 'react-router-dom';

import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import News from './components/News'

const title = "Navigation Bar";

function App() {
  return (
    <div>
      <h8k-navbar header={title} />
      <NavBar/>
      {/*Routes*/}
      
      <div className="card w-20 ma-0">
      <section className="card-text" data-testid="tab-content">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </section>
      </div>
    </div>
  );
}

export default App;
