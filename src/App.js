import React, { Component } from 'react';
import './stylesheets/scss/main.scss';
import Footer from './components/Footer';
import Header from './components/Header.js';
import ContainerCard from './components/ContainerCard.js';
import CollapsableContainer from './components/CollapsableContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main className="created__target">
          
          
              <ContainerCard />
            
      
          <CollapsableContainer />  

        </main>

      <Footer />
        
      </div>
    );
  }
}

export default App;
