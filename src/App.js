import React, { Component } from 'react';
import './stylesheets/scss/main.scss';
import Header from './components/Header.js';
import ContainerCard from './components/ContainerCard.js';
import CollapsableContainer from './components/CollapsableContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main className="created__target">
          
            <div className="container__width">
              <button className="button__reset" type="reset">
                <i className="far fa-trash-alt"></i>
                <span className="button">Reset</span>
              </button>
              <ContainerCard />
            </div>
            
          <CollapsableContainer />  
        </main>
        
        <footer>
          <section className="footer__section">
            <p className="footer__text-reg">
              Awesome profile-cards &copy;2018
            </p>
            <div className="footer__conection-logo">
            </div>
          </section>
        </footer>
      </div>
    );
  }
}

export default App;
