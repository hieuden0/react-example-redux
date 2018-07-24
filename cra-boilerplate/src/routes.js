import React from 'react';
import { Route, Switch } from 'react-router';

// Import modules/routes
import Home from './home';
import About from './about';
import PageNotFound from './common/components/PageNotFound';
import News from './news';
import Product from './products';

export default (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/news" component={News}/>
    <Route path="/products" component={Product}/>
    <Route component={PageNotFound} />
  </Switch>
);