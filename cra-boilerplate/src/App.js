import React, { Component } from "react";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// routes
import routes from './routes';

// common components
import Header from './common/components/Header'
import Footer from './common/components/Footer'

import Slideout from 'slideout';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {

  componentDidMount() {
    var self = this;
		this.slideout = new Slideout({
			'panel': document.getElementById('panel'),
			'menu': document.getElementById('menu'),
			'padding': 256,
			'tolerance': 70
    });
    
    this.slideout
      .on('beforeopen', function() {
        this.panel.classList.add('panel-open');
      })
      .on('open', function() {
        $(".hamburger-menu").addClass("change");
      })
      .on('beforeclose', function() {
        this.panel.classList.remove('panel-open');        
      })
      .on('close',function(){
          $(".hamburger-menu").removeClass("change");
      });
  }

  close(eve, slideout) {
    eve.preventDefault();
  }
  
  	
	toggleNative(x) {
		this.slideout.toggle();
	}

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <div>
              <nav id="menu" className="menu slideout-menu slideout-menu-left">
                  <header>
                      <h2>Menu</h2>
                  </header>
                  <section className="menu-section">
                    <h3 className="menu-section-title">Docs</h3>
                    <ul className="menu-section-list">
                      <li><a href="https://github.com/mango/slideout#installation" target="_blank">Installation</a></li>
                      <li><a href="https://github.com/mango/slideout#usage" target="_blank">Usage</a></li>
                      <li><a href="https://github.com/mango/slideout#api" target="_blank">API</a></li>
                      <li><a href="https://github.com/mango/slideout#npm-scripts" target="_blank">npm-scripts</a></li>
                    </ul>
                  </section>

                  <section className="menu-section">
                    <h3 className="menu-section-title">Slideout</h3>
                    <ul className="menu-section-list">
                      <li><a href="https://github.com/mango/slideout" target="_blank">Fork it</a></li>
                      <li><a href="https://github.com/mango/slideout/issues/new" target="_blank">Create an issue</a></li>
                      <li><a href="https://github.com/mango/slideout/releases/">Download</a></li>
                    </ul>
                  </section>

                  <section className="menu-section">
                    <h3 className="menu-section-title">Mango</h3>
                    <ul className="menu-section-list">
                      <li><a href="https://getmango.com" target="_blank">About Mango</a></li>
                      <li><a href="https://twitter.com/getmango" target="_blank">Follow Us</a></li>
                    </ul>
                  </section>
              </nav>

              <main id="panel" className="slideout-panel slideout-panel-left panel-open">
                <div className="container">
                  <div className="hamburger-menu hidden-sm hidden-md hidden-lg" onClick={this.toggleNative.bind(this)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                  </div>
                  <Header />
                  <div className="wrap">
                    {routes}
                  </div>
                  <Footer />
                </div>          
              </main>              
            </div>           
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
