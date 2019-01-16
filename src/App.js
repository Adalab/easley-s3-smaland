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
      colorClass: '',
      fontClass: '',
      skillsCard: ["HTML", "CSS", "Gulp"]
    };

    this.handleColorInput = this.handleColorInput.bind(this);
    this.handleColorClass = this.handleColorClass.bind(this);
    this.handleFontClass = this.handleFontClass.bind(this);
    this.handleFontInput = this.handleFontInput.bind(this);
    this.getSkills();
  }

  handleColorInput(event) {
    const currentValue = event.target.value;
    dataBack.palette = currentValue;
    console.log(dataBack);
    this.handleColorClass();
  }

  handleColorClass() {
    const { palette } = this.state.dataBack;
    if (palette === "1") {
      this.setState({
        colorClass: 'box__card'
      })
    } else if (palette === "2") {
      this.setState({
        colorClass: 'box__card--red'
      })
    } else if (palette === "3") {
      this.setState({
        colorClass: 'box__card--grey'
      })
    } else if (palette === "4") {
      this.setState({
        colorClass: 'box__card--purple'
      })
    } else if (palette === "5") {
      this.setState({
        colorClass: 'box__card--orange'
      })
    }
  }

  handleFontInput(event) {
    const currentValue = event.target.value;
    dataBack.typography = currentValue;
    this.handleFontClass();
  }

  handleFontClass() {
    const { typography } = this.state.dataBack;
    if (typography === "1") {
      this.setState({
        fontClass: 'userInfo--ubuntu'
      })
    } else if (typography === "2") {
      this.setState({
        fontClass: 'userInfo--quaternary'
      })
    } else if (typography === "3") {
      this.setState({
        fontClass: 'userInfo--mont'
      })
    } else if (typography === "4") {
      this.setState({
        fontClass: 'userInfo--hand'
      })
    } else if (typography === "5") {
      this.setState({
        fontClass: 'userInfo-libre'
      })
    }
  }

  getSkills() {
    fetch(
      "https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ skills: data.skills });
      });
  }

  render() {
    const { skills } = this.state;
    return (
      <div className="App">
        <Header />
        <main className="created__target">
          <ContainerCard dataBack={this.state.dataBack} colorClass={this.state.colorClass} fontClass={this.state.fontClass} skillsCard={this.state.skillsCard} />
          <CollapsableContainer skills={skills} handleColorInput={this.handleColorInput} handleFontInput={this.handleFontInput} dataBack={this.state.dataBack} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
