import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Page from './Page';
import Basket from './Basket';
import Footer from './Footer';
import ContactsPage from './Contacts';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/film/:name'component={Page} />
          <Route exact path='/basket' component={Basket}/>
          <Route exact path='/contacts' component={ContactsPage}/>
          <Route render ={ ()=>(
            <div>
              EROR 404
            </div>
          )}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
