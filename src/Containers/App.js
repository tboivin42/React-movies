import React, { Component } from 'react';
import Home from './Home';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { connect } from 'react-redux';

import { loadMovies } from '../actions';

class App extends Component {
  componentWillMount() {
    const { loadMovies } = this.props;
    loadMovies();
  }
  
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>);
    }
  }

const mapDispatchToProps = {
  loadMovies,
};
  
export default connect(null, mapDispatchToProps)(App);