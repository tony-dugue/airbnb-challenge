import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/" component={Home} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
