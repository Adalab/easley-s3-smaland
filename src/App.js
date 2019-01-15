import React, { Component } from "react";
import "./stylesheets/scss/main.scss";
import Footer from "./components/Footer";
import Header from "./components/Header.js";
import ContainerCard from "./components/ContainerCard.js";
import CollapsableContainer from "./components/CollapsableContainer";
import dataBack from "./services/DataBack";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataBack: dataBack,
      skills: [],
      fontClass: '',    
    };
    this.handleFontClass = this.handleFontClass.bind(this);
    this.getSkills();
    this.handleFontClass();
  }

  handleFontClass(){
    if(dataBack.typography === 1){
      this.setState ({
        fontClass: 'userInfo--ubuntu'
      })
    }else if(dataBack.typography === 2){
      console.log("blabla");
      this.setState ({
        fontClass: 'userInfo--quaternary'
      })
    }
  }

  getSkills() {
    fetch(
      "https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json"
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ skills: data.skills });
        console.log("state", this.state);
      });
  }

  render() {
    const { skills } = this.state;
    return (
      <div className="App">
        <Header />
        <main className="created__target">
          <ContainerCard dataBack={this.state.dataBack}fontClass={this.state.fontClass} />
          <CollapsableContainer skills={skills} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
