import React  from "react";
import "./index.css";

import { Link, Route, Switch } from 'react-router-dom';

import Home from '../Home'
import Contact from '../Contact'
import About from '../About'
import News from '../News'



export default function NavBar() {

  return (
    <div className="layout-column justify-content-center align-items-center">
      <div className="layout-row justify-content-around align-items-center mt-20 links"
           data-testid="navigation-tabs">
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
      </div>

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