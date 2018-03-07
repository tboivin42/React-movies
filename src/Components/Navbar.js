import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  };

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="">Movie - TV Show</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">Films
              </a>
              <ul className="dropdown-menu">
                <li><a href="#">Prochaines sorties</a></li>
                <li><a href="#">Mieux notées</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">Series</a>
              <ul className="dropdown-menu">
                <li><a href="#">Prochaines sorties</a></li>
                <li><a href="#">Mieux notées</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;