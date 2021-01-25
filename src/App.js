import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';
import Rate from './rate/Rate';
import Aboute from './aboute/Aboute';
import Contacts from './contacts/Contacts';
import Return from './return/Return';
import Servis from './servis/Servis';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: {
        '/': 'Главная',
        '/aboute': 'О нас',
        '/contacts': 'Контакты',
        'return': 'Условия возврата',
        '/servis': 'Соглашение о использовании сервиса',
      },
      isOpen: false,
    }
  }
  show = () => {
    this.setState({ isOpen: true })
  }

  render() {

    return (
      <div className='site'>
        <Header nav={this.state.nav} />

        <div className="container">
          <main>
            <Router>
              <Switch>
                <Route exact path='/' component={Rate} />
                <Route exact path='/aboute' component={Aboute} />
                <Route exact path='/contacts' component={Contacts} />
                <Route exact path='/return' component={Return} />
                <Route exact path='/servis' component={Servis} />
              </Switch>
            </Router>

          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well" hidden={this.state.isOpen} >На нашем сайте мы используем cookie для сбора информации технического характера.<br />В
                  частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
            местоположения.&nbsp;<button className="btn btn-primary btn-sm" onClick={this.show}>OK</button></div>
          </div>
        </div>


        <Footer nav={this.state.nav} />

      </div >

    );
  }
};

export default App;
