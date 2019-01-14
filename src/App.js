import React, { Component } from 'react';
import './stylesheets/scss/main.scss';
import Footer from './components/Footer';
import Header from './components/Header.js';
import ContainerCard from './components/ContainerCard.js';
import CollapsableContainer from './components/CollapsableContainer';

class App extends Component {
  constructor(props) {
    super(props); 
    
      this.state = {
        skills : []
      }

    this.getSkills();
  }

  getSkills(){
    fetch("https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({skills: data.skills});
      console.log('state',this.state);
    })
  }

  render() {
    const {skills} = this.state;
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
      
          <CollapsableContainer skills = {skills}/>  

        </main>

      <Footer />
        
      </div>
    );
  }
}

export default App;
