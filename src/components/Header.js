import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarHeader, NavbarBrand, NavbarToggler , Collapse   } from 'reactstrap';

class Header extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return(
      <header className='header'>
        <Navbar className="navbar navbar-expand-lg">
          <NavbarBrand>
            <NavLink className="navbar-brand" exact to='/'>
              <img src='https://ubisafe.org/images/camera-drawing-old-time-5.png'/>
            </NavLink>
          </NavbarBrand>
          <NavbarToggler id="navToggler" className="navToggler" onClick={this.toggle}>&equiv;</NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <NavLink className="nav-item" activeClassName="activeLink" exact to='/'>Анонси</NavLink>
            <NavLink className="nav-item" activeClassName="activeLink" to='/basket'>Кошик</NavLink>
            <NavLink className="nav-item" activeClassName="activeLink" to='/contacts'>Контакти</NavLink>
          </Collapse>
        </Navbar>
      </header>

    )
  }
}

export default Header;
