import React, { Component } from 'react';
import './stylesheets/scss/main.scss';
import Footer from './components/Footer';
import Header from './components/Header.js';
import ContainerCard from './components/ContainerCard.js';
import CollapsableContainer from './components/CollapsableContainer';
import dataBack from './services/DataBack';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        dataBack: dataBack
    }
}
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
              <ContainerCard dataBack={this.state.dataBack} />
            </div>

          <CollapsableContainer />  

        </main>

      <Footer />
        
      </div>
    );
  }
}

export default App;
