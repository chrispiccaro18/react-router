import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Colors from './Colors';

export default function App() {
  return (
    <Router>
      <Header />
      <Route path="/:color" component={Colors} />
    </Router>
  );
}
